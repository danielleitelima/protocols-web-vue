<script setup lang="ts">
import './native/app-sidebar-button.js';

import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';

import '@material/web/textfield/outlined-text-field.js';
</script>

<template>
  <nav>
    <app-sidebar-button
        icon="ic_search"
        text="AppFarms"
        hoverColor="#DFE3E7"
        contentColor="#CFE5FF"
        contentColorVariant="#C0C8CD"
        containerColor="#124A73"
        isSelected="true"
    ></app-sidebar-button>
    <app-sidebar-button
        icon="ic_search"
        text="AppFarms"
        hoverColor="#DFE3E7"
        contentColor="#CFE5FF"
        contentColorVariant="#C0C8CD"
        containerColor="#124A73"
        isSelected="true"
    ></app-sidebar-button>


  </nav>

  <md-outlined-text-field
      label="Dollar amount"
      type="number"
      value="0"
      prefix-text="$"
      suffix-text=".00">
  </md-outlined-text-field>

</template>

<style scoped>

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 80px;
  color: #CFE5FF;
  padding-top: 20px;
}


</style>