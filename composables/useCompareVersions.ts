import moment from "moment"

export default async function useCompareVersions(currentMemories) {
    let newerFromNew = 0
    let newerFromCurrent = 0
    if(currentMemories == null) return "new"
    
    currentMemories.forEach(memory => {
        if(moment(memory.lastModified).isAfter(newerFromCurrent)) {        
            newerFromCurrent = memory.lastModified
        }
    })

    const newMemoriesDates = await $fetch('/api/getExternalMemoriesDates')

    newMemoriesDates.forEach(memoryDate => {
        if(moment(memoryDate.lastModified).isAfter(newerFromNew)) {
            newerFromNew = memoryDate.lastModified
        }
    })

    return moment(newerFromNew).isAfter(newerFromCurrent) ? "new" : "old"
}