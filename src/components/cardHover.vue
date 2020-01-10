<template>

  <v-hover v-slot:default="{ hover }">
    <v-card class="md-auto" color="grey lighten-4" height="150 px" outlined>
      <v-img :aspect-ratio="16/9" :src=image>
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-1 white--text"
            style="height: 100%;"
          >{{name}}</div>
        </v-expand-transition>
      </v-img>
      <!--
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
     
        <v-btn
          absolute
          color="orange"
          class="white--text"
          fab
          large
          right
          top
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
        <h3 class="display-1 font-weight-light orange--text mb-2">QW cooking utensils</h3>
        <div class="font-weight-light title mb-2">
          Our Vintage kitchen utensils delight any chef.<br>
          Made of bamboo by hand
        </div>
      </v-card-text>-->
    </v-card>
  </v-hover>
 
</template>


  <style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;

  position: absolute;
  width: 100%;
}
</style>

<script>
export default {
  props: ['name', 'image'],
  data() {
    return {
    };
  },

  mounted() {
    console.log(this.image);
  }
};
</script>

