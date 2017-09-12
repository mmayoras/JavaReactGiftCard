/**
 * Created by pxk2457 on 8/9/17.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import Experiences from "../Experiences";
import Image from "../Image";
import Carrier from "../Carrier";
import VersionInputs from "../VersionInputs";

import ModalCancelAndSubmit from "../../common/ModalCancelAndSubmit";
import {
  CUSTOM_CONTENT_STYLE,
  CENTER_HEADER_STYLE
} from "../../../constants/modalCustomStyle";
import _ from "lodash";

class EditVersionModal extends Component {
  constructor(props) {
    super(props);
    //queried from backend or hard code?
    const queriedYears = [
      { value: "1017", label: "2017" },
      { value: "2018", label: "2018" }
    ];

    const queriedGiftcardTypes = [
      {value: "25/peg", label: "25/peg"},
      {value: "10/peg", label: "10/peg"},
      {value: "?/peg", label: "?/peg"}
    ];

    let years = queriedYears.map(region =>
      <option value={region.value}>
        {region.label}
      </option>
    );
    let giftcardTypes = queriedGiftcardTypes.map(region =>
      <option value={region.value}>
        {region.label}
      </option>
    );
    this.state = {
      isB2Bor3rdParty: false,
      years: [years],
      giftcardTypes: [giftcardTypes],
      selectedImageName: "",
      selectedCarrierImageName: "",
      designData: {
        experiences: [],
        regions: [],
        selectedYear: "",
        designName: "",
        versionName: "",
        projects: [],
        codeNumber: "",
        technique: "",
        selectedGiftcardType: "",
        cardImage: {},
        carrierImage: {}
      }
    };
  }

  onUpdateVersion = () => {
    // Do nothing for now
    this.props.onUpdateVersion();
    this.handleClose();
  };

  onCardImageSelect = event => {
    let image = event.target.files[0];
    let clonedState = Object.assign({}, this.state);
    clonedState.selectedImageName = image.name;
    let selectedImageName = clonedState.selectedImageName;
    clonedState.designData.cardImage = {};
    clonedState.designData.cardImage = image;
    let designData = clonedState.designData;
    this.setState({ designData, selectedImageName });
  };

  onCarrierImageSelect = event => {
    let image = event.target.files[0];
    let clonedState = Object.assign({}, this.state);
    clonedState.selectedCarrierImageName = image.name;
    let selectedCarrierImageName = clonedState.selectedCarrierImageName;
    clonedState.designData.carrierImage = {};
    clonedState.designData.carrierImage = image;
    let designData = clonedState.designData;
    this.setState({ designData, selectedCarrierImageName });
  };

  onExperienceChanged = experiences => {
    debugger;
    let clonedState = Object.assign({}, this.state);
    clonedState.designData.experiences = [];
    clonedState.designData.experiences = [...experiences];
    let designData = clonedState.designData;
    let isB2Bor3rdParty = false;

    if (designData.experiences.indexOf("instore") === -1) {
      isB2Bor3rdParty = true;
    }

    this.setState({
      designData,
      isB2Bor3rdParty
    });
  };

  onRegionsChanged = regions => {
    let clonedState = Object.assign({}, this.state);
    clonedState.designData.regions = [];
    clonedState.designData.regions = [...regions];
    let designData = clonedState.designData;
    this.setState({ designData });
  };

  onProjectsChanged = projects => {
    let clonedState = Object.assign({}, this.state);
    clonedState.designData.projects = [];
    clonedState.designData.projects = [...projects];
    let designData = clonedState.designData;
    this.setState({ designData });
  };

  onVersionNameChanged = event => {
    let clonedState = Object.assign({}, this.state);
    clonedState.designData.versionName = event.target.value;
    let designData = clonedState.designData;
    this.setState({ designData });
  }

  onCodeNumberChange = event => {
    let clonedState = Object.assign({}, this.state);
    clonedState.designData.codeNumber = event.target.value;
    let designData = clonedState.designData;
    this.setState({ designData });
  };

  onTechniquesChanged = event => {
    let clonedState = Object.assign({}, this.state);
    clonedState.designData.technique = event.target.value;
    let designData = clonedState.designData;
    this.setState({ designData });
  };

  onYearChanged = event => {
    let clonedState = Object.assign({}, this.state);
    let designData = clonedState.designData;
    designData.selectedYear = event.target.value;
    this.setState({ designData });
  };

  onGiftcardTypesChanged = event => {
    let clonedState = Object.assign({}, this.state);
    let designData = clonedState.designData;
    designData.selectedGiftcardType = event.target.value;
    this.setState({ designData });
  };

  handleClose = () => {
    this.props.onModalClose();
  };

  /**
   * Modal renders based upon local state, so when props changes for pre-populating
   * the edit modal, the values do not show unless you update the local state from
   * the new props
   * @param newProps
   */
  componentWillReceiveProps = newProps => {
    debugger;
    if (!_.isEmpty(newProps.currentDesign)) {
      this.setState({
        designData: newProps.currentDesign
      });
    }
  };

  render = () => {
    const shouldSubmitBtnVisible = this.state.designData.experiences.length !== 0;
  
    return (
      <div>
        <Dialog
          title="Edit Version Details"
          actions={
            <ModalCancelAndSubmit
              overrideSubmitBtnLabel={"Save Version"}
              onCancelClicked={this.handleClose}
              isSubmitBtnVisible={shouldSubmitBtnVisible}
              isCancelBtnVisible={true}
              onSubmitClicked={this.onUpdateVersion}
            />
          }
          modal={true}
          contentStyle={CUSTOM_CONTENT_STYLE}
          titleStyle={CENTER_HEADER_STYLE}
          autoScrollBodyContent={true}
          open={this.props.showModal}
        >
          <Experiences
            value={this.state.designData.experiences}
            experienceChanged={this.onExperienceChanged}
          />
          <VersionInputs
            regionValues={this.state.designData.regions}
            regionChanged={this.onRegionsChanged}
            codeNumberOnChange={this.onCodeNumberChange}
            codeNumber={this.state.designData.codeNumber}
            designName={this.state.designData.designName}
            versionNameOnChange={this.onVersionNameChanged}
            versionName={this.state.designData.versionName}
            isB2Bor3rdParty={this.state.isB2Bor3rdParty}
            years={this.state.years}
            selectedYear={this.state.designData.selectedYear}
            yearChanged={this.onYearChanged}
            projectValues={this.state.designData.projects}
            projectChanged={this.onProjectsChanged}
            giftcardTypes={this.state.giftcardTypes}
            selectedGiftcardType={this.state.designData.selectedGiftcardType}
            giftcardTypesChanged={this.onGiftcardTypesChanged}
            techniqueOnChange={this.onTechniquesChanged}
            technique={this.state.designData.technique}
          />
          <hr />
          <h3 className="mui--text-center">Add Image</h3>
          <Image
            imageUploadLabel={"Card Image"}
            imageName={this.state.selectedImageName}
            onImageSelect={this.onCardImageSelect}
            id={"cardImage"}
          />

          <Carrier
            imageUploadLabel={"Carrier Image"}
            imageName={this.state.selectedCarrierImageName}
            onImageSelect={this.onCarrierImageSelect}
            id={"carrierImage"}
          />
        </Dialog>
      </div>
    );
  };
}

export default EditVersionModal;
