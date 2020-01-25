<template>
 
    <div>
      <v-toolbar color="orange darken-1" dark >
        <v-toolbar-title>  <router-link :to="{name: 'home'}" tag="button">
            <v-btn text > Logo</v-btn>
          </router-link>
         
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <router-link :to="{name:'services'}" tag="button"> <v-btn text>Serviços</v-btn></router-link>
          <v-btn text>Galeria</v-btn>
          <v-btn text>Sobre</v-btn>
            <router-link :to="{name:'login'}" tag="button" v-if="getLoggedUser().id==-1"><v-btn text>Login</v-btn></router-link>
          <!-- <buttonModalLogin v-if="getLoggedUser().id==-1"></buttonModalLogin> -->
          <!--<buttonModalRegister v-if="getLoggedUser().id==-1"></buttonModalRegister>-->

          <v-menu offset-y v-if="getLoggedUser().id!=-1">
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on">
                <v-icon>mdi-account</v-icon>
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-if="getLoggedUser().type==3">
                <v-list-item-title >
                  <v-btn text>Perfil</v-btn>
                </v-list-item-title>
              </v-list-item>
              <v-list-item v-if="getLoggedUser().type==3">
                <v-list-item-title>
                  <v-btn text>Meus Pedidos</v-btn>
                </v-list-item-title>
              </v-list-item>
              <v-list-item v-if="getLoggedUser().type==1">
                <v-list-item-title>
                 <router-link :to="{name:'user-backoffice'}" tag="button"> <v-btn text>Gestão de Users</v-btn></router-link>
                </v-list-item-title>
              </v-list-item> 
              <v-list-item v-if="(getLoggedUser().type==1||getLoggedUser().type==2)">
                <v-list-item-title>
                  <router-link :to="{name:'request-backoffice'}" tag="button"> <v-btn text>Gestão de Pedidos</v-btn></router-link>
                </v-list-item-title>
              </v-list-item> 
               <v-list-item v-if="(getLoggedUser().type==1||getLoggedUser().type==2)">
                <v-list-item-title>
                  <router-link :to="{name:'catalog-backoffice'}" tag="button"><v-btn text>Gestão de Serviços</v-btn></router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item v-if="(getLoggedUser().type==1||getLoggedUser().type==2)">
                <v-list-item-title>
                  <router-link :to="{name:'menus-backoffice'}" tag="button"><v-btn text>Gestão de Menus</v-btn></router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link :to="{name:'home'}" tag="button"><v-btn text v-on:click="logout()">Log Out</v-btn></router-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>
      </v-toolbar>
    </div>
 
</template>


<script>
//import buttonModalLogin from "./buttonModalLogin";
//import buttonModalRegister from "./buttonModalRegister";
export default {
  components: {
    //buttonModalLogin,
    //buttonModalRegister
  },

  data() {
    return {
      //loggedUser:this.$store.getters.getLoggedUser,
    };
  },
  beforeCreate: function() {
    this.loggedUser = this.$store.getters.getLoggedUser;
  },
  updated: function() {
    this.loggedUser = this.$store.getters.getLoggedUser;
  },
  computed: {},
  methods: {
    logout() {
      this.$store.commit("LOGOUT");
    },
    getLoggedUser() {
      return this.$store.getters.getLoggedUser;
    }
  }
};
</script>
