import {
    Form,
    Radio,
  } from "semantic-ui-react";
  import React, { Component } from "react";
  import { selfFormActions  } from '../../actions';
  import { connect } from 'react-redux';

class LossOfSenseOfSmellForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    handleLossOfSenseOfSmellChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        console.log(value);
        this.props.handleLossOfSenseOfSmellChangeinState(bool)
        await this.setState({value:value})

    }
    render() { 
        const {value} = this.state
        return ( 
            
            <Form.Group inline>
              <label>Loss Sense of Smell?</label>
              <Form.Field
                control={Radio}
                label="No"
                value='LossOfSenseOfSmell_false'
                checked={value==='LossOfSenseOfSmell_false'}
                onChange={this.handleLossOfSenseOfSmellChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value='LossOfSenseOfSmell_true'
                checked={value==='LossOfSenseOfSmell_true'}
                onChange={this.handleLossOfSenseOfSmellChange}
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
    handleLossOfSenseOfSmellChangeinState:selfFormActions.handlelossOfSenseOfSmellChange
};

const connectedLossOfSenseOfSmellForm = connect(mapState, actionCreators)(LossOfSenseOfSmellForm);
export { connectedLossOfSenseOfSmellForm as LossOfSenseOfSmell };
