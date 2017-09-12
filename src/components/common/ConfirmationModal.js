import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import ModalCancelAndSubmit from "./ModalCancelAndSubmit";
import {
  CUSTOM_CONTENT_STYLE,
  CENTER_HEADER_STYLE
} from "../../constants/modalCustomStyle";

class ConfirmationModal extends Component {
  onConfirmDeleteModalClose = () => {
    this.props.onConfirmDeleteModalClose();
  };

  onConfirmDeleteModalSubmit = () => {
    this.props.onConfirmDeleteModalSubmit();
  };

  render = () => {
    return (
      <div>
        <Dialog
          title="Delete Confirmation"
          actions={
            <ModalCancelAndSubmit
              overrideSubmitBtnLabel={"Delete"}
              onCancelClicked={this.onConfirmDeleteModalClose}
              isSubmitBtnVisible={true}
              isCancelBtnVisible={true}
              onSubmitClicked={this.onConfirmDeleteModalSubmit}
            />
          }
          modal={true}
          contentStyle={CUSTOM_CONTENT_STYLE}
          titleStyle={CENTER_HEADER_STYLE}
          autoScrollBodyContent={true}
          open={this.props.showModal}
        >
          {this.props.msg}
        </Dialog>
      </div>
    );
  };
}

export default ConfirmationModal;
