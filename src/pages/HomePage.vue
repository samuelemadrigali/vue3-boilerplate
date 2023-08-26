<template>
  <h1 class="text-2xl">Home Page</h1>
  <button @click="login">Login</button>
</template>

<script setup>
import { useUserStore } from "@/stores/UserStore";
const userStore = useUserStore();

async function login() {
  try {
    await userStore.login({
      email: "samuele.madrigali@gmail.com",
      password: "passwordd",
    });
  } catch (error) {
    console.error(error);
  }
}
</script>
