<script setup lang="ts">
import './native/app-icon.js';

</script>

<template>
  <div>
    <div id="content">
      <div class="one">
        <div id="logo-container">
          <app-icon icon="ic_appfarms"></app-icon>
        </div>
      </div>
      <div class="two">
        <p id="label">Protocols</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

#content {
  display: flex;
  padding: 8px;
  gap: 8px;
  align-items: center;
}

#label {
  color: var(--md-sys-color-on-surface);
  font-size: 16px;
  font-weight: 500;
}

#logo-container {
  display: flex;
  background: var(--md-sys-color-primary-container);
  padding: 12px;
  border-radius: 4px;
}

app-icon {
  fill: var(--md-sys-color-on-primary-container);
  font-size: 24px;
}

</style>