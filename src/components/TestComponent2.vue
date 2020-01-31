<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Tessssst 2</h1>
            </div>
        </div>
        <div class="row text-center" v-if="data.length">
            <div class="col">
                <div class="alert alert-primary" role="alert">
                    <div class="row" v-for="(value, key) in data" :key="key">
                        <div class="col-12">{{ value }}</div>
                    </div>
                    <div class="row float-right">
                        <button class="btn btn-primary" @click="closeData">Zavřít</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-for="(input, key) in inputs" :key="key">
            <div class="col">
                <label :for="input.id">
                    <span v-if="input.type === 'select' && input.is_used">
                            <span>{{ input.label }}</span>
                            <select :id="input.id" v-model="input.selected">
                                <option v-for="(option, key) in input.values" :value="option.value" :key="key">{{ option.value }}cm</option>
                            </select>
                    </span>
                    <span v-else-if="input.is_used">
                            <span>{{ input.label }}</span>
                            <input :id="input.id" v-model="input.value" min="0" type="number">
                    </span>
                </label>
            </div>
        </div>
        <div class="row">
            <div class="col mt-2">
                <button @click="showData" class="btn btn-success">SeEeEeEeEeEeEeEeNd DaTa</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TestComponent2",
        data() {
            return {
                data: [],
                inputs: [
                    {
                        type: "select",
                        label: "Výška",
                        id: 'height',
                        selected: '',
                        is_used: 1,
                        values: [
                            {
                                value: 125
                            },
                            {
                                value: 155
                            },
                            {
                                value: 175
                            }
                        ]
                    },
                    {
                        type: "input",
                        label: "Celková délka",
                        id: 'total_length',
                        is_used: 1,
                        value: ''
                    },
                    {
                        type: 'input',
                        label: 'Celkový počet sloupků',
                        id: 'max_number_of_posts',
                        is_used: 1,
                        value: ''
                    },
                    {
                        type: 'input',
                        label: 'test',
                        id: 'test',
                        is_used: 0,
                        value: ''
                    },
                ],
            }
        },
        methods: {
            showData: function () {
                this.inputs.forEach(input => {
                    input.type === "select" ? this.data.push(input.selected) : this.data.push(input.value);
                });
            },
            closeData(){
                this.data = [];
            }
        }
    }
</script>

<style>

</style>