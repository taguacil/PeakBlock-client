import {
    Form,
    Radio,
  } from "semantic-ui-react";
  import React, { Component } from "react";
  import { selfFormActions  } from '../../actions';
  import { connect } from 'react-redux';

class CoughForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    handleCoughChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        console.log(value);
        this.props.handleCoughChangeinState(bool)
        await this.setState({value:value})

    }
    render() { 
        const {value} = this.state
        return ( 
            
            <Form.Group inline>
              <label>Cough?</label>
              <Form.Field
                control={Radio}
                label="No"
                value='cough_false'
                checked={value==='cough_false'}
                onChange={this.handleCoughChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value='cough_true'
                checked={value==='cough_true'}
                onChange={this.handleCoughChange}
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
    handleCoughChangeinState:selfFormActions.handleCoughChange
};

const connectedCoughForm = connect(mapState, actionCreators)(CoughForm);
export { connectedCoughForm as Cough };
