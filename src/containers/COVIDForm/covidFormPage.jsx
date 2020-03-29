import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Grid
} from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import React, { Component } from "react";
const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" }
];

export class COVIDFORM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            observations: {
                bodyTemperature: 37,
                cough: false,
                fatigue: false,
                pain_in_throat: false,
                dyspnea_at_rest: false,
                headache: false,
                diarrhea: false,
                nausea: false,
                loss_of_sense_of_smell: false
            },
            medical_conditions: [
                "diabetes"
            ],
            excorona: false
        };
    
    }
    handleCoughChange = async (e, { value }) => {
        /*let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;*/
        console.log(value);
        
        await this.setState({...this.state,observations:{...this.state.observations,cough:value}})

    }
    
    handleFatigueChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        await this.setState({...this.state,value:value,observations:{...this.state.observations,fatigue:bool}})

    }
    
    handlePainChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        await this.setState({...this.state,value:value,observations:{...this.state.observations,pain_in_throat:bool}})

    }
    
    handleDyspneaChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        await this.setState({...this.state,value:value,observations:{...this.state.observations,dyspnea_at_rest:bool}})
        
    }
    
    handleHeadacheChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        await this.setState({...this.state,value:value,observations:{...this.state.observations,headache:bool}})

    }
    
    handleDiarrheaChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        await this.setState({...this.state,value:value,observations:{...this.state.observations,diarrhea:bool}})

    }
    
    handleNauseaChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        await this.setState({...this.state,value:value,observations:{...this.state.observations,nausea:bool}})

    }
    
    handleSmellChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        await this.setState({...this.state,value:value,observations:{...this.state.observations,loss_of_sense_of_smell:bool}})
    }

  setTemp = e => {
      
      console.log(e.target.value);
  };
  render() {
    const { value } = this.state;

    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Row columns={16}>
          <Form size="large" onSubmit={""}>
          <Form.Field inline>
                <label>Body Temperature</label>
                <input
                  placeholder={37}
                  defaultValue={37}
                  onChange={e => this.setTemp(e)}
                />
              </Form.Field>
            {/*<Form.Group inline>
               <label>Have you been tested for covid-19?</label>
              <Form.Field
                control={Radio}
                label="No"
                value="COVID_false"
                checked={value === "COVID_false"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value="COVID_true"
                checked={value === "COVID_true"}
                onChange={this.handleChange}
              />
            </Form.Group>
             */}
            <Form.Group inline>
              <label>Cough?</label>
              <Form.Field
                control={Radio}
                label="No"
                value='cough_true'
                checked={value==='cough_true'}
                onChange={this.handleCoughChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value='cough_false'
                checked={value==='cough_false'}
                onChange={this.handleCoughChange}
              />
            </Form.Group>
            <Form.Group inline>
              <label>Fatigue?</label>
              <Form.Field
                control={Radio}
                label="No"
                value="fatigue_false"
                checked={value === "fatigue_false"}
                onChange={this.handleFatigueChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value="fatigue_true"
                checked={value === "fatigue_true"}
                onChange={this.handleFatigueChange}
              />
            </Form.Group>
            <Form.Group inline>
              <label>Pain in throat?</label>
              <Form.Field
                control={Radio}
                label="No"
                value="pain_false"
                checked={value === "pain_false"}
                onChange={this.handlePainChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value="pain_true"
                checked={value === "pain_true"}
                onChange={this.handlePainChange}
              />
            </Form.Group>
            <Form.Group inline>
              <label>dyspnea at rest?</label>
              <Form.Field
                control={Radio}
                label="No"
                value="dyspnea_false"
                checked={value === "dyspnea_false"}
                onChange={this.handleDyspneaChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value="dyspnea_true"
                checked={value === "dyspnea_true"}
                onChange={this.handleDyspneaChange}
              />
            </Form.Group>
            <Form.Group inline>
            <label>Headache ?</label>
              <Form.Field
                control={Radio}
                label="No"
                value="headache_false"
                checked={value === "headache_false"}
                onChange={this.handleHeadacheChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value="headache_true"
                checked={value === "headache_true"}
                onChange={this.handleHeadacheChange}
              />
            </Form.Group>
          <Form.Group inline>
            <label>diarrhea ?</label>
              <Form.Field
                control={Radio}
                label="No"
                value="diarrhea_false"
                checked={value === "diarrhea_false"}
                onChange={this.handleDiarrheaChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value="diarrhea_true"
                checked={value === "diarrhea_true"}
                onChange={this.handleDiarrheaChange}
              />
            </Form.Group>

            <Form.Group inline>
            <label>nausea ?</label>
              <Form.Field
                control={Radio}
                label="No"
                value="nausea_false"
                checked={value === "nausea_false"}
                onChange={this.handleNauseaChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value="nausea_true"
                checked={value === "nausea_true"}
                onChange={this.handleNauseaChange}
              />
            </Form.Group>
            
            <Form.Group inline>
            <label>loss of sense of smell ?</label>
              <Form.Field
                control={Radio}
                label="No"
                value='smell_false'
                checked={value === 'smell_false'}
                onChange={this.handleSmellChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value="true"
                checked={value === "true"}
                onChange={this.handleSmellChange}
              />
            </Form.Group>
            </Form>
        </Grid.Row>
      </Grid>
    );
  }
}

//export default COVIDFORM;
