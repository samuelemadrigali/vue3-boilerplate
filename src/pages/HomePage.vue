<template>
  <h1 class="text-2xl">Home Page</h1>
  <button @click="login">Login</button>
</template>

<script setup>
import { useAuthStore } from "@/stores/AuthStore";
const authStore = useAuthStore();

async function login() {
  try {
    await authStore.login({
      email: "samuele.madrigali@gmail.com",
      password: "password",
    });
  } catch (error) {
    console.error(error);
  }
}
</script>
