<script setup lang="ts">
import './native/app-sidebar-button.js';
import './native/app-icon.js';

import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';

import '@material/web/textfield/outlined-text-field.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/iconbutton/outlined-icon-button.js';
import '@material/web/iconbutton/filled-icon-button.js';
import '@material/web/icon/icon.js';

import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <nav>
    <div id="feature">
      <app-sidebar-button
          icon="ic_fact_check"
          text="Protocol"
          isSelected="true"
      ></app-sidebar-button>
      <app-sidebar-button
          icon="ic_enterprise"
          text="Client"
          isSelected="false"
      ></app-sidebar-button>
      <app-sidebar-button
          icon="ic_people"
          text="User"
          isSelected="false"
      ></app-sidebar-button>
    </div>

    <div id="setting">
      <md-outlined-icon-button @click="toggleDark()">
        <app-icon :icon="isDark ? 'ic_light_mode' : 'ic_dark_mode'"></app-icon>
      </md-outlined-icon-button>
      <md-filled-icon-button>
        DL
      </md-filled-icon-button>
    </div>

  </nav>
</template>

<style scoped>

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 80px;
  gap: 16px;
  background: var(--md-sys-color-surface-container);
  padding: 12px 8px;
}

#feature {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 0;
}

#setting {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  align-items: center;
  justify-content: end;
}

md-filled-button {
  background: red;
}

app-icon {
  fill: var(--md-sys-color-on-surface);
}

md-filled-icon-button {
  --md-sys-color-primary: var(--md-sys-color-primary-container);
  --md-sys-color-on-primary: var(--md-sys-color-on-primary-container);
}

</style>