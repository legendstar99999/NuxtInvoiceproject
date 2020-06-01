<template>
  <div >
    <div class="d-flex justify-center" >
      <div style="width: 650px; margin-top: 50px; padding: 20px 20px 30px 50px;">
        <v-alert
          type="error"
          v-model="alert"
          dismissible
          color="red"
          border="left"
          elevation="2"
          colored-border
        >
          The password does not match !
        </v-alert>
        <v-row>
          <v-card-title>Skapa nytt losenord</v-card-title>
          <v-card-text>
            Ange ett losenord med minst 8 tecken som innehaller bade sma och stora bokstaver och minst en siffra
          </v-card-text>
          <v-col cols="12" md="6" sm="12">
            <v-text-field
              :rules="[rules.required, rules.min]"
              type="password"
              single-line
              outlined
              v-model="newpassword"
              label="Lösenord" 
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <v-text-field
              :rules="[rules.required, rules.min]"
              type="password"
              single-line
              outlined
              v-model="confimpasword" 
              label="Uprepa nytt lösenord" 
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-btn
              large
              color="#336882"
              @click="setnewPassword()"
            ><span style="color: white;">Skicka</span></v-btn>
          </v-col>
        </v-row>

      </div>

      <!-- This success is for block part -->
      <div justify="center">
        <v-dialog v-model="sent_password" persistent max-width="360">
          <v-card>
            <v-card-title class="headline d-flex justify-center">
              <div class="d-flex flex-no-wrap">
                <v-icon large color="red darken-2">mdi-checkbox-marked-circle-outline</v-icon>
                <div class="ml-3 text-center">Your password changed successfully !</div>
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
    newpassword: '',
    confimpasword: '',
    sent_password: false,
    alert: false,
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => ('The email and password you entered don\'t match'),
    },
  }),

  methods: {
    async setnewPassword() {
      if(this.newpassword !== this.confimpasword) {
        this.alert = true
      }else {
        await this.$axios.setToken(this.$auth.getToken("local"));
        await this.$axios.post(`/mail/newpassword/${this.$route.params.userid}/${this.$route.params.token}`, { "password": this.newpassword }).then(res => {
          if(res.status === 202) {
            this.sent_password = true;
          }
        });
      }
    },

    returnLogin() {
      this.$router.push("/login");
    }
  }
};
</script>