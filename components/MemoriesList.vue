<template>
    <TransitionGroup>
        <NuxtLink :to="`/recuerdos/${memory.id}`" v-for="memory in useMemoriesStore().getMemories" :key="memory.id">
            <p>{{memory.title}}</p>
        </NuxtLink>
    </TransitionGroup>
</template>

<script setup>
import {useMemoriesStore} from "~/store/memories"
import Dexie from 'dexie'

const db = new Dexie('memoriesCollection')
await useMemoriesStore().processMemory(db)

</script>

<style scoped>
a {
    margin: 0 80px;
}
</style>