import { httpService ,authService} from './';
import axios from "axios";
import { apiUrl } from '../config';
export const selfFormService = {
    setForm
}

const jwt = authService.getJwt();
if (jwt) httpService.setJwt(jwt);
function setJwt(jwt) {
    axios.defaults.headers.common = {'Authorization': `bearer ${jwt}`, 'lon': '30.0054807', 'lat': '31.4655542'}
  }
  
async function setForm(obj){
    return httpService.post(`${apiUrl}/patients/symptoms`,obj)
}
