import {
    Form,
    Radio,
  } from "semantic-ui-react";
  import React, { Component } from "react";
  import { selfFormActions  } from '../../actions';
  import { connect } from 'react-redux';

class FatigueForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    handleFatigueChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        console.log(value);
        this.props.handleFatigueChangeinState(bool)
        await this.setState({value:value})

    }
    render() { 
        const {value} = this.state
        return ( 
            
            <Form.Group inline>
              <label>Fatigue ?</label>
              <Form.Field
                control={Radio}
                label="No"
                value='Fatigue_false'
                checked={value==='Fatigue_false'}
                onChange={this.handleFatigueChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value='Fatigue_true'
                checked={value==='Fatigue_true'}
                onChange={this.handleFatigueChange}
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
    handleFatigueChangeinState:selfFormActions.handleFatigueChange
};

const connectedFatigueForm = connect(mapState, actionCreators)(FatigueForm);
export { connectedFatigueForm as Fatigue };
