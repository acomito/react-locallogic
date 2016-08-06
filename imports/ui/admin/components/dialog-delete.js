import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Delete from 'material-ui/svg-icons/action/delete';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */

 const styles= {
    FloatingActionButton: {
      marginLeft: "0px",
    },
    CancelButton: {
      color: "#B2DFDB",
    },
    DeleteButton: {
      color: "#EF5350",
    },
    h2: {
      textAlign: "center",
    },
    text: {
      textAlign: "center",
      marginBottom: "20px"
    }
 };


export default class DialogDelete extends React.Component {

   constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      open: false,
    };      
  }

  handleOpen() {
    this.setState({open: true});
  }

  deleteItem() {
    this.props.deleteMethod();
    this.setState({open: false});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
        style={styles.CancelButton}
      />,
      <FlatButton
        label="Delete This."
        primary={true}
        onTouchTap={this.deleteItem}
        style={styles.DeleteButton}
      />,
    ];

    return (
      <div>
        <FloatingActionButton label="Delete" style={styles.FloatingActionButton} mini={true} zDepth={1}  backgroundColor="#E57373" onTouchTap={this.handleOpen} ><Delete/></FloatingActionButton>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <h2 style={styles.h2}>Are You Sure?</h2> 
          <p style={styles.text}>Deleting this {this.props.itemType} is permanent.</p>
        </Dialog>
      </div>
    );
  }
}
