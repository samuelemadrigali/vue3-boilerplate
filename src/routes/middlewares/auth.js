export default function ({ next }) {
  if (!localStorage.getItem("token")) {
    return next({ name: "LoginPage" });
  }
  return next();
}
