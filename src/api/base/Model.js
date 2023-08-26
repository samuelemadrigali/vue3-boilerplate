import client from "./client";
import BaseCrud from "../BaseCrud";

export default class Model extends BaseCrud {
  _apiClient = client;
}
