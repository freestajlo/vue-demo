import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0
  },
  getters: {
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
