<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on">Login</v-btn>
    </template>

    <v-card class="elevation-12">
      <v-toolbar color="orange darken-1" dark>
        <v-toolbar-title>Login</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-card-text>
        <v-form class="flex mb-0">
          <v-text-field
            label="Username"
            name="login"
            prepend-icon="person"
            type="text"
            v-model="username"
          ></v-text-field>

          <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="lock"
            type="password"
            v-model="password"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-col cols="auto" class="text-center pl-0">
          <v-row class="flex-column ma-0 fill-height justify-center">
            <v-col>
              <v-btn v-on:click="login(),dialog = false" dark>Login</v-btn>
            </v-col>
            <v-col>
              <buttonModalRegister />
            </v-col>
          </v-row>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import buttonModalRegister from "./buttonModalRegister";
import Swal from "sweetalert2";

export default {
  components: {
    buttonModalRegister
  },

  data() {
    return {
      dialog: false,
      username: "",
      password: ""
    };
  },
  computed: {},
  methods: {
    login() {
      if (this.$store.getters.getLogin(this.username, this.password)) {
        this.$store.commit(
          "SET_LOGGED_USER",
          this.$store.getters.getLogin(this.username, this.password)
        );
        Swal.fire({
          title: "Login efetuado com sucesso!",
          icon: "success"
        });
      } else {
         Swal.fire({
          title: "Dados incorretos!",
          icon: "error"
        });
      }
    }
  }
};
</script>