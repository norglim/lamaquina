import { defineStore } from "pinia";

export const useMemoriesStore = defineStore({
    id: 'memories-store',
    state: () => {
      return {
        memories: {}
      }
    },
    actions: {
        async processMemory(db) {
            db.version(1).stores({
              memories: '++id, title, content'
            })
            const currentMemories = await db.memories.toArray() ? await db.memories.toArray() : null
            const comparision = await useCompareVersions(currentMemories)

            if(comparision == "new") {
              let memoriesCollection = {}
              memoriesCollection = await $fetch('/api/getMemoriesFromExternalDB')
              
              await db.memories.clear()
              await memoriesCollection.forEach(memory => {
                  db.memories.add({
                      id: memory.id,
                      title: memory.title,
                      content: memory.content,
                      lastModified: memory.lastModified
                  })
              })
              this.memories = memoriesCollection
            } else {
              this.memories = await db.memories.toArray()
            }
          },
    },
    getters: {
      getMemories: state => state.memories,
    },
  })