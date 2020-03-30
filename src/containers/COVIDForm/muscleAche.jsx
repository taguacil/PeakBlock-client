import {
    Form,
    Radio,
  } from "semantic-ui-react";
  import React, { Component } from "react";
  import { selfFormActions  } from '../../actions';
  import { connect } from 'react-redux';

class MuscleAcheForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    handleMuscleAcheChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        console.log(value);
        this.props.handleMuscleAcheChangeinState(bool)
        await this.setState({value:value})

    }
    render() { 
        const {value} = this.state
        return ( 
            
            <Form.Group inline>
              <label>MuscleAche?</label>
              <Form.Field
                control={Radio}
                label="No"
                value='MuscleAche_false'
                checked={value==='MuscleAche_false'}
                onChange={this.handleMuscleAcheChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value='MuscleAche_true'
                checked={value==='MuscleAche_true'}
                onChange={this.handleMuscleAcheChange}
              />
            </Form.Group>
         );
    }
}
 
function mapState(state, ownProps) {
    const {selfForm}= state
    return { selfForm};
}

const actionCreators = {
    handleMuscleAcheChangeinState:selfFormActions.handleMuscleAcheChange
};

const connectedMuscleAcheForm = connect(mapState, actionCreators)(MuscleAcheForm);
export { connectedMuscleAcheForm as MuscleAche };
