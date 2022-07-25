<template>
    <div class="container">
        <NuxtLink :to="`/recuerdos/${memory.id}`" v-for="(memory, index) in getMemories" :key="index">
            <p>{{memory.title}}</p>
        </NuxtLink>
    </div>
</template>

<script setup>
import {useMemoriesStore} from "~/store/memories"
import Dexie from 'dexie'
const db = new Dexie('memoriesCollection')

await useMemoriesStore().processMemory(db)
const {getMemories} = useMemoriesStore()
</script>

<style scoped>
a {
    margin: 0 80px;
}
</style>