import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button, Form, Grid, Header, Message, Segment,Dropdown} from "semantic-ui-react";
import {DateInput} from "semantic-ui-calendar-react";

import {validatorActions, userActions} from '../../actions';
const regOptions = [
  { key: 'Practitioner', value: 'Practitioner', text: 'Practitioner' },
  { key: 'Patient', value: 'Patient', text: 'Patient' }
]
export class RegisterContainer extends React.Component {
  state = {
    user: {
      name: '',
      email: '',
      password: '',
      gender: 'Male',
      birthDate: ''
    },
    submitted: false,
    regType:'Practitioner'
  };

  schema = {
    "required": ["name", "email", "password", "birthDate", "gender"],
    "properties": {
      "name": {"title": "Name", "type": "string", "minLength": 5, "maxLength": 50},
      "email": {"title": "Email", "type": "string", "format": "email", "minLength": 5, "maxLength": 255},
      "password": {"title": "Password", "type": "string", "minLength": 8, "maxLength": 1024},
      "birthDate": {"title": "Date of birth", "example": "1993-12-18", "type": "string", "format": "date"},
      "gender": {"title": "Gender", "type": "string", "enum": ["male", "female"]},
    }
  };

  handleChange = (e, {name, value}) => {
    this.props.validateInput(this.schema, name, value);
    const user = {...this.state.user};
    user[name] = value;
    this.setState({user})
  };
  handleRegOption = (e,{value})=>{
    this.setState({...this.state,regType:value})

  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({submitted: true});
    const {name, email, password, gender, birthDate} = this.state.user;
    await this.props.validateForm(this.schema, {name, email, password, gender, birthDate});
    this.setState({submitted: false});
    if (!this.props.valid) return;
    await this.props.register(this.state.user,this.state.regType);
  };

  render() {
    const {registering, errors, alert} = this.props;
    const {user, submitted} = this.state;
  
    return (
      <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
        <Grid.Column style={{maxWidth: 450}}>
          <Header as='h2' color='teal' textAlign='center'>Register a new account</Header>
          {alert && alert.header &&
          <Message error={alert.type === 'error'} success={alert.type === 'success'}
                   header={alert.header} content={alert.content}/>}
          <Form loading={registering || submitted} size='large' onSubmit={this.handleSubmit}>
            <Segment>
            <Dropdown
            style={{ 'margin-bottom': 5 }}
            size='large'
            deburr
            fluid
            options={regOptions}
            placeholder='Register As'
            search
            selection
            onChange={this.handleRegOption}

          />

              <Form.Input name='name' size='large' icon='user' iconPosition='left' placeholder='John Adams'
                          value={user.name} onChange={this.handleChange} error={errors && errors.name}/>

              <Form.Input name='email' size='large' icon='mail' iconPosition='left' value={user.email}
                          placeholder='john.adams@email.com' onChange={this.handleChange}
                          error={errors && errors.email}/>

              <Form.Input name='password' size='large' icon='lock' iconPosition='left' placeholder='Password'
                          value={user.password} type='password' onChange={this.handleChange}
                          error={errors && errors.password}/>

              <DateInput name='birthDate' size='large' iconPosition="left" dateFormat={'Y-MM-DD'} placeholder="1993-12-18"
                         value={user.birthDate} onChange={this.handleChange} error={errors && errors.birthDate}/>

              <Form.Group inline style={{margin: '1em 0'}}>
                <Form.Radio name='gender' label='male' value='male' checked={user.gender === 'Male'}
                            onChange={this.handleChange} error={errors && !!errors.gender}/>

                <Form.Radio name='gender' label='Female' value='female' checked={user.gender === 'female'}
                            onChange={this.handleChange} error={errors && !!errors.gender}/>
              </Form.Group>

              <Button color='teal' fluid>Register</Button>
            </Segment>
          </Form>
          <Message>Already have an account? <Link to='/login'>Login</Link></Message>
        </Grid.Column>
      </Grid>
    );
  }
}

function mapState(state) {
  const {alert} = state;
  const {registering} = state.registration;
  const {valid, errors} = state.validation;
  return {registering, valid, errors, alert};
}

const actionCreators = {
  register: userActions.register,
  validateInput: validatorActions.validateInput,
  validateForm: validatorActions.validateForm,
};

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterContainer);
export {connectedRegisterPage as RegisterPage};
