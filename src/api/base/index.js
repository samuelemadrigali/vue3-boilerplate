import client from "./client";
import crud from "../crud";

// Services
import Auth from "./services/Auth";
import User from "./services/User";

// Crud
Object.assign(User.prototype, crud);

const user = new User(client, "users");
const auth = new Auth(client, "auth");

export { auth, user };
