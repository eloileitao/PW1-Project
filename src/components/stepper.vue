<template>
  <v-content>
    <br />
    <h1 style="text-align: center">Faça o seu pedido</h1>

    <br />
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Tipo de Serviço</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">Menu/Evento</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Data, hora e tempo de duração</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" color>
            <v-row justify="space-between">
              <v-col v-for="service in services" v-bind:key="service.id" md="3" class="ma-5">
                <cardhover :name="service.name" :image="service.imgLink"></cardhover>
              </v-col>
            </v-row>
          </v-card>

          <v-btn color="primary" @click="e1 = 2">Continue</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 1">Continue</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <br />
    <br />
    <br />
  </v-content>
</template>



<script>
import cardhover from "@/components/cardHover.vue";
export default {
  name: "stepper",
  components: {
    cardhover
  },

  data() {
    return {
      services: [],
      e1: 0
    };
  },
  created() {
    this.services = this.$store.getters.getServices;
  }
  //this.$store.getters.getServices
  /*
  methods:{
    getLoggedUser(){

    }
  }*/
};
</script>