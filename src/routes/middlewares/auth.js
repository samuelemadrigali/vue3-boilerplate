import { useAuthStore } from "@/stores/AuthStore";

export default function ({ next }) {
  const authStore = useAuthStore();
  if (!authStore.isLoggedIn) {
    return next({ name: "LoginPage" });
  }
  return next();
}
