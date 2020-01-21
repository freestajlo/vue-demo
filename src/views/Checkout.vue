<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h4>Děkujeme za objednávku, jídlo vám bude doručeno co nejdříve</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart',
    created(){
        this.$store.commit('wipeCart');
    } 
}
</script>

<style scoped>

</style>