<template>
  <v-layout>
    <v-row>
      <v-col cols="12" sm="12">
        <div class="d-flex justify-space-between align-center" style="width: 100%">
          <p class="py-0 my-0 black--text headline">Invoices</p>
          <v-btn color="success" to="/newinvoice">New invoice</v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="12">
        <div class="display_total">
          <v-row justify="center" align="center" style="width:100%;height:100%">
            <v-col cols="12" sm="4">
              <h6 class="grey--text text-center subtitle-1 my-4">Overpaid (inc VAT)</h6>
              <h6 class="display-1 text-center">0,00 kr</h6>
            </v-col>

            <v-col cols="12" sm="4">
              <h6 class="grey--text text-center subtitle-1 my-4">Overdue (inc VAT)</h6>
              <h6 class="display-1 text-center">28 375,000 kr</h6>
            </v-col>
            <v-col cols="12" sm="4">
              <h6 class="grey--text text-center subtitle-1 my-4">Outstanding (inc VAT)</h6>
              <h6 class="display-1 text-center">28 375,00</h6>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" sm="12">
        <dateTable :allItems.sync="invoices" />
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
import dateTable from "@/components/dataTable.vue";

export default {
  middleware: "auth",
  layout: "admin",

  components: {
    dateTable
  },
  data() {
    return {
      invoices: [],
      userDetail: this.$auth.$storage.getUniversal('loginuser')
    };
  },
  methods: {
  },
  
  async beforeMount() {
    if ( this.userDetail.admin ) {
      this.getAdminInvoice();
    } else {
      this.getUserInvoice();
    };
  },

  methods: {
    async getUserInvoice () {
      await this.$axios.get("/invoices/").then(res => {
        res.data.forEach(inv => {
          if (inv.published && !inv.invoicepaid && new Date(inv.duedate) > Date.now())
            inv.status = "Published";
          else if (inv.published && !inv.invoicepaid && new Date(inv.duedate) < Date.now() )
            inv.status = "Overdue";
          else if (inv.published && inv.invoicepaid) inv.status = "Paid";
          else if (!inv.published) inv.status = "Draft";

          if (inv.duedate) {
            inv.duedate = new Date(inv.duedate).toISOString().substring(0, 10);
            inv.createdate = new Date(inv.createdate).toISOString().substring(0, 10);
          }
          inv.fromDate = inv.createdate || "-";
          inv.deliveryDate = "-";
        });

        this.invoices = res.data;
        console.log("invoice_part", res);
      })
      .catch(err => console.log(err));
    },

    async getAdminInvoice () {
      await this.$axios.post("/invoices/admin/", { "admin": true }).then(res => {
        res.data.forEach(inv => {
          if (inv.published && !inv.invoicepaid && new Date(inv.duedate) > Date.now())
            inv.status = "Published";
          else if (inv.published && !inv.invoicepaid && new Date(inv.duedate) < Date.now() )
            inv.status = "Overdue";
          else if (inv.published && inv.invoicepaid) inv.status = "Paid";
          else if (!inv.published) inv.status = "Draft";

          if (inv.duedate) {
            inv.duedate = new Date(inv.duedate).toISOString().substring(0, 10);
            inv.createdate = new Date(inv.createdate).toISOString().substring(0, 10);
          }
          inv.fromDate = inv.createdate || "-";
          inv.deliveryDate = "-";
        });

        this.invoices = res.data;
        console.log("invoice_part", res);
      })
      .catch(err => console.log(err));
    }
  }
};
</script>
<style scoped>
  .display_total {
    display: block;
    width: 100%;
    height: 100%;
    background-color: #dceaf5;
  }
  .itm {
    display: block;
    width: 100%;
    height: 100%;
    align-items: center;
    margin: auto;
  }
  th {
    vertical-align: top;
  }
</style>