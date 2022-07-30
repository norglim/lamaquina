<template>
  <div>
    <Title>
      La máquina de los recuerdos - {{memory.title}}
    </Title>
    <Header/>
    <section class="content-container">
      <div v-html="html" class="content"></div>
    </section>
    <section class="up-button">
      <span @click="up">Subir</span>
    </section>
  </div>
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

const up = () => {
  window.scrollTo(0,0)
}
</script>

<style>
  .content-container {
    max-width: 920px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .content-container h2 {
    font-size: 24pt;
    margin-bottom: 10px;
  }
  .content-container p {
    font-size: 16pt;
    line-height: 1.5;
  }
  @media screen and (max-width: 920px) {
    .content-container {
      padding: 20px 40px;
    }
    .content-container p {
      font-size: 14pt;
    }
  }
  .up-button {
    max-width: 920px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 20px;
  }
  .up-button span {
    background: black;
    padding: 5px 10px;
    color: white;
    cursor: pointer;
  }
  @media screen and (max-width: 920px) {
    .up-button span {
      margin-right: 40px;
    }
  }
</style>