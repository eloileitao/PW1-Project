import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menus: [{
      id: 0,
      idServiço: 0,
      name: "Menu A",
      imgLink: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
      selected: false
    },
    {
      id: 1,
      idServiço: 0,
      name: "Menu B",
      imgLink: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
      selected: false
    },
    {
      id: 2,
      name: "Menu C",
      idServiço: 1,
      imgLink: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
      selected: false
    },
    {
      id: 3,
      idServiço: 2,
      name: "Menu A",
      imgLink: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
      selected: false
    },],
    vestuarios: [
      {
        id:0,
        name: "Formal",
        img: "https://i.pinimg.com/originals/a9/f3/d5/a9f3d5b95b612e63bb8c601aa0433612.jpg"
      },
      {
        id:1,
        name: "Informal",
        img: "https://www.russums-shop.co.uk/files/uk/imagelibrary/subcategory/coloured-shirts.jpg"
      }
    ],
    users: [{
      id: 0,
      username: "admin",
      password: "123",
      type: 1
    }

    ],
    loggedUser: { id: -1 },
    requests: [
      {
        id: 1,
        user_id: 1,
        user_name: "user1",
      },
      {
        id: 2,
        user_id: 1,
        user_name: "user2",
      },
      {
        id: 3,
        user_id: 1,
        user_name: "user3",
      },
      {
        id: 4,
        user_id: 1,
        user_name: "user4",
      },
    ],
    services: [
      {
        id: 0,
        name: "Pequeno Almoço",
        imgLink: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        selected: false,

      },
      {
        id: 2,
        name: "Coffe Break",
        imgLink: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        selected: false,

      },
      {
        id: 3,
        name: "Buffet",
        imgLink: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        selected: false,

      }
    ],

  },
  mutations: {
    REGISTER: (state, paylod) => {
      state.users.push({
        id: paylod.id,
        username: paylod.username,
        password: paylod.password,
        email: paylod.email,
        foto: paylod.foto,
        type: paylod.type


      })
    },
    SET_LOGGED_USER: (state, paylod) => { state.loggedUser = paylod },
    LOGOUT: (state) => { state.loggedUser = { id: -1 } },
    ADD_REQUEST: (state, payload) => {
      state.requests.push({
        id: payload.id,
        userId: payload.userId,
        serviceName: payload.serviceName,
        menuName: payload.menuName,
        date: payload.date,
        time: payload.time,
        vestuario: payload.vestuario


      })
    },
    ADDSERVICE: (state, payload) => {
      state.services.push({
        id: payload.id,
        name: payload.name,
        imgLink: payload.imgLink,
        selected: false,
      })
    },
  },
  getters: {
    getLogin: (state) => (username, password) => {

      return state.users.find(user => (user.username === username && user.password === password))

    },
    getLastId: (state) => {
      let lastId = 0
      if (state.users.length > 0) {
        lastId = state.users[state.users.length - 1].id + 1
      }
      return lastId
    }, getReqLastId: (state) => {
      let lastId = 0
      if (state.requests.length > 0) {
        lastId = state.requests[state.requests.length - 1].id + 1
      }
      return lastId
    },
    getServLastId: (state) => {
      let lastId = 0
      if (state.services.length > 0) {
        lastId = state.services[state.services.length - 1].id + 1
      }
      return lastId
    },
    getLoggedUser: (state) => {
      return state.loggedUser;
    },
    getServices: (state) => {
      return state.services;
    },
    getMenus: (state) => {
      return state.menus;
    },
    getVestuarios: (state) => {
      return state.vestuarios;
    },



  },
  actions: {},
  modules: {},

});
