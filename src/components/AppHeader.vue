<template>
    <header>
        <div class="container">
            <div class="row p-3 ">
                <div class="boolflix d-flex align-items-center justify-content-between">
                    <h1>BoolFlix</h1>
                    <div class="input_search d-flex align-items-center">
                        <i class="fa-solid fa-magnifying-glass me-3"></i>
                        <input class="w-100 ps-3 pe-3" type="search" placeholder="Cerca qui" v-model="state.searchText">
                        <button class="ms-3 rounded-1 ps-1 pe-1" @click="state.fetchMovies">Cerca</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

import {state} from '../state'
export default {
    name: "AppHeader",
    setup() {

        return {state}
    }/* ,
    mounted() {
        this.state.fetchMovies(state.movieBaseUrl)
    } */
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as*;
h1{color: red;}
</style>