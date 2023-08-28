<template>
  <h1 class="text-2xl">Dashboard Page</h1>
</template>

<script setup>
import { user } from "@/api/base";
import { onMounted } from "vue";

onMounted(async () => {
  const users = await user.readAll();
  console.log(users);
});
</script>
