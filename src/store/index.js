import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menus: [{
      id: 0,
      idServico: 0,
      name: "Menu A",
      desc: "",
      imgLink: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
      selected: false
    },
    {
      id: 1,
      idServico: 0,
      name: "Menu B",
      desc: "",
      imgLink: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
      selected: false
    },
    {
      id: 2,
      idServico: 1,
      name: "Menu C",
      desc: "",
      imgLink: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
      selected: false
    },
    {
      id: 3,
      idServico: 2,
      name: "Menu A",
      desc: "",
      imgLink: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
      selected: false
    },],
    vestuarios: [
      {
        id: 0,
        name: "Formal",
        img: "https://i.pinimg.com/originals/a9/f3/d5/a9f3d5b95b612e63bb8c601aa0433612.jpg",
        selected: false
      },
      {
        id: 1,
        name: "Informal",
        img: "https://www.russums-shop.co.uk/files/uk/imagelibrary/subcategory/coloured-shirts.jpg",
        selected: false
      }
    ],
    users: [
      {
        id: 0,
        username: "admin",
        password: "123",
        type: 1
      },
      {
        id: 1,
        email: "joao@gmail.com",
        username: "joao",
        password: "123",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEFF6tCXWJuWRLxP0Ovu785xFo3oiw_kKf0ZRJCIGH0jbIFvo1",
        type: 3
      }

    ],
    achievements: [
      {
        id: 0,
        tittle: "Primeiro Pedido",
        desc: "Faça o seu primeiro pedido para receber 5 pontos!",
        points: 5,
        available: true,
        progress: 0,
      },
      {
        id: 1,
        tittle: "Primeiro Pagamento",
        desc: "Faça o seu primeiro pagamento para receber 5 pontos!",
        points: 5,
        available: true,
        progress: 0,
      },
      {
        id: 2,
        tittle: "Primeira review",
        desc: "Faça o seu primeiro pedido para receber 5 pontos!",
        points: 5,
        available: true,
        progress: 0,
      },
      {
        id: 3,
        tittle: "Fazer 10 pagamentos",
        desc: "Faça 10 pagamentos para receber 50 pontos!",
        points: 50,
        available: true,
        progress: 0,
      },
      {
        id: 4,
        tittle: "Fazer 10 reviews",
        desc: "Faça o seu primeiro pedido para receber 35‬ pontos!",
        points: 35,
        available: true,
        progress: 0,
      }
    ],
    rewards:[
      {
        id:0,
        tittle:"Fazer um pedido de graça",
        desc:"Junte 100‬ pontos para receber um pedido gratuito",
        progress:0,
        meta:200,
        complete:false,
      },
      {
        id:1,
        tittle:"Receber um cupao de 20€",
        desc:"Junte 100‬ pontos para receber um cupao de 20€",
        progress:0,
        meta:100,
        complete:false,
      }
    ],
    loggedUser: { id: -1 },
    requests: [
      {
        id: 0,
        userId: 4,
        userName: "marcia",
        serviceName: "Coffe Break",
        menuName: "Menu A",
        date: "2020-01-30",
        time: "06:35",
        vestuario: "Formal",
        extras: "Musica",
        local: "sem local",
        budget: 0,
        state: 1
      },
      {
        id: 1,
        userId: 1,
        userName: "joao",
        serviceName: "Coffe Break",
        menuName: "Menu A",
        date: "2020-01-30",
        time: "06:35",
        vestuario: "Formal",
        extras: "Musica",
        local: "R.rua",
        budget: 0,
        state: 1
      }
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

    notifications: [

    ],

    reviews: [
      {
        id: 0,
        userId: 1,
        userName: "joao",
        rating: 4,
        comment: "Gostei do serviço"
      }
    ]

  },
  mutations: {
    REGISTER: (state, paylod) => {
      state.users.push({
        id: paylod.id,
        username: paylod.username,
        password: paylod.password,
        email: paylod.email,
        foto: paylod.foto,
        type: paylod.type,
        points:0,


      })
    },
    SET_LOGGED_USER: (state, paylod) => { state.loggedUser = paylod },
    LOGOUT: (state) => { state.loggedUser = { id: -1 } },
    ADD_REQUEST: (state, payload) => {
      state.requests.push({
        id: payload.id,
        userId: payload.userId,
        userName: payload.userName,
        serviceName: payload.serviceName,
        menuName: payload.menuName,
        date: payload.date,
        time: payload.time,
        vestuario: payload.vestuario,
        state: payload.state,
        extra: payload.extra,
        local: payload.local
      })
    },
    UPDATENOTIFICATION: (state, payload) => {
      state.notifications.push({
        userId: payload.userId,
        userName: payload.userName,
        serviceName: payload.serviceName,
        menuName: payload.menuName,
        state: payload.state
      })
    },
    ADDREQUESTTOUSER: (state, payload) => {
      state.userRequests.push({
        id: payload.id,
        idUser: payload.idUser,
        userName: payload.userName,
        serviceName: payload.serviceName,
        menuName: payload.menuName,
        budget: payload.budget,
        state: payload.state
        /*      date: payload.date,
             time: payload.time,
             vestuario: payload.vestuario */
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
    ADDMENU: (state, payload) => {
      state.menus.push({
        id: payload.id,
        idServico: payload.idServico,
        name: payload.name,
        imgLink: payload.imgLink,
        desc: payload.desc,
        selected: false,
      })
    },
    ADDREVIEW: (state, payload) => {
      state.reviews.push({
        id: payload.id,
        userId: payload.userId,
        userName: payload.userName,
        rating: payload.rating,
        comment: payload.comment,

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
    getMenuLastId: (state) => {
      let lastId = 0
      if (state.menus.length > 0) {
        lastId = state.menus[state.menus.length - 1].id + 1
      }
      return lastId
    },
    getRequestToUserLastId: (state) => {
      let lastId = 0
      if (state.userRequests.length > 0) {
        lastId = state.userRequests[state.userRequests.length - 1].id + 1
      }
      return lastId
    },
    getReviewLastId: (state) => {
      let lastId = 0
      if (state.reviews.length > 0) {
        lastId = state.reviews[state.reviews.length - 1].id + 1
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
    getUserRequests: (state) => {
      return state.requests;
    },
    getVestuarios: (state) => {
      return state.vestuarios;
    },
    getAchievements: (state) => {
      return state.achievements;
    },
    
    getRewards: (state) => {
      return state.rewards;
    },



  },
  actions: {},
  modules: {},

});
