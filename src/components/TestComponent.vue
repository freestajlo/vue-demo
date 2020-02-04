<template>
    <div class="container">
        <H4>TeSt CoMpOnEnT</H4>
        <div class="row">
            <div class="col-6 border">
                <div class="row">
                    <div class="col">
                        <label for="">
                            <input v-model="conditionSelected" value="1" name="cond" type="radio">
                            <span>Podmínka 1</span>
                        </label>

                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="">
                            <input v-model="conditionSelected" value="2" name="cond" type="radio">
                            <span>Podmínka 2</span>
                        </label>

                    </div>
                </div>
            </div>
            <!-- Problém byl v porovnávání = při striktním to porovnávalo string s intigerem -->
            <div class="col-6 border">
                <div v-if="conditionSelected == 1">
                    <div class="row">
                        <div class="col">
                            <label for="">
                                <input type="radio">
                                <span>Možnost 1</span>
                            </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="">
                                <input type="radio">
                                <span>Možnost 2</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="row">
                        <div class="col">
                            <label for="">
                                <input type="radio">
                                <span>Možnost 3</span>
                            </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="">
                                <input type="radio">
                                <span>Možnost 4</span>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="row mt-3">
            <div class="col">
                Text1 <input id="inp1" type="text">
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                Text2 <input id="inp2" type="text">
            </div>
        </div>

    </div>
</template>

<script>

    var input1 = document.getElementById('inp1');
    input1.onkeyup(function(ev){

    });
    if(input1.value.length <= 2){
        input1.setCustomValidity("You must enter more then 2chars into input");
        input1.reportValidity();
    }

    export default{
        name: "TestComponent",
        data(){
            return {
                conditionSelected: 1
            }
        },
        methods: {
            validate: function(){

            }
        }
    }
</script>

<style>
    .border{
        border: 1px solid black;
        min-height: 150px;
    }
</style>