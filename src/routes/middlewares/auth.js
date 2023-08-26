import { useUserStore } from "@/stores/UserStore";

export default function ({ next }) {
  const userStore = useUserStore();
  if (!userStore.isLoggedIn) {
    return next({ name: "LoginPage" });
  }
  return next();
}
