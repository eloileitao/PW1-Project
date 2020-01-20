<template>
  <div>
    <NavbarSemLog />
    <v-container  >
        <div fluid v-for="menu in menus" v-bind:key="menu.id"> <!-- <div> v-if="getService($route.params.serviceId).id == menu.idServiço"> --> 
        <h1 class="center" >{{menu.name}}</h1>
        <hr />
        <v-img class="imgStyle"  max-height="800" max-width="350" :src="menu.imgLink" aspect-ratio="1.7"></v-img>
        </div>
        
    <!--  <h1 class="center">Menu Details: {{ getService($route.params.serviceId).id }}</h1> -->
      
    
    </v-container>

    <Footer></Footer>
  </div>
</template>

<style scoped>
footer {
  margin-top: 250px;
}

.center {
  margin-top: 25px;
  text-align: center;
}

.imgStyle{
    margin-top: 15px;
    display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
//commite test
import NavbarSemLog from "@/components/NavBarSemLog.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "home",
  components: {
    NavbarSemLog,
    Footer
  },
  data: function() {
    return {
      menus: [],//this.$store.state.menus,
      serviceId:""
    };
  },
 created() {
    this.menus = this.$store.getters.getMenus.filter(menu => menu.idServiço === this.$route.params.serviceId);
  //getService($route.params.serviceId)
  //this.serviceId=this.$route.params.serviceId,
  console.log(this.menus)
    }

,
 methods: {
    getService(id) {
        console.log(id)
      return this.menus.filter(menu => menu.idServiço === id);
    }
  }
};
</script>
