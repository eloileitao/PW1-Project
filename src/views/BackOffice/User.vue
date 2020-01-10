<template>
  <div class="about">
    <table>
      <tr>
        <th>ID User</th>
        <th>Name User</th>
        <th>Ações</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>
          <button @click="removeUser(user.id)">Remover</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Swal from "sweetalert2"
export default {
  data: function() {
    return {
      users: this.$store.state.users
    }
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
          confirmButtonColor: '#009933',
          cancelButtonText: "Não",
          cancelButtonColor: '#990000',
          reverseButtons: true
        })
        .then(result => {
          if (result.value) {
            swalButtons.fire(
              "Utilizador removido com sucesso",
              "",
              "success"
            );
            this.users = this.users.filter(user => user.id !== id);
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalButtons.fire(
              "Cancelado",
              "A sua ação foi cancelada",
              "error"
            );
          }
        });
    }
  }
};
</script>
