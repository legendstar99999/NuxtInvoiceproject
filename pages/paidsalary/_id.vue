<template>
  <v-layout>
    <v-row >
      <v-col cols="12" md="12" class="d-flex justify-center">
        <v-card tile width="60%" class="pa-8">
          <div class="d-flex justify-center title">
            Find out the salary
          </div>
          <v-row>
            <v-col cols="12">
              <v-subheader class="pl-0">Show thumb when using slider</v-subheader>
              <v-slider
                v-model="slider"
                thumb-label
                max="100000"
              ></v-slider>
            </v-col>
            
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="slider"
                label="Invoice amount"
                outlined
              ></v-text-field>
            </v-col>            
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="net_tax"
                label="Net profit after tax"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>

          <div class="d-flex justify-center text-center">
            <div class="my-2">
              <v-btn color="success" dark @click="extendShowFlag = !extendShowFlag">Extend Show</v-btn>
            </div>
          </div>

          <v-card
            class="mx-auto p-2"
            outlined
            v-if="extendShowFlag"
          >
          <v-container>
            <v-row>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="paid_summa"
                  label="Fakturabelopp exkl moms"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="paid_summa_moms"
                  label="Moms 25% *"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="paid_totalsumma"
                  label="FaKturabelopp inkl moms"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="paid_sum"
                  label="Administrativa avgifter ** ( 3.9%)"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="paid_newsum"
                  label="Fakturabelopp efter avgifter"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="paid_socialsum"
                  label="Social avgiter *"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="paid_newsuminkl"
                  label="Bruttolon inkl sem.ersattning"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="paid_grosssalary"
                  label="Skatteavdrag 30% *"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="paid_grossalarysem"
                  label="Nettolon inkl sem.ersattning"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          </v-card>
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
      slider: 0,
      extendShowFlag:  false,

      invoice_amount: '',
      net_tax: '',

      paid_summa: 0,
      paid_summa_moms: 0,
      paid_totalsumma: 0,

      paid_sum: 0,
      paid_newsum: 0,
      paid_socialsum: 0,

      paid_newsuminkl: 0,
      paid_grosssalary: 0,
      paid_grossalarysem: 0,

      selectedPaidSalary: {}
    };
  },

  async beforeMount() {
    this.getSelectedSalary();
  },

  methods: {
    async getSelectedSalary() {
      await this.$axios
        .$get(`/invoices/${this.$route.params.id}`)
        .then(res => {
          Object.assign(this.selectedPaidSalary, res[0])
          this.paid_summa = this.selectedPaidSalary.summa;
          this.slider = this.paid_summa;
          this.paid_summa_moms = this.paid_summa * 0.25;
          this.paid_totalsumma = this.paid_summa * 1.25;

          this.paid_sum = this.paid_summa * 0.039;
          this.paid_newsum = this.paid_summa - this.paid_sum * 0.039;
          this.paid_socialsum = this.paid_newsum * 0.2390808;

          this.paid_newsuminkl = this.paid_newsum - this.paid_socialsum;
          this.paid_grosssalary = this.paid_newsuminkl * 0.3;
          this.paid_grossalarysem = this.paid_grosssalary - this.paid_grosssalary * 0.3;
        })
        .catch(err => console.log(err));
    },
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