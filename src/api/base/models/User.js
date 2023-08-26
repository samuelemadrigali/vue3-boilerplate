import Model from "../Model";

class User extends Model {
  async login(payload) {
    try {
      const { data } = await this._apiClient.post("/login", payload);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new User("user");
