import {
    Form,
    Radio,
  } from "semantic-ui-react";
  import React, { Component } from "react";
  import { selfFormActions  } from '../../actions';
  import { connect } from 'react-redux';

class DiarrheaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    handleDiarrheaChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        console.log(value);
        this.props.handleDiarrheaChangeinState(bool)
        await this.setState({value:value})

    }
    render() { 
        const {value} = this.state
        return ( 
            
            <Form.Group inline>
              <label>Diarrhea?</label>
              <Form.Field
                control={Radio}
                label="No"
                value='Diarrhea_false'
                checked={value==='Diarrhea_false'}
                onChange={this.handleDiarrheaChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value='Diarrhea_true'
                checked={value==='Diarrhea_true'}
                onChange={this.handleDiarrheaChange}
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
    handleDiarrheaChangeinState:selfFormActions.handleDiarrheaChange
};

const connectedDiarrheaForm = connect(mapState, actionCreators)(DiarrheaForm);
export { connectedDiarrheaForm as Diarrhea };
