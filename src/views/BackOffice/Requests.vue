<template>
  <div>
    <NavbarSemLog />
    <div class="filterDiv">
      <h1 class="orange darken-3">Gestão de Pedidos</h1>
    </div>
    <v-container class="my-5">
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="request in requests" :key="request.id">
        <v-card class="text-center ma-3 orange padding">
          <v-responsive class="pt-3">image goes here</v-responsive>
          <v-card-text>
            <div class="subheading">{{request.id}}</div>
            <div class="subheading">{{request.user_name}}</div>
            <div class="subheading">{{request.budget}}</div>
          </v-card-text>
          <v-row>
            <v-col cols="6">
              <v-text-field v-model="budget[request.id - 1]" label="Orçamento"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-card-actions>
                <v-btn color="primary" @click="sendBudget(request.id - 1)" class="ma-1">
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
  <Footer ></Footer>
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

Footer{
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
            this.$store.commit("UPDATEBUDGET", this.budget[id]);
            this.requests = this.requests.filter(
              request => request.id !== id + 1
            );
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
