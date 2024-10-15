<script setup lang="ts">

import router from "../router";
import Navigation from "../component/Navigation.vue";

</script>

<template>
  <div id="container">
    <Navigation id="navigation"/>
    <div id="content-container">
      <div id="content">
        <h1 class="md-typescale-display-medium">Protocol models</h1>
        <div id="table-controllers">
          <md-outlined-text-field placeholder="Search" />
          <md-filled-button @click="router.push('/protocolModel/new')">New</md-filled-button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
#container {
  display: flex;
  height: 100vh;
}

#navigation {
  flex: 0;
}

#content-container {
  display: flex;
  background: var(--md-sys-color-surface);
  flex-direction: column;
  padding: 16px;
  gap: 8px;
  height: 100vh;
  flex: 1;
  align-items: center;

}

#content {
  display: flex;
  background: var(--md-sys-color-surface);
  flex-direction: column;
  padding: 16px;
  gap: 8px;
  height: 100vh;
  flex: 1;
  max-width: 1224px;
  width: 80%;
}

#table-controllers {
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  gap: 8px;
}

h1 {
  color: var(--md-sys-color-on-surface);
}

md-filled-button {
  width: 100px;
}

</style>