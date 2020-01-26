<template>
  <div>
    <NavbarSemLog />
    <div class="filterDiv">
      <h1 style="color:darkorange">Gestão de Pedidos</h1>
    </div>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="request in requests" :key="request.id">
          <v-card class="text-center ma-3 orange padding">
            <v-list-item-content>
              <div class="overline">{{request.id}}</div>
              <v-list-item-title class="headline mb-1">{{request.serviceName}}</v-list-item-title>
              <v-list-item-subtitle>{{request.menuName}}</v-list-item-subtitle>
              <div class="subheading">{{request.date}}</div>
              <div class="subheading">{{request.time}}</div>
            </v-list-item-content>
            <v-card-text>
              <div class="subheading">Utilizador: {{request.userName}}</div>
            </v-card-text>
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="budget[request.id]" label="Orçamento"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-card-actions>
                  <v-btn color="primary" @click="sendBudget(request.id)" class="ma-1">
                    Accept
                    <v-icon dark small class="pa-1">mdi-checkbox-marked-circle</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer></Footer>
  </div>
</template>


<style scoped>
template {
  color: #ffcc66;
}

.padding {
  padding-left: 5%;
  padding-right: 5%;
}

.filterDiv {
  color: white;
  text-align: center;
}

.margin {
  margin-top: 20px;
}

.marginBtn {
  margin-left: 20px;
}

footer {
  margin-top: 250px;
}
</style>


<script>
import NavbarSemLog from "@/components/NavBarSemLog.vue";
import Footer from "@/components/footer.vue";
import Swal from "sweetalert2";
export default {
  components: {
    NavbarSemLog,
    Footer
  },
  data: function() {
    return {
      requests: this.$store.state.requests,
      budget: []
    };
  },
  methods: {
    sendBudget(id) {
      const swalButtons = Swal.mixin({
        customClass: {
          confirmButton: "confirm-button-class",
          cancelButton: "cancel-button-class"
        },
        buttonsStyling: true
      });

      swalButtons
        .fire({
          title: "Deseja enviar este orçamento?",
          text: "Não vai ser possivel reverter esta ação",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sim",
          confirmButtonColor: "#009933",
          cancelButtonText: "Não",
          cancelButtonColor: "#990000",
          reverseButtons: true
        })
        .then(result => {
          if (result.value) {
            swalButtons.fire("Orçamento enviado com sucesso", "", "success");
            

           for(let i = 0; i < this.requests.length; i++){
              if (this.requests[i].id === id) {
                console.log(this.requests[i])
                this.$store.commit("ADDREQUESTTOUSER", {
                  id: this.$store.getters.getRequestToUserLastId,
                  idUser: this.requests[i].userId,
                  userName: this.requests[i].userName,
                  serviceName: this.requests[i].serviceName,
                  menuName: this.requests[i].menuName,
                  budget: this.budget[i],
                  state: 2 
                 /*  date: this.datePicker,
                  time: this.timePicker,
                  vestuario: this.selectedVestuario.name */
                 }); 

                this.requests = this.requests.filter(
              request => request.id !== id
               );
              }
              }

              
            
            
           
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalButtons.fire("Cancelado", "A sua ação foi cancelada", "error");
          }
        });
    }
  }
};
</script>
