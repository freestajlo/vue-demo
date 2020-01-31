import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0,
    products: [
      {
        id: 0,
        name: 'Burger Pro!',
        price: 29,
        picture: 'https://scontent.fprg1-1.fna.fbcdn.net/v/t1.0-9/77021603_2661608410566460_2929617984538279936_o.jpg?_nc_cat=109&_nc_ohc=c1cemFxOxRYAX-jPS-O&_nc_ht=scontent.fprg1-1.fna&oh=e40dce13c8746e3e23d0cd98efb903d3&oe=5E9C7D88',
        ingredients: [0, 2, 4, 5, 6, 7]
      },
      {
        id: 1,
        name: 'Superburger',
        price: 35,
        picture: 'https://www.sonomamag.com/guide/wp-content/uploads/2017/05/bs_0717_superburger1-1200x800.jpg',
        ingredients: [0, 1, 5, 6, 7]
      },
      {
        id: 2,
        name: 'Burgrilla',
        price: 40,
        picture: 'https://podebrady.turbopizza.cz/assets/images/b936fdc50d248ce19088ec3e63c8b8c2/54-600.jpg',
        ingredients: [0, 5, 6, 7, 3, 4]
      },
      {
        id: 3,
        name: 'Burger junior',
        price: 25,
        picture: 'https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com/15b2a659-13a2-4090-b44f-4f7c6aa4ca3f/orig.jpg&quality=90&w=1500&h=900&mode=crop&format=jpg&v=4',
        ingredients: [1, 2, 3, 4, 5, 6]
      },
    ],
    ingredients: [
      {
        id: 0,
        name: 'Hovězí maso',
        weight: '150g'
      },
      {
        id: 1,
        name: 'Kuřecí maso',
        weight: '150g'
      },
      {
        id: 2,
        name: 'Okurek',
      },
      {
        id: 3,
        name: 'Rajče',
      },
      {
        id: 4,
        name: 'Cheddar',
      },
      {
        id: 5,
        name: 'Bulka',
      },
      {
        id: 7,
        name: 'Salát',
      },
      {
        id: 6,
        name: 'Omáčka',
      }
    ],
    conditionSelected: 1,
    doorsMaxMinProportions: {
      height:{
        min: 1200,
        max: 2000
      },
      width:{
        min: 1400,
        max: 2200
      }
    },
    proportions: {
      height: '',
      width: ''
    }
  },
  getters: {
    getDoorsMinMaxHeightProportions: state => state.doorsMaxMinProportions.height,
    getDoorsMinMaxWidthProportions: state => state.doorsMaxMinProportions.width
  },
  mutations: {
    addToCart(state, payload){

      let product = payload.product;
      let found = state.cart.find(item => item.id == product.id);

      if(found){
        let amount = parseInt(found.quantity);
        amount += parseInt(payload.amount);
        found.quantity = amount;
        found.totalPrice += product.price * payload.amount;
      }
      else{
        state.cart.push(product);

        Vue.set(product, 'quantity', payload.amount);
        Vue.set(product, 'totalPrice', product.price * payload.amount);
      }

      this.commit('saveCart');
    },
    removeFromCart(state, product){
      let index = state.cart.indexOf(product);
      
      if(index > -1){
        let product = state.cart[index];
        state.cartCount -= product.quantity;

        state.cart.splice(index, 1);
      }

      this.commit('saveCart');
    },
    saveCart(state){
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
      window.localStorage.setItem('cartCount', state.cartCount);
    },
    wipeCart(state){
      state.cart = [];
      state.cartCount = 0;
      localStorage.clear();
    }
  },
  actions: {
  },
  modules: {
  }
})
