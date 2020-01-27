<template>
  <div>
    <NavbarSemLog />
      <h1 class="center">Perfil</h1>
    <v-container fluid>
      <br />
      <v-layout column>
        <v-card>
          <v-card-text>
            <v-row>
              
                <v-flex >
                  <v-img max-height="125" max-width="125" class="centerImg" :src="this.loggedUser.foto"></v-img>
                </v-flex> 
            </v-row>
            <br>
            <h2 class="center">Bem vindo {{this.loggedUser.username}}</h2>
            <br> <br>
            <v-row>
                <v-col cols="6">
                    <h5>Username:</h5>
                    <v-text-field v-model="editUsername" prepend-icon="person" :label="this.loggedUser.username"  required></v-text-field>
                    <h5>Email:</h5>
                    <v-text-field v-model="editEmail" prepend-icon="email" :label="this.loggedUser.email"  required></v-text-field>
                    <h5>Password:</h5>
                    <v-text-field v-model="editPassword" prepend-icon="lock" :label="this.loggedUser.password" type="password" required></v-text-field>
                </v-col>
                
                <v-col cols="6">
                    <h1>Necessita ajuda?</h1> <br>
                    <h3>Deseja alterar a sua informação?</h3>
                    <br>
                    <p>A sua informação atua encontra-se exposta no interior de cada caixa de texto, para puder alterar so
                      necessita de primir a caixa de texto e escrever a sua nova indormação. De seguida prima o botão "Alterar Informação" e 
                      ja está!
                    </p>
                    <h5>Nota: Os campo que nao preencher irão permanecer com a informação que possuia anteriormente.</h5>
                </v-col>
             </v-row>
          </v-card-text>
          <v-card-actions >
            <v-flex class="center"><v-btn  @click="editUser()">Alterar Informação</v-btn></v-flex>
              
          </v-card-actions>
        </v-card>
      </v-layout>
      <Footer></Footer>
    </v-container>
  </div>
</template>


<style scoped>
footer {
  margin-top: 100px;
}

.center {
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: center;
}

.centerImg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}


</style>

<script>
import NavbarSemLog from "@/components/NavBarSemLog.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    NavbarSemLog,
    Footer
  },
  data: function() {
    return {
      loggedUser: this.$store.state.loggedUser,
      users: this.$store.state.users,
      editUsername: "",
      editEmail: "",
      editPassword: ""   
    };
  },

  methods: {
    check() {
      console.log(this.loggedUser);
    },

    editUser() {
        for (let i = 0; i < this.users.length; i++) {
            if(this.loggedUser.id === this.users[i].id){
                if(this.editUsername == ""){
                    this.editUsername = this.loggedUser.username
                } else {
                     this.users[i].username = this.editUsername
                }
                if(this.editEmail == ""){
                    this.editEmail = this.loggedUser.email
                } else {
                      this.users[i].email = this.editEmail
                }
                if(this.editPassword == ""){
                    this.editPassword = this.loggedUser.password
                } else {
                    this.users[i].password = this.editPassword
                }
            }
            
        }
    }
  }
};
</script>
