import React, {Component} from 'react';
import {Container, Divider, Image, List, Segment} from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <Segment ui inverted vertical footer>
          <Container className='center aligned'>
            <Image ui centered src='img/x.png' size='mini'/>
            <Divider section/>
            <List ui horizontal inverted small divided link>
              <List.Item as='a'>About Us</List.Item>
              <List.Item as='a'>Contact Us</List.Item>
              <List.Item as='a'>Terms and Conditions</List.Item>
              <List.Item as='a'>Privacy Policy</List.Item>
              <List.Item as='a'>Support</List.Item>
            </List>
          </Container>
        </Segment>
      </React.Fragment>
    )
  }
}

export default Footer
