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
  beforeDestroy() {
 
     if (localStorage.getItem("users") == null) {
      localStorage.setItem("users", JSON.stringify(this.$store.state.users))
     }

  //   if (localStorage.getItem("requisitions") == null) {
  //     localStorage.setItem("requisitions", JSON.stringify(this.$store.state.requisitions))


   },
   created() {
    

    this.$store.state.users = JSON.parse(localStorage.getItem("users"))
   },


  data: () => ({
    //
  })
};
</script>

<style>
body {
  font-family: Arial;
}
</style>
