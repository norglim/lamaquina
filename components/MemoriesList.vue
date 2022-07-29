<template>
    <TransitionGroup>
        <h2>Recuerdos:</h2>
        <ul>
            <NuxtLink  :to="`/recuerdos/${memory.id}`" v-for="memory in useMemoriesStore().getMemories" :key="memory.id">
            <li class="memory-title">{{memory.title}}</li>
            </NuxtLink>
        </ul>
    </TransitionGroup>
</template>

<script setup>
import {useMemoriesStore} from "~/store/memories"
import Dexie from 'dexie'

const db = new Dexie('memoriesCollection')
await useMemoriesStore().processMemory(db)

</script>

<style scoped>
h2 {
    font-size: 18pt;
    margin-bottom : 10px;
}
.memory-title {
    text-decoration: underline;
    color: blue;
    transition: all 500ms ease-in-out;
    margin: 10px 0;
    font-size: 14pt;
}
.memory-title:hover {
    color: darkblue;
    background: #ddd;
    transition: all 500ms ease-in-out;
}
</style>