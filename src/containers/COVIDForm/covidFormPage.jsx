import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Grid,
  Dropdown
} from "semantic-ui-react";
import { connect } from 'react-redux';
import { DateInput } from "semantic-ui-calendar-react";
import React, { Component } from "react";
import {Cough} from './cough';
import {Headache} from './headache';
import{Fatigue} from './fatigue';
import{PainInThroat}from'./PainInThroat';
import{DyspneaAtRest} from './dyspneaAtRest';
import {Diarrhea} from './diarrhea';
import {Nausea} from './nausea';
import{LossOfSenseOfSmell} from'./lossOfSenseOfSmell';
import { selfFormActions } from "../../actions";
import { ChestPain } from "./chestPain";
import { MuscleAche } from "./muscleAche";
import { RunnyNose } from "./runnyNose";
import{ Consfusion} from'./confusion';
import{Personal} from '../personalForm'
import { selfFormService } from './../../services';
import { selfForm } from './../../reducers/selfForm.reducer';
const TempOptions = [
  { key: 37, value: 37, text: '37' },
  { key: 37.5, value: 37.5, text: '37.5' },
  { key: 38, value: 38, text: '38' },
  { key: 38.5, value: 38.5, text: '38.5' },
  { key: 39, value: 39, text: '39' },
  { key: 39.5, value: 39.5, text: '39.5' },
  { key: 40, value:40 , text: '40' },
]
class COVIDFORM extends Component {
    constructor(props) {
        super(props);
        this.state = {
    }
  }
  setTemp = (e, { value }) => {
  
    this.props.handleBodyTemperatureChangeinState(value)
  };
  handleSubmit=async ()=>{
    const {selfForm} = this.props;
    const obj = {observations:selfForm.observations,
      medical_conditions:selfForm.medical_conditions,
      address:{city:selfForm.personal_data.email},
      excorona:selfForm.excorona}
      selfFormService.setForm(obj).then(res=>{
        console.log(res);
        
      })
    
  }
  render() {
    const { value } = this.state;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Row columns={16}>
          <Form size="large" onSubmit={this.handleSubmit.bind(this)}>

             <Cough/>
             <Headache/>
             <Fatigue/>
             <PainInThroat/>
             <DyspneaAtRest/>
             <Diarrhea/>
             <Nausea/>
             <LossOfSenseOfSmell/>
             <ChestPain/>
             <MuscleAche/>
             <RunnyNose/>
             <Consfusion/>
              <Personal/>
              <Dropdown
    clearable
    fluid
    search
    selection
    options={TempOptions}
    placeholder='Body Temperature'
    onChange={this.setTemp}

  />
          <Button type="submit">Sumbit</Button>

            </Form>
        </Grid.Row>
      </Grid>
    );
  }
}
function mapState(state, ownProps) {
  const {selfForm}= state
 /* const { user } = state.authentication;
  const { posts } = state.home;*/
  return { selfForm};
}

const actionCreators = {
  handleHeadacheChangeinState:selfFormActions.handleHeadacheChange,
  handleBodyTemperatureChangeinState:selfFormActions.handleBodyTemperatureChange
};

const connectedCOVIDFORM = connect(mapState, actionCreators)(COVIDFORM);
export { connectedCOVIDFORM as  COVID };

//export default COVIDFORM;
