import {httpService} from "./";
import {apiUrl} from "../config";

export const mapService = {
  getMapData,
};

const apiEndpoint = apiUrl + "/patient";

function getMapData() {
  return httpService.get(`${apiEndpoint}/map`);
}
