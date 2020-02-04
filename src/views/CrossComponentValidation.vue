<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Cross Component Validation</h1>
            </div>
        </div>
        <div v-if="$store.getters.proportionsError" class="row">
            <div class="col">
                <div class="alert alert-danger" role="alert">
                    Rozměry musí být v rozmezí!
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-6">
                <div class="row">
                    <div class="col">
                        <label>
                            <span>Výška: </span>
                            <input v-model="height" type="number">
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label>
                            <span>Šířka: </span>
                            <input v-model="width" type="number">
                        </label>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <CrossComponent/>
            </div>
        </div>
    </div>
</template>

<script>
    import CrossComponent from "../components/CrossComponent";

    export default {
        name: 'CrossComponentValidation',
        components: {
            CrossComponent
        },
        data() {
            return {
                height: 1200,
                width: 1400,
            }
        },
        computed: {
            getHeight: function () {
                return this.$store.getters.getDoorsMinMaxHeightProportions
            },
            getWidth: function (){
                return this.$store.getters.getDoorsMinMaxWidthProportions
            }
        },
        watch: {
            height: function (val) {
                if(val >= this.getHeight.min && val <= this.getHeight.max){
                    this.$store.state.proportions.error = false;
                }
                else{
                    this.$store.state.proportions.error = true;
                }
            },
            width: function (val) {
                if(val >= this.getWidth.min && val <= this.getWidth.max){
                    this.$store.state.proportions.error = false;
                }
                else{
                    this.$store.state.proportions.error = true;
                }
            }
        }
    }
</script>

<style>

</style>