import { selfFormConstants } from "../constants";

const intialstate = {
    personal_data:{
        email:'',
        name:'',
        location:''

    },
  observations: {
    body_temperature: 37,
    cough: false,
    fatigue: false,
    pain_in_throat: false,
    dyspnea_at_rest: false,
    headache: false,
    diarrhea: false,
    nausea: false,
    loss_of_sense_of_smell: false,
    chest_pain:false,
    muscle_ache:false,
    runny_nose:false,
    confusion:false,
  },
  medical_conditions: ["diabetes"],
  excorona: false
};
export function selfForm(state = intialstate, action) {
  switch (action.type) {
    case selfFormConstants.COUGH_SUCCESS:
      return {
        ...state,
        observations: { ...state.observations, cough: action.data }
      };
      case selfFormConstants.LOCATION_SUCCESS:
      return {
        ...state,
        personal_data: { ...state.personal_data, location: action.data }
      };
    
      case selfFormConstants.NAME_SUCCESS:
      return {
        ...state,
        personal_data: { ...state.personal_data, name: action.data }
      };
      
      case selfFormConstants.EMAIL_SUCCESS:
      return {
        ...state,
        personal_data: { ...state.personal_data, email: action.data }
      };
      case selfFormConstants.EX_CORONA_SUCCESS:
        return {
            excorona:action.data,
          ...state,
        };
    case selfFormConstants.PAIN_IN_THROAT_SUCCESS:
      return {
        ...state,
        observations: { ...state.observations, pain_in_throat: action.data }
      };
      
    case selfFormConstants.RUNNY_NOSE_SUCCESS:
        return {
          ...state,
          observations: { ...state.observations, runny_nose: action.data }
        };
    case selfFormConstants.BODY_TEMPERATURE_SUCCESS:
      return {
        ...state,
        observations: { ...state.observations, body_temperature: action.data }
      };
    case selfFormConstants.FATIGUE_SUCCESS:
      return {
        ...state,
        observations: { ...state.observations, fatigue: action.data }
      };
    case selfFormConstants.DYSPNEA_AT_REST_SUCCESS:
      return {
        ...state,
        observations: { ...state.observations, dyspnea_at_rest: action.data }
      };
    case selfFormConstants.HEADACHE_SUCCESS:
      return {
        ...state,
        observations: { ...state.observations, headache: action.data }
      };
    case selfFormConstants.DIARRHEA_SUCCESS:
      return {
        ...state,
        observations: { ...state.observations, diarrhea: action.data }
      };
    case selfFormConstants.NAUSEA_SUCCESS:
      return {
        ...state,
        observations: { ...state.observations, nausea: action.data }
      };
    case selfFormConstants.LOSS_SENSE_OF_SMELL_SUCCESS:
      return {
        ...state,
        observations: { ...state.observations, loss_of_sense_of_smell: action.data }
      };
    case selfFormConstants.CHEST_PAIN_SUCCESS:
      return {
        ...state,
        observations: { ...state.observations, chest_pain: action.data }
      };
    case selfFormConstants.MUSCLE_ACHE_SUCCESS:
      return {
        ...state,
        observations: { ...state.observations, muscle_ache: action.data }
      };
    case selfFormConstants.RUNNY_NOSE_SUCCESS:
      return {
        ...state,
        observations: { ...state.observations, runny_nose: action.data }
      };
    case selfFormConstants.CONFUSION_SUCCESS:
      return {
        ...state,
        observations: { ...state.observations, confusion: action.data }
      };

    default:
      return { ...state };
  }
}
