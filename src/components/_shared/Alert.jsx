import React, { Component } from 'react';
import { connect } from 'react-redux';
import { alertActions } from '../../actions';
import { Button, Modal } from 'semantic-ui-react';

class Alert extends Component {
    state = {};
    render() {
        const { header, content } = this.props;
        const showAlert = Boolean(header || content);
        return (
            <Modal open={showAlert} onClose={this.props.closeAlert} closeIcon>
                <Modal.Header>{header}</Modal.Header>
                <Modal.Content>
                    <pre>{content}</pre>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.props.closeAlert}>Ok</Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

function mapState(state) {
    const { type, header, content } = state.alert;
    return { type, header, content };
}

const actionCreators = {
    closeAlert: alertActions.clear,
};

const connectedAlert = connect(mapState, actionCreators)(Alert);

export { connectedAlert as Alert };
