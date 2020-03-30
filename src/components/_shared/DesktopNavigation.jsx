import React, {Component} from 'react'
import {Button, Container, Menu, Responsive, Segment, Visibility,Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {routeConstants} from '../../constants';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
};

class DesktopNavigation extends Component {
  state = {fixed: true};

  hideFixedMenu = () => this.setState({fixed: true});
  showFixedMenu = () => this.setState({fixed: true});

  render() {
    const {fixed} = this.state;
    const {user} = this.props;
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted={fixed} textAlign='center' style={{padding: '1em 0em', marginBottom: '3em'}} vertical>
            <Menu fixed={fixed ? 'top' : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size='large'>
              <Container>
              <Menu.Item as={Link} to={'/cases'} >Cases</Menu.Item>
                <Menu.Item as={Link} to={'/self/form'} >Self Form</Menu.Item>
                {!user &&
                <Menu.Item position='right'>
                  <Button as={Link} to={routeConstants.LOGIN} inverted={!fixed}>Log in</Button>
                  <Button as={Link} to={routeConstants.REGISTER} inverted={!fixed} primary={fixed} style={{marginLeft: '0.5em'}}>Sign
                    Up</Button>
                </Menu.Item>
                }
                {user &&
                <React.Fragment>
                  <Menu.Item position='right'>
                  <Button as={Link} to={routeConstants.LOGIN} inverted={!fixed} color='red'
                            style={{marginLeft: '0.5em'}}>Logout</Button>
                  </Menu.Item>
                </React.Fragment>
                }
              </Container>
            </Menu>
          </Segment>
        </Visibility>
      </Responsive>
    )
  }
}

export default DesktopNavigation;
