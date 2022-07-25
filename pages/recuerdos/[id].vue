<template>
  <Header/>
  <section class="container">
    <h2>{{memory.title}}</h2>
    <div v-html="html"></div>
  </section>
</template>

<script setup>
import {useMemoriesStore} from "~/store/memories"
import showdown from 'showdown'
import Dexie from 'dexie'

const route = useRoute()
const id = route.params.id
const title = ""
const db = new Dexie('memoriesCollection')
db.version(1).stores({
  memories: '++id, title, content'
})
const memory = await db.memories.get({id})
if(memory == undefined) useRouter().push('/404')


var converter = new showdown.Converter(),
    text      = memory.content,
    html      = converter.makeHtml(text);
</script>
