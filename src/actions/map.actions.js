import {categoryConstants} from '../constants';
import {mapService} from '../services';

export const mapActions = {
    getMapData,
};


function getMapData(id) {
  return async dispatch => {
    dispatch(request());
    try {
      const { data } = await mapService.getMap();
      console.log(data);
      dispatch(success(data));
    } catch (ex) {
      dispatch(failure(ex.message));
    }
  };

  function request() {
    return {type: categoryConstants.GET_MAP_DATA_REQUEST}
  }

  function success(data) {
    return {type: categoryConstants.GET_MAP_DATA_SUCCESS, data}
  }

  function failure(errors) {
    return {type: categoryConstants.GET_MAP_DATA_FAILURE, errors}
  }
}
