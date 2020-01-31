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
                <button class="btn btn-primary">Odeslat</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'CrossComponent',
    }
</script>

<style scoped>
    .container{
        border: 1px solid black;
    }
</style>