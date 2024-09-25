<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  text: String,
});
</script>

<template>
  <div class="divider">
    <p class="md-typescale-label-small">{{text}}</p>
  </div>
</template>

<style scoped>

.divider {
  width: 100%;
  font-size: 30px;
  display: flex;
  align-items: center;
}

.divider::before, .divider::after {
  flex: 1;
  content: '';
  padding: 1px;
  background-color: var(--md-sys-color-outline-variant);
}

p {
  padding: 0 4px;
  color: var(--md-sys-color-outline);
}
</style>