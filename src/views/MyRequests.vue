<template>
  <div class="about">
    <NavbarSemLog />
    <div class="Div">
      <h1 style="color:darkorange">Meus Pedidos</h1>
    </div>
  
    <table>
      <tr>
        <th>ID do Pedido</th>
        <th>Nome do Serviço Pedido</th>
        <th>Nome do Menu Pedido</th>
        <th>Montante a Pagar</th>
        <th>Estado</th>
      </tr>
      <tr v-for="userRequest in userRequests" :key="userRequest.id">
        <td>{{ userRequest.id }}</td>
        <td>{{ userRequest.serviceName }}</td>
        <td>{{ userRequest.menuName }}</td>
        <td>{{ userRequest.budget }}</td>
        <td>
          
          <v-btn v-if="userRequest.state == 1" small color="error">Em Analise</v-btn>
          <v-btn v-if="userRequest.state == 2" small color="error">Pagar</v-btn>
          <v-btn v-if="userRequest.state == 3" small color="error">Concluído</v-btn>
        </td>
      </tr>
    </table>
    <Footer ></Footer>
  </div>
</template>


<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: darkorange;
  color: white;
}

.filterDiv {
  display: flex;
  align-items: center;
  justify-content: center;
}

.Div {
  color: white;
  text-align: center;
}

.padding {
  padding-left: 5%;
  padding-right: 5%;
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
      userRequests: this.$store.state.userRequests,
    };
  },

  created() {
    this.userRequests = this.$store.getters.getUserRequests.filter(request => request.idUser === this.$store.getters.getLoggedUser.id);
  //getService($route.params.serviceId)
  //this.serviceId=this.$route.params.serviceId,
  console.log(this.menus)
    },

  methods: {
    
    removeUser(id) {
      const swalButtons = Swal.mixin({
        customClass: {
          confirmButton: "confirm-button-class",
          cancelButton: "cancel-button-class"
        },
        buttonsStyling: true
      });

      swalButtons
        .fire({
          title: "Deseja mesmo remover este utilizador?",
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
            swalButtons.fire("Utilizador removido com sucesso", "", "success");
            this.users = this.users.filter(user => user.id !== id);
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalButtons.fire("Cancelado", "A sua ação foi cancelada", "error");
          }
        });
    },

    removeAdmin(id) {
      const swalButtons = Swal.mixin({
        customClass: {
          confirmButton: "confirm-button-class",
          cancelButton: "cancel-button-class"
        },
        buttonsStyling: true
      });

      swalButtons
        .fire({
          title: "Deseja mesmo remover este utilizador da posição de admin?",
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
            swalButtons.fire("Utilizador removido com sucesso", "", "success");
            for (let i = 0; i < this.users.length; i++) {
              if (this.users[i].id === id) {
                this.users[i].type = 3;
                console.log(this.users[i].type);
              }
            }
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalButtons.fire("Cancelado", "A sua ação foi cancelada", "error");
          }
        });
    },
    addAdmin(id) {
      const swalButtons = Swal.mixin({
        customClass: {
          confirmButton: "confirm-button-class",
          cancelButton: "cancel-button-class"
        },
        buttonsStyling: true
      });

      swalButtons
        .fire({
          title: "Deseja mesmo tornar este utilizador em admin?",
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
            swalButtons.fire("Utilizador removido com sucesso", "", "success");
            for (let i = 0; i < this.users.length; i++) {
              if (this.users[i].id === id) {
                this.users[i].type = 1;
                console.log(this.users[i].type);
              }
            }
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalButtons.fire("Cancelado", "A sua ação foi cancelada", "error");
          }
        });
    },
    filterUsersByName() {
       this.filteredUsers = [];
        let filterNameResult = false;
      for (let i = 0; i < this.users.length; i++) {
           this.username = this.users[i].username
        let upperName = this.username.toUpperCase();
        let upperFilterName = this.nameFilter.toUpperCase();

        filterNameResult = upperName.includes(upperFilterName);

        if (filterNameResult) {
          this.filteredUsers.push(this.users[i]);
        }
      }
    }
  }
};
</script>
