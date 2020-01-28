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

        <v-stepper-step :complete="e1 > 3" step="3" @click="e1 = 3">
          <v-btn text>Data e hora</v-btn>
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 4" step="4" @click="e1 = 4">
          <v-btn text>Vestuário</v-btn>
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step step="5" @click="e1 = 5">
          <v-btn text>Extras</v-btn>
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <!-- <v-card class="mb-12" flat> -->
          <v-row class="justify-center">
            <v-col v-for="service in services" v-bind:key="service.id" md="3" class="ma-5">
              <div v-bind:class="{selected:service.selected}">
                <v-hover v-slot:default="{ hover }">
                  <v-card color="grey lighten-4" height="150 px" outlined flat>
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
          <!-- </v-card> -->

          <v-btn color="primary" @click="e1=2">Continue</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <!-- <v-card class="mb-12" flat> -->
          <v-row class="justify-center">
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
          <!-- </v-card> -->

          <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <!-- <v-card class="mb-12" flat> -->
          <v-row class="justify-center">
            <v-col md="3" class="ma-5">
              <v-date-picker
                v-model="datePicker"
                year-icon="mdi-calendar-blank"
                prev-icon="mdi-skip-previous"
                next-icon="mdi-skip-next"
                full-width
              ></v-date-picker>
            </v-col>
            <v-col md="3" class="ma-5">
              <v-time-picker v-model="timePicker" color="green lighten-1" full-width></v-time-picker>
            </v-col>
          </v-row>
          <!-- </v-card> -->

          <v-btn color="primary" @click="e1=4">Seguinte</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="4" flat>
          <!-- <v-card class="mb-12" flat> -->
          <v-row class="justify-center">
            <v-col v-for="vestuario in vestuarios" v-bind:key="vestuario.id" md="3" class="ma-5">
              <div v-bind:class="{selected:vestuario.selected}">
                <v-hover v-slot:default="{ hover }">
                  <v-card color="grey lighten-4" height="150 px" outlined>
                    <v-img :aspect-ratio="16/9" :src="vestuario.img">
                      <div
                        v-if="hover || vestuario.selected==true"
                        class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-1 white--text"
                        style="height: 100%;"
                        v-on:click="setSelectedVestuario(vestuario.id)"
                      >{{vestuario.name}}</div>
                    </v-img>
                  </v-card>
                </v-hover>
              </div>
            </v-col>
          </v-row>
          <!-- </v-card> -->
          <br />
          <br />

          <v-btn color="primary" @click="e1=5">Seguinte</v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="5" flat>
          <!-- <v-card class="mb-12" flat> -->
          <v-row class="justify-center">
            <v-col cols="12" md="6">
              <v-textarea solo name="input-7-4" label="Solo textarea" v-model="extras"></v-textarea>
            </v-col>
            <!-- <v-col v-for="vestuario in vestuarios" v-bind:key="vestuario.id" md="3" class="ma-5" >
                <div v-bind:class="{selected:vestuario.selected}">
                  <v-hover v-slot:default="{ hover }">
                    <v-card color="grey lighten-4" height="150 px" outlined>
                      <v-img  :aspect-ratio="16/9" :src="vestuario.img" >
                        <div
                          v-if="hover || vestuario.selected==true"
                          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-1 white--text"
                          style="height: 100%;"
                          v-on:click="setSelectedVestuario(vestuario.id)"
                        >{{vestuario.name}}</div>
                      </v-img>
                    </v-card>
                  </v-hover>
                </div>
            </v-col>-->
          </v-row>
          <!-- </v-card> -->
          <br />
          <br />

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
      vestuarios: [],
      e1: 0,
      datePicker: new Date().toISOString().substr(0, 10),
      timePicker: null,
      request: null,
      selectedMenu: null,
      selectedService: null,
      selectedVestuario: null,
      extras: ""
    };
  },
  created() {
    this.services = this.$store.getters.getServices;
    this.allMenusStore = this.$store.getters.getMenus;
    this.vestuarios = this.$store.getters.getVestuarios;
    //this.selectedMenu=this.services.filter(services=> services.selected==true)
    //this.menus=menus.filter(menu=> menu.idServico == this.selectedService.id)
  },
  methods: {
    setSelectedService(id) {
      for (let i = 0; i < this.services.length; i++) {
        if (this.services[i].selected == true && this.services[i].id != id) {
          this.services[i].selected = false;
        }
        if (this.services[i].selected == false && this.services[i].id == id) {
          this.services[i].selected = true;
          this.selectedService = this.services[i];
          console.log("Selected service:   " + this.services[i]);
          this.menus = this.allMenusStore.filter(
            menu => menu.idServico == this.selectedService.id
          );
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
          this.selectedMenu = this.menus[i];
          console.log("Selected menu:   " + this.menus[i]);
        }
      }
    },
    setSelectedVestuario(id) {
      for (let i = 0; i < this.vestuarios.length; i++) {
        if (
          this.vestuarios[i].selected == true &&
          this.vestuarios[i].id != id
        ) {
          this.vestuarios[i].selected = false;
        }
        if (
          this.vestuarios[i].selected == false &&
          this.vestuarios[i].id == id
        ) {
          this.vestuarios[i].selected = true;
          this.selectedVestuario = this.vestuarios[i];
          console.log("Selected vestuario:   " + this.vestuarios[i]);
        }
      }
    },
    submitNewRequest() {
      console.log(this.extras)
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
        this.$store.commit("ADD_REQUEST", {
          id: this.$store.getters.getReqLastId,
          userId: this.$store.getters.getLoggedUser.id,
          userName: this.$store.getters.getLoggedUser.username,
          serviceName: this.selectedService.name,
          menuName: this.selectedMenu.name,
          date: this.datePicker,
          time: this.timePicker,
          vestuario: this.selectedVestuario.name,
          extras:this.extras,
          budget: 0,
          state: 1
        });

        this.$store.commit("UPDATENOTIFICATION", {
          userId: this.$store.getters.getLoggedUser.id,
          userName: this.$store.getters.getLoggedUser.username,
          state: 1,
          serviceName: this.selectedService.name,
          menuName: this.selectedMenu.name
        });

        Swal.fire({
          title: "Pedido efetuado com sucesso!",
          icon: "success"
        }).then(this.$router.push({name:"home"}));

        
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