<template>
    
    <div class="container">
        <h1>Hlavní nabídka</h1>
        <hr>
        <div class="row">
            <div v-for="product in products" :key=product.name class="col-4 mb-4">
                <div class="card" @click="openModal(product.id)">
                    <img class="card-img-top" :src="product.picture">
                    <div class="card-body text-center">
                        <h5>{{ product.name }}</h5>
                        <span>{{ product.price }} $</span>
                    </div>
                </div>
            </div>
        </div>

        <Modal :product="selectedProduct"></Modal>

    </div>

</template>

<script>
import Modal from "../components/Modal";

export default {
    name: 'MainPage',
    components: {
      Modal
    },
    data(){
        return{
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
           selectedProduct: undefined
        }
    },
    methods: {
        openModal(productId){
            this.selectedProduct = this.products.filter(product => product.id == productId)[0];

            $('#productModal').modal('show');
        }
    }
}
</script>

<style scoped>

.card{
    cursor: pointer;
}

</style>