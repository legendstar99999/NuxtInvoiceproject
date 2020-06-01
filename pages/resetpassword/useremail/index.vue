<template>
  <div style="background: rgba(0, 0, 0, 0.14); height: 100%">
    <div class="d-flex justify-center" >
      <v-card width="600" style="margin-top: 50px; padding: 20px 20px 30px 50px;">

        <v-alert
          type="error"
          v-model="alert"
          dismissible
          color="red"
          border="left"
          elevation="2"
          colored-border
        >
          This user does not exit!
        </v-alert>
        <v-row>
          <v-card-title>Atersall losenord</v-card-title>
          <v-card-text>
            Ange den e-postadress du angav nar du skapade ditt konto.
            En lank för losendorsaterstallning skickas darefter ut till angiven e-postadress
          </v-card-text>
          <v-col cols="12" md="12" sm="12">
            <v-text-field
              single-line
              outlined
              v-model="userEmail" 
              :rules="emailRules" 
              label="E-mail" 
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-btn
              large
              color="#336882"
              @click="getuserEmail()"
            ><span style="color: white;">Skicka</span></v-btn>
          </v-col>
        </v-row>

      </v-card>

      <!-- This success is for block part -->
      <div justify="center">
        <v-dialog v-model="sent_email" persistent max-width="300">
          <v-card>
            <v-card-title class="headline d-flex justify-center">
              <div class="d-flex flex-no-wrap">
                <v-icon large color="red darken-2">mdi-checkbox-marked-circle-outline</v-icon>
                <div class="ml-3 text-center">Please check your email !</div>
              </div>
            </v-card-title>
            <v-card-actions class="justify-center">
              <v-btn small @click="returnLogin()">Return</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <!-- end block part -->
    </div>
  </div>
</template>
<script>

export default {
  components: {
  },
  
  data: () => ({
    rules: {
      required: value => !!value || "Required."
    },
    userEmail: '',
    alert: false,
    sent_email: false,
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]
  }),

  methods: {
    async getuserEmail() {
      await this.$axios.setToken(this.$auth.getToken("local"));
      await this.$axios.post("/mail/", { "email": this.userEmail }).then(res => {
        console.log(res.status)
        if(res.status === 200) {
          this.sent_email = true;
        }else {
          this.alert = true;
        }
      });
    },
    
    returnLogin() {
      this.$router.push("/login");
    },
  }
};
</script>