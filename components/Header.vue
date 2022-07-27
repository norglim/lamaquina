<template>
    <header class="container">
        <a href="/"><h1><strong>La máquina de los recuerdos</strong></h1></a>
        <div class="links">
            <NuxtLink to="/manifiesto">manifiesto</NuxtLink>
            <a href="mailto:hola@lamaquina.xyz">hola@lamaquina.xyz</a>
        </div>
    </header>
</template>

<style lang="css" scoped>
header {
    background: black;
    color: white;
}
.links {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.links a {
    margin-right: 10px;
    color: inherit;
    text-decoration: underline;
}
</style>