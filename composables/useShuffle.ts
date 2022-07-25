export default function useShuffle(memories) {
    const shuffledMemories = memories.sort((a, b) => 0.5 - Math.random());
    const limitedShuffledMemories = shuffledMemories.slice(0,10)
    return limitedShuffledMemories
}