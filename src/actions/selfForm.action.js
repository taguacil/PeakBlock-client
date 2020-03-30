import { selfFormConstants } from '../constants';


export const selfFormActions={
    handleCoughChange,  handleConfusionChange,handleDiarrheaChange,handleNauseaChange,handlelossOfSenseOfSmellChange,handleMuscleAcheChange,handleChestPainChange
    ,handleLocationChange,handleEmailChange,handleNameChange,handleRunnyNoseChange,handleBodyTemperatureChange,handlePainInThroat,handleFatigueChange,handleHeadacheChange,handleDyspneaAtRestChange,handleExCoronaChange
}
function handleCoughChange(value) {
    return dispatch => {
        dispatch(success(value));
    };
    function success(value) {
      return {type: selfFormConstants.COUGH_SUCCESS, data:value}
    }
  }
  
function handleExCoronaChange(value) {
  return dispatch => {
      dispatch(success(value));
  };
  function success(value) {
    return {type: selfFormConstants.EX_CORONA_SUCCESS, data:value}
  }
}
  function handleBodyTemperatureChange(value) {
    return dispatch => {
        dispatch(success(value));
    };
    function success(value) {
      return {type: selfFormConstants.BODY_TEMPERATURE_SUCCESS, data:value}
    }
  }
  
  function handleEmailChange(value) {
    return dispatch => {
        dispatch(success(value));
    };
    function success(value) {
      return {type: selfFormConstants.EMAIL_SUCCESS, data:value}
    }
  }
  
  function handleNameChange(value) {
    return dispatch => {
        dispatch(success(value));
    };
    function success(value) {
      return {type: selfFormConstants.NAME_SUCCESS, data:value}
    }
  }
  
  function handleLocationChange(value) {
    return dispatch => {
        dispatch(success(value));
    };
    function success(value) {
      return {type: selfFormConstants.LOCATION_SUCCESS, data:value}
    }
  }
  function handleFatigueChange(value) {
    return dispatch => {
        dispatch(success(value));
    };
    function success(value) {
      return {type: selfFormConstants.FATIGUE_SUCCESS, data:value}
    }
  }
  function handlePainInThroat(value) {
    return dispatch => {
        dispatch(success(value));
    };
    function success(value) {
      return {type: selfFormConstants.PAIN_IN_THROAT_SUCCESS, data:value}
    }
  }
  function handleDyspneaAtRestChange(value) {
    return dispatch => {
        dispatch(success(value));
    };
    function success(value) {
      return {type: selfFormConstants.DYSPNEA_AT_REST_SUCCESS, data:value}
    }
  }
  function handleHeadacheChange(value) {
    return dispatch => {
        dispatch(success(value));
    };
    function success(value) {
      return {type: selfFormConstants.HEADACHE_SUCCESS, data:value}
    }
  }

  function handleDiarrheaChange(value) {
    return dispatch => {
        dispatch(success(value));
    };
    function success(value) {
      return {type: selfFormConstants.DIARRHEA_SUCCESS, data:value}
    }
  }

  function handleNauseaChange(value) {
    return dispatch => {
        dispatch(success(value));
    };
    function success(value) {
      return {type: selfFormConstants.NAUSEA_SUCCESS, data:value}
    }
  }

  function handlelossOfSenseOfSmellChange(value) {
    return dispatch => {
        dispatch(success(value));
    };
    function success(value) {
      return {type: selfFormConstants.LOSS_SENSE_OF_SMELL_SUCCESS, data:value}
    }
  }

  function handleChestPainChange(value) {
    return dispatch => {
        dispatch(success(value));
    };
    function success(value) {
      return {type: selfFormConstants.CHEST_PAIN_SUCCESS, data:value}
    }
  }
  function handleMuscleAcheChange(value) {
    return dispatch => {
        dispatch(success(value));
    };
    function success(value) {
      return {type: selfFormConstants.MUSCLE_ACHE_SUCCESS, data:value}
    }
  }
  function handleConfusionChange(value) {
    return dispatch => {
        dispatch(success(value));
    };
    function success(value) {
      return {type: selfFormConstants.CONFUSION_SUCCESS, data:value}
    }
  }
  function handleRunnyNoseChange(value) {
    return dispatch => {
        dispatch(success(value));
    };
    function success(value) {
      return {type: selfFormConstants.RUNNY_NOSE_SUCCESS, data:value}
    }
  }