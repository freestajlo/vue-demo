<template>
    <div class="container">
        <h1>Košík</h1>
        <div v-if="$store.state.cart.length > 0">
            <div class="row mb-3" v-for="product in $store.state.cart"
             :key="product.id">
                <div class="col">
                    {{ product.name }} x {{ product.quantity }} - {{ product.totalPrice }} $
                </div>
                <div class="col">
                    <button class="btn btn-primary" @click.prevent="removeFromCart(product)">Odstranit</button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <strong>Celková cena: {{ totalPrice }}$</strong>
                </div>
            </div>
            <div class="row">
                <div class="col-9 text-right">
                    <router-link to="/checkout"><button class="btn btn-success">Checkout</button></router-link>
                </div>
            </div>
        </div>
        <div v-else>
            <strong><p>Váš košík je prázdný</p></strong>
            <router-link to="/"><button class="btn btn-error">Přejít na katalog produktů</button></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart',  
    computed: {
        totalPrice(){
            let total = 0;
            
            for(let product of this.$store.state.cart){
                total += product.price * product.quantity;
            }

            return total.toFixed(2);
        }
    },
    methods: {
        removeFromCart(product){
            this.$store.commit('removeFromCart', product);
        }
    }
}
</script>

<style scoped>

</style>