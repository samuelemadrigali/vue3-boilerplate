export default class BaseService {
  _apiClient;
  _resource;

  constructor(apiClient, resource) {
    this._apiClient = apiClient;
    this._resource = resource;
  }
}
