import React, {Component} from "react";
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

class AddVersionModal extends Component {
  constructor(props) {
    debugger;
    super(props);
    //queried from backend or hard code?
    const queriedYears = [
      {value: "2017", label: "2017"},
      {value: "2018", label: "2018"}
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
    debugger;
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
        designName: this.props.versionListData.parentDesignName,
        versionName: "",
        projects: ["holiday"],
        codeNumber: this.props.versionListData.inProgressVersions[0].codeNumber,
        technique: "",
        selectedGiftcardType: "",
        cardImage: {},
        carrierImage: {},
        selectedCardImage: ""
      }
    };
  }

  onAddVersionDesign = () => {
    debugger;
    console.log(JSON.stringify(this.state.designData));

    let clonedState = Object.assign({}, this.state);

    // TODO: Change from hard-coded location due to User-Demo
    // clonedState.designData.selectedCardImage = this.props.parentImage;
    clonedState.designData.selectedCardImage = 'https://i.imgur.com/woxL7B5.png';

    let designData = clonedState.designData;
    this.setState({
      designData
    });

    let designDataCopy = this.state.designData;

    this.props.addNewVersion(designDataCopy);
  };

  onCardImageSelect = event => {
    let image = event.target.files[0];
    let clonedState = Object.assign({}, this.state);
    clonedState.selectedImageName = image.name;
    let selectedImageName = clonedState.selectedImageName;
    clonedState.designData.cardImage = {};
    clonedState.designData.cardImage = image;
    let designData = clonedState.designData;
    this.setState({designData, selectedImageName});
  };

  onCarrierImageSelect = event => {
    let image = event.target.files[0];
    let clonedState = Object.assign({}, this.state);
    clonedState.selectedCarrierImageName = image.name;
    let selectedCarrierImageName = clonedState.selectedCarrierImageName;
    clonedState.designData.carrierImage = {};
    clonedState.designData.carrierImage = image;
    let designData = clonedState.designData;
    this.setState({designData, selectedCarrierImageName});
  };

  onExperienceChanged = experiences => {
    let clonedState = Object.assign({}, this.state);
    clonedState.designData.experiences = [];
    clonedState.designData.experiences = [...experiences];
    let designData = clonedState.designData;
    let isB2Bor3rdParty = false;

    if (designData.experiences.indexOf("instore") === -1) {
      isB2Bor3rdParty = true;
    }
    //reset back to original state
    if (designData.experiences.length === 0) {
      designData.experiences = [];
      designData.regions = [];
      designData.selectedYear = "";
      designData.designName = this.props.versionListData.parentDesignName;
      designData.versionName = "";
      designData.projects = [];
      designData.codeNumber = this.props.versionListData.inProgressVersions[0].codeNumber;
      designData.technique = "";
      designData.selectedGiftcardType = "";
      designData.cardImage = {};
      designData.carrierImage = {};
      designData.selectedCardImage = "";
      isB2Bor3rdParty = false;
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
    this.setState({designData});
  };

  onCodeNumberChange = event => {
    let clonedState = Object.assign({}, this.state);
    clonedState.designData.codeNumber = event.target.value;
    let designData = clonedState.designData;
    this.setState({designData});
  };

  onTechniquesChanged = event => {
    let clonedState = Object.assign({}, this.state);
    clonedState.designData.technique = event.target.value;
    let designData = clonedState.designData;
    this.setState({designData});
  };

  onYearChanged = event => {
    let clonedState = Object.assign({}, this.state);
    let designData = clonedState.designData;
    designData.selectedYear = event.target.value;
    this.setState({designData});
  };

  onGiftcardTypesChanged = event => {
    let clonedState = Object.assign({}, this.state);
    let designData = clonedState.designData;
    designData.selectedGiftcardType = event.target.value;
    this.setState({designData});
  };

  onVersionNameChanged = event => {
    let clonedState = Object.assign({}, this.state);
    clonedState.designData.versionName = event.target.value;
    let designData = clonedState.designData;
    this.setState({designData});
  };

  handleClose = () => {
    this.props.closeAddModal();
  };

  componentWillReceiveProps = newProps => {
    debugger;
    let clonedState = Object.assign({}, this.state);
    clonedState.designData.designName = newProps.versionListData.parentDesignName;
    let designData = clonedState.designData;
    this.setState({
      designData
    });
    debugger;
  };

  render = () => {
    debugger;
    const shouldSubmitBtnVisible = this.state.designData.experiences.length
      !== 0;
    return (
      <div>
        <Dialog
          title="Add Version Details"
          actions={
            <ModalCancelAndSubmit
              overrideSubmitBtnLabel={"Save Version"}
              onCancelClicked={this.handleClose}
              isSubmitBtnVisible={shouldSubmitBtnVisible}
              isCancelBtnVisible={true}
              onSubmitClicked={this.onAddVersionDesign}
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
            giftcardTypes={this.state.giftcardTypes}
            selectedGiftcardType={this.state.designData.selectedGiftcardType}
            giftcardTypesChanged={this.onGiftcardTypesChanged}
            techniqueOnChange={this.onTechniquesChanged}
            technique={this.state.designData.technique}
          />

          <hr/>
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

export default AddVersionModal;
