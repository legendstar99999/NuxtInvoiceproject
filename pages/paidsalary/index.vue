<template>
  <v-layout>
    <v-row>
      <v-col cols="12" md="12">
        <v-row class="pa-4">
          <h1 class="title">Salary</h1>
          <v-spacer></v-spacer>
        </v-row>
      </v-col>

      <v-col cols="12" sm="12">
        <div class="display_section">
          <h6 class="display-1 text-center pt-5"> Statistic  (last 3 months) </h6>
          <v-row class="center pb-5" style="width:100%;height:100%">
            <v-col cols="12" sm="6">
              <h6 class="grey--text text-center subtitle-1 my-4">Unpaid Number</h6>
              <h6 class="display-1 text-center">{{ this.totalpaid_num }}</h6>
            </v-col>

            <v-col cols="12" sm="6">
              <h6 class="grey--text text-center subtitle-1 my-4">Unpadi Summa</h6>
              <h6 class="display-1 text-center">{{ this.totalpaid_summa }} kr</h6>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col cols="12" md="12">
        <p class="overline">All Salary</p>
        <v-card tile width="100%" class="pa-8">
          <v-row>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              solo
              dense
              class="mb-4 pa-4"
              color="#336882"
            ></v-text-field>
          </v-row>
          <v-data-table
            :headers="headers"
            :items="paidsalary"
            :items-per-page="10"
            class="elevation-1"
            :search="search"
          >
            <template v-slot:item.action="{ item }">
              <v-btn dark small color="cyan" @click="handleClick(item)" >
                <v-icon small dark >mdi-checkbox-marked-outline</v-icon> Action
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  middleware: "auth",
  layout: "admin",
  components: {  },
  
  data() {
    return {
      search: "",
      headers: [
        { text: "Name", value: "customername" },
        { text: "Person Number", value: "userid" },
        { text: "Salary", value: "salary" },
        { text: "Bank", value: "ocrid" },
        { text: "Date", value: "duedate" },
        { text: "Action", value: "action" }
      ],
      paidsalary: [],
      totalpaid_num: 0,
      totalpaid_summa: 0
    };
  },

  async beforeMount() {
    this.getAllSalary();
  },

  methods: {
    async getAllSalary() {
      await this.$axios.post("/invoices/admin/", { "admin": true }).then(res => {
        this.paidsalary = res.data.filter(e => e.salarypaid === false);
        console.log(this.paidsalary);
        this.totalpaid_num = this.paidsalary.length;
        let sum = 0;
        for (var i = 0; i<this.totalpaid_num; i++ ) {
          if (this.paidsalary[i].salary == null) {
            this.paidsalary[i].salary = 0;
          }
          sum += this.paidsalary[i].salary;
        }
        this.totalpaid_summa = sum;
      });
    },

    handleClick(a) {
      this.$router.push("/paidsalary/" + a._id);
      console.log(a)
    }
  }
};
</script>

<style scoped>
  .display_section {
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