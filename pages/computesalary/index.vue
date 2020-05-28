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
              <v-btn fab dark small color="cyan" >
                <v-icon small dark @click="editComputeSalary(item)" :disabled="item.block ? true : false">mdi-checkbox-marked-outline</v-icon>
              </v-btn>
              <v-btn fab dark small color="red">
                <v-icon small dark @click="deleteComputeSalary(item)" :disabled="item.block ? true : false">mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
        
    <!-- This modal is for delete part -->
    <div justify="center">
      <v-dialog v-model="delteSalaryFlag" persistent max-width="260">
        <v-card>
          <v-card-title class="headline d-flex justify-center">
            <div class="d-flex flex-no-wrap">
              <v-icon large color="red darken-2">mdi-delete-variant</v-icon>
              <div class="ml-3 text-center">Are you sure ?</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="delteSalaryFlag = false, userID = ''">
              <v-icon>mdi-close-circle-outline</v-icon>
            </v-btn>
            <v-btn color="green darken-1" text @click="deleteComputeSalaryAxios()">
              <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <!-- end delete part -->

    <!-- This part is for edit part -->
    <v-dialog v-model="editSalaryFlag" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="overline">Edit Salary</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <p class="overline">Salary Infomation</p>
              <v-row>
                <v-col cols="6" sm="6" md="6">
                  <v-text-field 
                    label="User Name" 
                    placeholder="User Name" 
                    outlined color="#336882"
                    v-model="selected_salaryData.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="6" sm="6" md="6">
                  <v-text-field 
                    label="Person Number" 
                    placeholder="Person Number" 
                    outlined color="#336882"
                    v-model="selected_salaryData.personummer"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    label="Salary"
                    placeholder="Salary"
                    outlined
                    color="#336882"
                    v-model="selected_salaryData.salary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    label="Bank Account"
                    placeholder="Bank Account"
                    outlined
                    type="text"
                    color="#336882"
                    v-model="selected_salaryData.bankaccount"
                  ></v-text-field>
                </v-col>
                <v-col cols="6" sm="6" md="6">
                  <v-text-field
                    label="Changeable Fee"
                    placeholder="Fee"
                    outlined
                    type="text"
                    color="#336882"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="editSalaryFlag = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="salaryComputeUpdateAxios()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End edit part -->

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
        { text: "Name", value: "name" },
        { text: "Person Number", value: "personummer" },
        { text: "Salary", value: "salary" },
        { text: "Bank", value: "bankaccount" },
        { text: "Date", value: "create_date" },
        { text: "Action", value: "action"}
      ],
      reignNetSalary: [
        { value: '48571', reignname: 'ALE (33.35%)' },
      ],
      paidsalary: [],
      totalpaid_num: 0,
      totalpaid_summa: 0,

      delteSalaryFlag: false,
      editSalaryFlag: false,

      selected_salaryID: '',
      selected_salaryData: {},
      simpleSalaryData : {
        bankaccount: "",
        create_date: "",
        name: "",
        personummer: "",
        salary: 2252,
        userid: "",
        __v: 0,
        _id: "",
      }
    };
  },

  async beforeMount() {
    this.getAllSalary();
  },

  methods: {
    async getAllSalary() {
		  await this.$axios.post("/salarys/admin/", { "admin": true }).then(res => {
        this.paidsalary = res.data;
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

    deleteComputeSalary (item) {
      this.selected_salaryID = item._id;
      this.delteSalaryFlag = true;
    },

    async deleteComputeSalaryAxios () {
      await this.$axios
        .$delete(`/salarys/${this.selected_salaryID}`)
        .then(res => { 
          this.delteSalaryFlag = false;
          this.selected_salaryID = '';
          this.getAllSalary();
        })
        .catch(err => console.log(err));
    },

    editComputeSalary (item) {
      this.editSalaryFlag = true;
      Object.assign(this.selected_salaryData, item);
    },

    async salaryComputeUpdateAxios () {
      console.log(this.selected_salaryData);
      await this.$axios
        .$patch(`/salarys/${this.selected_salaryData._id}`, this.selected_salaryData)
        .then(async res => {
          Object.assign(this.selected_salaryData, this.simpleSalaryData);
          this.editSalaryFlag = false;
          this.getAllSalary();
        })
        .catch(err => console.log(err));
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