<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

import AuthLayout from "./layouts/AuthLayout.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";

const layouts = {
  auth: AuthLayout,
};

const route = useRoute();
const layout = computed(() => {
  return layouts[route.meta.layout] || DefaultLayout;
});
</script>
