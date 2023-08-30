import BaseService from "../../BaseService";

export default class Auth extends BaseService {
  async login(payload) {
    const { data } = await this._apiClient.post("/login", payload);
    return data;
  }
}
