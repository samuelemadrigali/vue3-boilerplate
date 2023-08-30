export default class BaseService {
  constructor(apiClient, resource) {
    this._apiClient = apiClient;
    this._resource = resource;
  }
}
