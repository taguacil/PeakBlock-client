import {
    Form,
    Radio,
  } from "semantic-ui-react";
  import React, { Component } from "react";
  import { selfFormActions  } from '../../actions';
  import { connect } from 'react-redux';

class PainInThroatForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    handlePainInThroatChange = async (e, { value }) => {
        let bool;
        const split = value.split('_')
        split[1]==="true"? bool=true : bool=false;
        console.log(value);
        this.props.handlePainInThroatChangeinState(bool)
        await this.setState({value:value})

    }
    render() { 
        const {value} = this.state
        return ( 
            
            <Form.Group inline>
              <label>Pain In Throat?</label>
              <Form.Field
                control={Radio}
                label="No"
                value='PainInThroat_false'
                checked={value==='PainInThroat_false'}
                onChange={this.handlePainInThroatChange}
              />
              <Form.Field
                control={Radio}
                label="Yes"
                value='PainInThroat_true'
                checked={value==='PainInThroat_true'}
                onChange={this.handlePainInThroatChange}
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
    handlePainInThroatChangeinState:selfFormActions.handlePainInThroat
};

const connectedPainInThroatForm = connect(mapState, actionCreators)(PainInThroatForm);
export { connectedPainInThroatForm as PainInThroat };
