// import React, { Component, Fragment } from "react";
// import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";

// import axios from "axios";

// import { API_URL } from "../constants";

// class ConfirmRemovalModal extends Component {
//   state = {
//     modal: false
//   };

//   toggle = () => {
//     this.setState(previous => ({
//       modal: !previous.modal
//     }));
//   };

//   deleteStudent = pk => {
//     axios.delete(API_URL + pk).then(() => {
//       this.props.resetState();
//       this.toggle();
//     });
//   };

//   render() {
//     return (
//       <Fragment>
//         <Button color="danger" onClick={() => this.toggle()}>
//           Remove
//         </Button>
//         <Modal isOpen={this.state.modal} toggle={this.toggle}>
//           <ModalHeader toggle={this.toggle}>
//             Do you really wanna delete the student?
//           </ModalHeader>

//           <ModalFooter>
//             <Button type="button" onClick={() => this.toggle()}>
//               Cancel
//             </Button>
//             <Button
//               type="button"
//               color="primary"
//               onClick={() => this.deleteStudent(this.props.pk)}
//             >
//               Yes
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </Fragment>
//     );
//   }
// }

// export default ConfirmRemovalModal;


import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class ConfirmRemovalModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  deleteEvent = id => {
    axios.delete(API_URL + id).then(() => {
      this.props.resetState();
      this.toggle();
    });
  };
  
  render() {
    return (
      <Fragment>
        <Button color="danger" onClick={() => this.toggle()}>
          Remove
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Do you really wanna delete the Event?
          </ModalHeader>

          <ModalFooter>
            <Button type="button" onClick={() => this.toggle()}>
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => this.deleteEvent(this.props.id)}
            >
              Yes
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ConfirmRemovalModal;
