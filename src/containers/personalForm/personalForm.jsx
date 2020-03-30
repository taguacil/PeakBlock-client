import React ,{Component}from 'react'
import { Dropdown , Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { selfFormActions } from "../../actions";

const options = [
  { key: 'Bezirk Affoltern', value: 'Bezirk Affoltern', text: 'Bezirk Affoltern' },
  { key: 'b', value: 'b', text: 'Cafe without accent' },
  { key: 'c', value: 'c', text: 'Déjà vu' },
  { key: 'd', value: 'd', text: 'Deja vu' },
  { key: 'e', value: 'e', text: 'Scandinavian å ä æ ø ö' },
  { key: 'f', value: 'f', text: 'Scandinavian a a ae o o' },
]
class PersonalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleNameChange = (e)=>{
        console.log(e.target.value);
        
    }
    handelEmailChange = (e)=>{
        console.log(e.target.value);
        
    }
    render() { 
        return (
            <Form.Group> 
        
          <Form.Field inline>
          <label>Name</label>
          <input
            placeholder={'youe name'}
            onChange={e => this.handleNameChange(e)}
          />

        </Form.Field>
        
        <Form.Field inline>
          <label>Email address</label>
          <input
            placeholder={'youe email address'}
            onChange={e => this.handelEmailChange(e)}
          />
        </Form.Field>
        <Dropdown
            deburr
            fluid
            options={options}
            placeholder='Select your City'
            search
            selection
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

const connectedPersonalForm = connect(mapState, actionCreators)(PersonalForm);
export { connectedPersonalForm as Personal };

