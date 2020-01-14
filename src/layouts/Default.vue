<template>
  <div class="layout">
    <slot />
  </div>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<style>
body {
  background-color: #f4f4f4;
  padding: 0;
  margin: 0;
}
.container {
  width: 90%;
  margin: 0 auto;
}
@media screen and (min-width: 992px) {
  .container {
    width: 60%;
    padding: 30px 0px;
  }
}
</style>
