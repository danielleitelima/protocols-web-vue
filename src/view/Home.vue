<script setup lang="ts">

import router from "../router";

const onSignOut = () => {
  localStorage.removeItem('token');
  router.push('/signIn');
};

</script>

<template>
  <div>
    <div id="content">
      <h1 class="md-typescale-headline-large">Home</h1>
      <md-filled-button @click="onSignOut">Sign Out</md-filled-button>
    </div>
  </div>

</template>

<style scoped>

#content {
  display: flex;
  background: var(--md-sys-color-surface);
  flex-direction: column;
  padding: 16px;
  gap: 8px;
  height: 100vh;
}

h1 {
  color: var(--md-sys-color-on-surface);
}

md-filled-button {
  width: 100px;
}

</style>