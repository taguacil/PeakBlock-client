import {
    Form,
    Radio,
  } from "semantic-ui-react";
  import React, { Component } from "react";
  import { selfFormActions  } from '../../actions';
  import { connect } from 'react-redux';

class DyspneaAtRestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    handledyspneaAtRestChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        console.log(value);
        this.props.handledyspneaAtRestChangeinState(bool)
        await this.setState({value:value})

    }
    render() { 
        const {value} = this.state
        return ( 
            
            <Form.Group inline>
              <label>Dyspnea At Rest?</label>
              <Form.Field
                control={Radio}
                label="No"
                value='dyspneaAtRest_false'
                checked={value==='dyspneaAtRest_false'}
                onChange={this.handledyspneaAtRestChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value='dyspneaAtRest_true'
                checked={value==='dyspneaAtRest_true'}
                onChange={this.handledyspneaAtRestChange}
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
    handledyspneaAtRestChangeinState:selfFormActions.handleDyspneaAtRestChange
};

const connecteddyspneaAtRestForm = connect(mapState, actionCreators)(DyspneaAtRestForm);
export { connecteddyspneaAtRestForm as DyspneaAtRest };
