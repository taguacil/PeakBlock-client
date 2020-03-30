import {
    Form,
    Radio,
  } from "semantic-ui-react";
  import React, { Component } from "react";
  import { selfFormActions  } from '../../actions';
  import { connect } from 'react-redux';

class RunnyNoseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    handleRunnyNoseChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        console.log(value);
        this.props.handleRunnyNoseChangeinState(bool)
        await this.setState({value:value})

    }
    render() { 
        const {value} = this.state
        return ( 
            
            <Form.Group inline>
              <label>RunnyNose?</label>
              <Form.Field
                control={Radio}
                label="No"
                value='RunnyNose_false'
                checked={value==='RunnyNose_false'}
                onChange={this.handleRunnyNoseChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value='RunnyNose_true'
                checked={value==='RunnyNose_true'}
                onChange={this.handleRunnyNoseChange}
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
    handleRunnyNoseChangeinState:selfFormActions.handleRunnyNoseChange
};

const connectedRunnyNoseForm = connect(mapState, actionCreators)(RunnyNoseForm);
export { connectedRunnyNoseForm as RunnyNose };
