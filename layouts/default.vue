<template>
    <slot/>
</template>

<style>
@import url('https://use.typekit.net/hvn1zfq.css');

html {
  box-sizing: border-box;
  font-size: 10px;
  scroll-behavior: smooth;
}

.font_nassim {
  font-family: nassim-latin, sans-serif;
  font-weight: 400;
  font-style: normal;
}

.font_nassim-italic {
  font-family: nassim-latin, sans-serif;
  font-weight: 400;
  font-style: italic;
}

.font_nassim-bold {
  font-family: nassim-latin, sans-serif;
  font-weight: 700;
  font-style: normal;
}

.font_nassim-bold-italic {
  font-family: nassim-latin, sans-serif;
  font-weight: 700;
  font-style: italic;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
p,
pre,
blockquote,
figure,
hr {
  margin: 0;
  padding: 0;
  font-family: nassim-latin, sans-serif;
  font-weight: 400;
  font-style: normal;
}

ul {
  list-style: none;
}

input,
textarea,
select,
button {
  color: inherit; 
  font: inherit; 
  letter-spacing: inherit; 
}


button {
  cursor: pointer;
}

p,a,span,button {
    font-size: 14px;
}

h1 {font-size: 24pt}

a {
    text-decoration: none;
    color: inherit;
}

.container {
    padding: 10px;
}

</style>