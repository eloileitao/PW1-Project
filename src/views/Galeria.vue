<template>
  <div class="about">
    <NavbarSemLog />
    <h1 class="center">Galeria</h1>
    <v-carousel
      cycle
      height="460"
      hide-delimiter-background
      show-arrows-on-hover
      class="pa-md-12 mx-lg-auto"
    >
      <v-carousel-item v-for="slide in slides" :key="slide">
        <v-sheet height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="slide" aspect-ratio="2"></v-img>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <br />
    <div>
      <h3 class="center">Avaliações</h3>
    </div>
    <div v-for="review in reviews" :key="review.id" class="pa-md-12 mx-lg-auto">
      <v-card class="mx-auto" max-width="344" outlined shaped>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">{{review.userName}}</div>
            <v-list-item-title class="headline mb-1"><v-rating :value="review.rating" background-color="grey" color="grey" readonly></v-rating></v-list-item-title>
            <v-list-item-subtitle>{{review.comment}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      
    </div>
    <Footer></Footer>
  </div>
</template>


<style scoped>

.center {
  margin-top: 25px;
  text-align: center;
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
      reviews: this.$store.state.reviews,
      slides: [
        "https://www.eventosesabores.pt/wp-content/uploads/2019/06/eventosesabores_homepage_img5.jpg",
        "https://mariolagastronomia.com.br/wp-content/uploads/2017/10/Servico-de-catering-SP.jpg",
        "https://www.storycatering.pt/wp-content/uploads/2015/10/catering-eventos-orcamentos.png",
        "https://pmemagazine.sapo.pt/wp-content/uploads/2016/11/zaton-catering-001-660x330.jpg"
      ]
    };
  },

  methods: {
    payment(id) {
      const swalButtons = Swal.mixin({
        customClass: {
          confirmButton: "confirm-button-class",
          cancelButton: "cancel-button-class"
        },
        buttonsStyling: true
      });

      swalButtons
        .fire({
          title: "Deseja mesmo proceder com o pagamento?",
          text: "Verifique se concorda com o montante mostrado",
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
            swalButtons.fire(
              "Pagamamento realizado com sucesso",
              "",
              "success"
            );
            for (let i = 0; i < this.userRequests.length; i++) {
              if (this.userRequests[i].id === id) {
                this.userRequests[i].state = 3;
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

    reviewOrder(id) {
      this.$store.commit("ADDREVIEW", {
        id: this.$store.getters.getReviewLastId,
        userId: this.$store.getters.getLoggedUser.id,
        userName: this.$store.getters.getLoggedUser.username,
        rating: this.rating,
        comment: this.comment
      });
      this.userRequests = this.userRequests.filter(
        request => request.id !== id
      );
    }
  }
};
</script>
