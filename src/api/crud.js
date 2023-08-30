export default {
  async create(payload) {
    const { data } = await this._apiClient.post(`/${this._resource}`, payload);
    return data;
  },

  async read(id) {
    const { data } = await this._apiClient.get(`/${this._resource}/${id}`);
    return data;
  },

  async readAll() {
    const { data } = await this._apiClient.get(`/${this._resource}`);
    return data;
  },

  async update(payload, id) {
    const { data } = await this._apiClient.put(
      `/${this._resource}/${id}`,
      payload
    );
    return data;
  },

  async delete(id) {
    const { data } = await this._apiClient.delete(`/${this._resource}/${id}`);
    return data;
  },
};
