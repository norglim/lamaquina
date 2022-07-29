<template>
        <header >
            <div class="wrapper">
                <a href="/"><h1><strong>La máquina de los recuerdos</strong></h1></a>
            <div class="links">
                <a href="mailto:hola@lamaquina.xyz">contacto: hola@lamaquina.xyz</a>
            </div>
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
    margin-top:10px;
}
.links a {
    margin-right: 10px;
    color: inherit;
    text-decoration: underline;
}
    .wrapper {
        padding: 20px 40px;
    }
@media screen and (min-width: 920px) {
    .wrapper {
        padding: 20px 0;
        max-width: 920px;
        margin: 0 auto;
    }
}
</style>