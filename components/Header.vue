<template>
        <header>
            <div class="wrapper">
                <div class="logo-wrapper">
                    <img src="/logo.png" alt="Logo de la máquina de los recuerdos">
                </div>
                <div class="text-wrapper">
                    <a href="/"><h1><strong>La máquina de los recuerdos</strong></h1></a>
                    <div class="links">
                        <p>126 versiones posibles. Iteración 1.0. </p>
                        <a href="mailto:hola@lamaquina.xyz">contacto: hola@lamaquina.xyz</a>
                    </div>
                </div>
            </div>
        </header>
</template>

<style lang="css" scoped>
header {
    background: black;
    color: white;
}
h1 {
    line-height: 1;
}
.links a {
    margin-right: 10px;
    color: inherit;
    text-decoration: underline;
}
.wrapper {
    padding: 20px 40px;
    display: flex;
    align-items: center;
}
@media screen and (min-width: 920px) {
    .wrapper {
        padding: 20px 0;
        max-width: 920px;
        margin: 0 auto;
    }
    .links {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .links a {
        margin-left: 5px;
    }
}

.logo-wrapper {
    margin-right: 20px;
}

.logo-wrapper img {
    height: 65px;
    width: 65px;
}

@media screen and (max-width: 580px) {
    h1 {
        margin-top: 10px;
    }
}

</style>