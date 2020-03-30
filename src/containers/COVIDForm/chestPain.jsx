import {
    Form,
    Radio,
  } from "semantic-ui-react";
  import React, { Component } from "react";
  import { selfFormActions  } from '../../actions';
  import { connect } from 'react-redux';

class ChestPainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    handleChestPainChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        console.log(value);
        this.props.handleChestPainChangeinState(bool)
        await this.setState({value:value})

    }
    render() { 
        const {value} = this.state
        return ( 
            
            <Form.Group inline>
              <label>ChestPain?</label>
              <Form.Field
                control={Radio}
                label="No"
                value='ChestPain_false'
                checked={value==='ChestPain_false'}
                onChange={this.handleChestPainChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value='ChestPain_true'
                checked={value==='ChestPain_true'}
                onChange={this.handleChestPainChange}
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
    handleChestPainChangeinState:selfFormActions.handleChestPainChange
};

const connectedChestPainForm = connect(mapState, actionCreators)(ChestPainForm);
export { connectedChestPainForm as ChestPain };
