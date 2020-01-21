<template>
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Upravte si podle sebe</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div v-if="product" class="modal-body">
                        <div class="row">
                            <div class="col">
                                <h3>{{ product.name }}</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <img :src="product.picture" height="150" width="150">
                            </div>
                            <div class="col">
                                <div class="row" v-for="ingredient in product.ingredients" :key="ingredient.id">
                                    <div class="col">
                                        {{ returnIngredient(ingredient) }}
                                    </div>
                                    <div class="col">
                                        <button class="btn btn-primary">-</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mt-4 offset-3">
                                Množství <input v-model="productQuantity" style="min-width: 20px;" type="number" min="1" max="15" value="1">
                            </div>
                            <div class="col mt-4">
                                <strong>{{ product.price * productQuantity }}</strong> $
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Zpět</button>
                        <button type="button" class="btn btn-primary" @click="addToCart(product)">Přidat do košíku</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Modal',
        props: {
            product: {
                required: true
            }
        },
        data(){
            return {
                productQuantity: 1
            }
        },
        methods: {
            addToCart: function(product){
                this.$store.commit('addToCart', product);
                $("#productModal").modal('hide');
            },
            returnIngredient(ingredientId){
                return this.$parent.ingredients.filter(ingredient => ingredient.id == ingredientId)[0].name;
            }
        }
    }
</script>

<style scoped>
    .modal {
        background-color: rgba(0, 0, 0, 0.7);
    }
</style>