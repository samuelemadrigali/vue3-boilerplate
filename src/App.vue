<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup>
import { useRoute } from "vue-router";
import AuthLayout from "./layouts/AuthLayout.vue";
import { computed } from "vue";

const layouts = {
  auth: AuthLayout,
};

const route = useRoute();
const layout = computed(() => {
  return layouts[route.meta.layout];
});
</script>
