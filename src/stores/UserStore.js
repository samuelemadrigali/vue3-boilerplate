import { defineStore } from "pinia";
import user from "@/api/base/models/User";
import router from "@/routes";

export const useUserStore = defineStore("UserStore", {
  // state
  state: () => ({
    user: {},
    accessToken: "",
  }),
  // getters
  getters: {
    isLoggedIn() {
      return Object.keys(this.user).length > 0;
    },
  },
  // actions
  actions: {
    async addUser(payload) {
      try {
        const data = await user.create(payload);
        this.user = data.user;
        this.accessToken = data.accessToken;
      } catch (error) {
        throw error.request.responseText;
      }
    },
    async login(payload) {
      try {
        const data = await user.login(payload);
        this.user = data.user;
        this.accessToken = data.accessToken;
      } catch (error) {
        throw error.request.responseText;
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
