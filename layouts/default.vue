<template>
    <slot/>
</template>

<style>
html {
  box-sizing: border-box;
  font-size: 10px;
  scroll-behavior: smooth;
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