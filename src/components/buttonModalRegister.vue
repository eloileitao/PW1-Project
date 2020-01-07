<template>
      <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
            
             <v-btn text v-on="on" >Criar conta</v-btn>
            </template>

            <v-card class="elevation-12">
              <v-toolbar dark flat>
                <v-toolbar-title>Registo</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-spacer></v-spacer>
              <v-card-text>
                <v-form>
                <v-text-field label="Login" name="login" prepend-icon="person" type="text" v-model="username"></v-text-field>
                  <v-text-field label="Email" name="email" prepend-icon="mail" type="email" v-model="email"></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                  <v-text-field
                    id="passwordConfirmar"
                    label="Confirmar Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="confirmarPassword"
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions class="justify-center">
                <v-btn dark @click="registo(), dialog=false" >Registar Conta</v-btn>
                
            
              </v-card-actions>
            </v-card>
          </v-dialog>
</template>

<script>
//import buttonModalRegister from "./buttonModalRegister"

export default {
    components:{
    //buttonModalRegister,
    },



data() {
    return {
      dialog: false,
      username: "",
      password: "",
      confirmarPassword:"",
      email:""
    };
  },
  computed:{
   

  },
  methods:{
    registo(){
      if(this.confirmarPassword==this.password){
      this.$store.commit('REGISTER',{
        id:this.$store.getters.getLastId,
        username:this.username,
        password:this.password,
        email:this.email,
        foto:"",


        })}
        else{
          alert("Palavras passe nao coincidem")
        }

    }
  }
}
</script>