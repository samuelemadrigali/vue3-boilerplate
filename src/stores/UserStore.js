import { defineStore } from "pinia";
import { user } from "@/api/base";

export const useUserStore = defineStore("UserStore", {
  // state
  state: () => ({
    user: {},
  }),
  // getters
  getters: {},
  // actions
  actions: {
    async addUser(payload) {
      try {
        const data = await user.create(payload);
        this.user = data.user;
        this.accessToken = data.accessToken;
      } catch (error) {
        throw error.response.data;
      }
    },
  },
});
