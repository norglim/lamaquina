<template>
    <div>
        <Title>
            La máquina de los recuerdos
        </Title>
        <Header/>
        <What />
        <hr>
        <div class="memories-wrapper">
            <MemoriesList/>
        </div>
    </div>
</template>

<style scoped>
hr {
    border-bottom: 1px solid black;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.15);
}
.memories-wrapper {
 padding: 20px 40px;
}
@media screen and (min-width: 920px) {
    .memories-wrapper {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 0;
    }
}
</style>