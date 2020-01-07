<template>
    


  <v-app id="inspire">
    <div>
      <v-toolbar>
        <v-toolbar-title><v-btn text>Logo</v-btn></v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-toolbar-items>
          <!--<v-btn text>Home</v-btn>-->
          <v-btn text>Catalogo</v-btn>
          <v-btn text>Galeria</v-btn>
          <v-btn text>Sobre</v-btn>
         
            <v-menu offset-y>
        <template v-slot:activator="{ on }">
         <v-btn text v-on="on">
            <v-icon>mdi-account</v-icon>
            <v-icon>mdi-menu-down</v-icon>
          
          </v-btn>
        </template>
              
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
           
          >
            <v-list-item-title><v-btn text v-on="on">{{ item.title }} </v-btn></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
             
          
        
        </v-toolbar-items>
        
        
       
  
    
      </v-toolbar>
    </div>
  </v-app>

</template>
<script>
export default {
    name: 'navbar',
  
  data: () => ({
    items: [
      { title: 'Perfil' },
      { title: 'Meus Pedidos' },
      { title: 'Log Out' }
    ]
  })
}
</script>