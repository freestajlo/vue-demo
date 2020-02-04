<template>
    <div class="container">
        <h3>This is a Cross Component</h3>
        <div class="row">
            <div class="col">
                První parametr
            </div>
        </div>
        <div class="row">
            <div class="col">
                Druhý parametr
            </div>
        </div>
        <div class="row mt-3 mb-3">
            <div class="col">
                <span v-if="!error">
                    <button @click="x"  class="btn btn-primary">Odeslat</button>
                </span>
                <span v-else>
                    <button @click="x" disabled class="btn btn-primary disabled">Odeslat</button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'CrossComponent',
        computed: {
            error: function(){
                return this.$store.getters.proportionsError;
            }
        },
        methods: {
            x: function(){
                window.console.log("cc");
            }
        }
    }
</script>

<style scoped>
    .container{
        border: 1px solid black;
    }
    .disabled{
        cursor: not-allowed;
    }
</style>