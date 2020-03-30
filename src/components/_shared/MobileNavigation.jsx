import React, {Component} from 'react'
import {Button, Container, Icon, Menu, Responsive, Segment, Sidebar} from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === 'undefined';
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
};

class MobileNavigation extends Component {
  state = {minHeight: 0};

  handleSidebarHide = () => this.setState({sidebarOpened: false, minHeight: 0});
  handleToggle = () => this.setState({sidebarOpened: true, minHeight: 150});

  render() {
    const {sidebarOpened} = this.state;

    return (
      <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar as={Menu} animation='push' onHide={this.handleSidebarHide} vertical visible={sidebarOpened}>
          <Menu.Item as='a' active>Home</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment inverted textAlign='center' style={{minHeight: this.state.minHeight, padding: '1em 0em'}} vertical>
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar'/>
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{marginLeft: '0.5em'}}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

export default MobileNavigation
