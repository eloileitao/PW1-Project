<template>
  <v-app style="{ backgroundColor: white}">
    
   <!--<Navbar />-->
   <!--<paralax/>-->
    <router-view></router-view>

    <v-content>
     
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
//import Navbar from "./components/NavBarSemLog"
//import paralax from"./components/paralax"

export default {
  name: "App",

  components: {
    //HelloWorld,
    //Navbar,
    //paralax,
  },

  data: () => ({
    //
  })
};
</script>

