import {
    Form,
    Radio,
  } from "semantic-ui-react";
  import React, { Component } from "react";
  import { selfFormActions  } from '../../actions';
  import { connect } from 'react-redux';

class NauseaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    handleNauseaChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        console.log(value);
        this.props.handleNauseaChangeinState(bool)
        await this.setState({value:value})

    }
    render() { 
        const {value} = this.state
        return ( 
            
            <Form.Group inline>
              <label>Nausea?</label>
              <Form.Field
                control={Radio}
                label="No"
                value='Nausea_false'
                checked={value==='Nausea_false'}
                onChange={this.handleNauseaChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value='Nausea_true'
                checked={value==='Nausea_true'}
                onChange={this.handleNauseaChange}
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
    handleNauseaChangeinState:selfFormActions.handleNauseaChange
};

const connectedNauseaForm = connect(mapState, actionCreators)(NauseaForm);
export { connectedNauseaForm as Nausea };
