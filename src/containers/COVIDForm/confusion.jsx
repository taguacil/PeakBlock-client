import {
    Form,
    Radio,
  } from "semantic-ui-react";
  import React, { Component } from "react";
  import { selfFormActions  } from '../../actions';
  import { connect } from 'react-redux';

class ConsfusionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    handleConsfusionChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        console.log(value);
        this.props.handleConsfusionChangeinState(bool)
        await this.setState({value:value})

    }
    render() { 
        const {value} = this.state
        return ( 
            
            <Form.Group inline>
              <label>Consfusion?</label>
              <Form.Field
                control={Radio}
                label="No"
                value='Consfusion_false'
                checked={value==='Consfusion_false'}
                onChange={this.handleConsfusionChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value='Consfusion_true'
                checked={value==='Consfusion_true'}
                onChange={this.handleConsfusionChange}
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
    handleConsfusionChangeinState:selfFormActions.handleConfusionChange
};

const connectedConsfusionForm = connect(mapState, actionCreators)(ConsfusionForm);
export { connectedConsfusionForm as Consfusion };
