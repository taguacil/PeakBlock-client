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
  import { selfFormActions  } from '../../actions';
  import { connect } from 'react-redux';

class HeadacheForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    handleHeadacheChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        console.log(value);
        this.props.handleHeadacheChangeinState(bool)
        await this.setState({value:value})

    }
    render() { 
        const {value} = this.state
        return ( 
            
            <Form.Group inline>
              <label>Headache?</label>
              <Form.Field
                control={Radio}
                label="No"
                value='Headache_false'
                checked={value==='Headache_false'}
                onChange={this.handleHeadacheChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value='Headache_true'
                checked={value==='Headache_true'}
                onChange={this.handleHeadacheChange}
              />
            </Form.Group>
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
    handleHeadacheChangeinState:selfFormActions.handleHeadacheChange
};

const connectedHeadacheForm = connect(mapState, actionCreators)(HeadacheForm);
export { connectedHeadacheForm as Headache };
