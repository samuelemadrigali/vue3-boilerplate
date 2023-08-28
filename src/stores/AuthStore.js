import { defineStore } from "pinia";
import router from "@/routes";
import { auth } from "@/api/base";

export const useAuthStore = defineStore("AuthStore", {
  // state
  state: () => ({
    accessToken: "",
  }),
  // getters
  getters: {
    isLoggedIn() {
      return this.accessToken.length > 0;
    },
  },
  // actions
  actions: {
    async login(payload) {
      try {
        const data = await auth.login(payload);
        this.accessToken = data.accessToken;
      } catch (error) {
        throw error.response.data;
      }
    },
    async logout() {
      this.$reset();
      router.push({ name: "LoginPage" });
    },
  },
  persist: {
    storage: sessionStorage,
  },
});
