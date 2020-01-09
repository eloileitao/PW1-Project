<template>
  <v-app style="{ backgroundColor: white}">
    <!--<Navbar />-->
    <!--<paralax/>-->
    <router-view></router-view>

    <v-content></v-content>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
//import Navbar from "./components/NavBarSemLog"
//import paralax from"./components/paralax"

export default {
  beforeDestroy() {
    localStorage.setItem("users", JSON.stringify(this.$store.state.users));
  
  },
  created() {
    window.addEventListener(
      "beforeunload",
      () => {
        //console.log("closed");
        localStorage.setItem("users", JSON.stringify(this.$store.state.users));
      },
      false
    );
    if (localStorage.getItem("users") !== null) {
      this.$store.state.users = JSON.parse(localStorage.getItem("users"));
      
    }
  }
};
</script>

<style>
body {
  font-family: Arial;
}
</style>
