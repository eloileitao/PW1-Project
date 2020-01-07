import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users:[],
    loggedUser:{id:-1},
    requests:[]
  },
  mutations: {
    REGISTER: (state,paylod)=>{state.users.push({
      id:paylod.id,
      username:paylod.username,
      password:paylod.password,
      email:paylod.email,
      foto:paylod.foto,
    

    })},
    SET_LOGGED_USER:(state,paylod)=>{state.loggedUser=paylod},
    LOGOUT:(state)=>{state.loggedUser={id:-1}},
  },
  getters:{
    getLogin: (state) => (username,password) => {
      
        return state.users.find(user => (user.username === username && user.password === password) )
    
    },
    getLastId: (state) => {
      let lastId = 0
      if (state.users.length > 0) {
        lastId = state.users[state.users.length - 1].id + 1
      }
      return lastId
    },
    getLoggedUser: (state)=>{
      return state.loggedUser;
    }
  },
  actions: {},
  modules: {},
  
});
