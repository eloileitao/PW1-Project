<template>
  <v-content>
    <br />
    <h1 style="text-align: center">Faça o seu pedido</h1>

    <br />
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1" @click="e1 = 1">
          <v-btn text>Tipo de Serviço</v-btn>
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2" @click="e1 = 2">
          <v-btn text>Menu/Evento</v-btn>
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3" @click="e1 = 3">
          <v-btn text>Data, hora e tempo de duração</v-btn>
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12">
            <v-row justify="space-between">
              <v-col v-for="service in services" v-bind:key="service.id" md="3" class="ma-5">
                <div v-bind:class="{selected:service.selected}">
                  <v-hover v-slot:default="{ hover }">
                    <v-card color="grey lighten-4" height="150 px" outlined>
                      <v-img :aspect-ratio="16/9" :src="service.imgLink">
                        <div
                          v-if="hover || service.selected==true"
                          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-1 white--text"
                          style="height: 100%;"
                          v-on:click="setSelectedService(service.id)"
                        >{{service.name}}</div>
                      </v-img>
                    </v-card>
                  </v-hover>
                </div>
              </v-col>
            </v-row>
          </v-card>

          <v-btn color="primary" @click="e1=2">Continue</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12">
            <v-row justify="space-between">
              <v-col v-for="menu in menus" v-bind:key="menu.id" md="3" class="ma-5">
                <div v-bind:class="{selected:menu.selected}">
                  <v-hover v-slot:default="{ hover }">
                    <v-card color="grey lighten-4" height="150 px" outlined>
                      <v-img :aspect-ratio="16/9" :src="menu.imgLink">
                        <div
                          v-if="hover || menu.selected==true"
                          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-1 white--text"
                          style="height: 100%;"
                          v-on:click="setSelectedMenu(menu.id)"
                        >{{menu.name}}</div>
                      </v-img>
                    </v-card>
                  </v-hover>
                </div>
              </v-col>
            </v-row>
          </v-card>

          <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12">
            <v-row>
              <v-col class="ma-5">
                <v-date-picker
                  v-model="datePicker"
                  year-icon="mdi-calendar-blank"
                  prev-icon="mdi-skip-previous"
                  next-icon="mdi-skip-next"
                  full-width
                ></v-date-picker>
              </v-col>
              <v-col class="ma-5">
                <v-time-picker v-model="timePicker" color="green lighten-1" full-width></v-time-picker>
              </v-col>
            </v-row>
          </v-card>

          <v-btn color="primary" @click="submitNewRequest()">Submeter Pedido</v-btn>

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
import Swal from "sweetalert2";
//import cardhover from "@/components/cardHover.vue";
export default {
  name: "stepper",
  components: {
    //cardhover
  },

  data() {
    return {
      services: [],
      menus: [],
      e1: 0,
      datePicker: new Date().toISOString().substr(0, 10),
      timePicker: null,
      request: null,
      selectedMenu: null,
      selectedService:null,
    };
  },
  created() {
    this.services = this.$store.getters.getServices;
    this.menus = this.$store.getters.getMenus;
  },
  methods: {
    setSelectedService(id) {
      for (let i = 0; i < this.services.length; i++) {
        if (this.services[i].selected == true && this.services[i].id != id) {
          this.services[i].selected = false;
        }
        if (this.services[i].selected == false && this.services[i].id == id) {
          this.services[i].selected = true;
          this.selectedService=this.services[i]
          console.log("Selected service:   " + this.services[i]);
        }
      }
    },
    setSelectedMenu(id) {
      for (let i = 0; i < this.menus.length; i++) {
        if (this.menus[i].selected == true && this.menus[i].id != id) {
          this.menus[i].selected = false;
        }
        if (this.menus[i].selected == false && this.menus[i].id == id) {
          this.menus[i].selected = true;
          this.selectedMenu= this.menus[i];
          console.log("Selected menu:   " + this.menus[i]);
        }
      }
    },
    submitNewRequest() {
      if (!this.menus.some(menu => menu.selected == true)) {
        //this.selectedMenu=this.menus.filter(menu=> menu.selected==true)

        Swal.fire({
          title: "Tem que selecionar um Menu!",
          icon: "error"
        });
      }

      if (!this.services.some(services => services.selected == true)) {
        //this.selectedMenu=this.services.filter(services=> services.selected==true)
        Swal.fire({
          title: "Tem que selecionar um Serviço!",
          icon: "error"
        });
      }

      if (this.datePicker == null) {
        Swal.fire({
          title: "Tem que selecionar um dia",
          icon: "error"
        });
      }

      if (this.timePicker == null) {
        Swal.fire({
          title: "Tem que selecionar uma hora",
          icon: "error"
        });
      } else {

        

         this.$store.commit('ADD_REQUEST',{
        id:this.$store.getters.getReqLastId,
        userId:this.$store.getters.getLoggedUser.id,
        serviceName:this.selectedService.name,
        menuName: this.selectedMenu.name,
        date:this.datePicker,
        time:this.timePicker
       



        })


         Swal.fire({
          title: "Pedido efetuado com sucesso!",
          icon: "success"
        });
      }
    }
  }
};
</script>
 <style>
.selected {
  border: 3px solid blue;
  border-radius: 5px;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;

  position: absolute;
  width: 100%;
}
</style>