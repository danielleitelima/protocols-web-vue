<script setup lang="ts">
import './component/native/app-sidebar-button.js';
import { RouterView } from "vue-router";
import { useDark } from "@vueuse/core";
const isDark = useDark();

</script>

<template>
  <RouterView :class="isDark ? 'dark' : 'light'" />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  --md-ref-typeface-brand: 'Roboto', sans-serif;
  --md-ref-typeface-plain: system-ui;
}
</style>