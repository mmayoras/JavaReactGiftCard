import React, {Component} from "react";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import Experiences from "../Experiences";
import Image from "../Image";
import Carrier from "../Carrier";
import DesignInputs from "../DesignInputs";

import ModalCancelAndSubmit from "../../common/ModalCancelAndSubmit";
import {
  CUSTOM_CONTENT_STYLE,
  CENTER_HEADER_STYLE
} from "../../../constants/modalCustomStyle";
import {CONFIG} from "../../../envconfig/globals";

class AddDesignModal extends Component {
  constructor(props, context) {
    super(props, context);
    //queried from backend or hard code?
    const queriedYears = [
      {value: "1017", label: "2017"},
      {value: "2018", label: "2018"}
    ];
    const queriedGiftcardTypes = [
      {value: "25/peg", label: "25/peg"},
      {value: "10/peg", label: "10/peg"},
      {value: "?/peg", label: "?/peg"}
    ];

    const generalCategories = [
      {value: "birthday", label: "Birthday"},
      {value: "evergreen", label: "Evergreen"},
      {value: "hanukkah", label: "Hanukkah"},
      {value: "marriage", label: "Marriage"},
      {value: "winter", label: "Winter"}
    ];

    let years = queriedYears.map(region =>
      <option value={region.value}>
        {region.label}
      </option>
    );

    let categories = generalCategories.map(category =>
      <option value={category.value}>
        {category.label}
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
      categories: [categories],
      giftcardTypes: [giftcardTypes],
      selectedImageName: "",
      selectedCarrierImageName: "",
      errorDesignName: "",
      errorCodeNumber: "",
      designData: {
        experiences: [],
        regions: [],
        selectedYear: "",
        selectedGiftcardType: "",
        designName: "",
        codeNumber: "",
        technique: "",
        selectedCategory: "",
        cardImage: {},
        carrierImage: {}
      }
    };
  }

  validate = () => {
    let isError = false;
    let clonedState = Object.assign({}, this.state);
    if (!clonedState.designData.designName.length > 3) {
      clonedState.errorDesignName = "Please enter a valid Design Name";
      isError = true;
    }
    if (!clonedState.designData.codeNumber.length > 0) {
      clonedState.errorCodeNumber = "Please enter a valid Code Number";
      isError = true;
    }
    if (isError) {
      let errorDesignName = clonedState.errorDesignName;
      const errorCodeNumber = clonedState.errorCodeNumber;
      this.setState({errorCodeNumber, errorDesignName});
    }
    return isError;
  };

  onAddCardDesign = () => {
    debugger;
    //TODO: only for mocking since Tandem fetch all designs is not ready
    sessionStorage.setItem("newDesign", this.state.designData);
    //
    if (!this.validate()) {
      const saveCardDesignURL = CONFIG.baseURL;
      let cardDesignFormData = new FormData();
      let image = this.state.designData.cardImage;
      let carrierImage = this.state.designData.carrierImage;
      cardDesignFormData.append("cardImage[]", image);
      cardDesignFormData.append("carrierImage[]", carrierImage);
      cardDesignFormData.append(
        "designData",
        JSON.stringify(this.state.designData)
      );

      fetch(saveCardDesignURL + "/api/saveCardDesign", {
        method: "POST",
        body: cardDesignFormData
      })
      .then(response => response.json())
      .then(res => {
        if (res.serviceResponseStatus.success) {
          let designName = this.state.designData.designName;
          this.handleClose();
          this.props.onModalClose();
          this.props.loadAllDesigns(designName, true);
        } else {
          //close modal and display error notification?
          this.handleClose();
          this.props.loadAllDesigns(res.serviceResponseStatus.message, false);
        }
      })
      .catch(error => {
        debugger;
        console.error("error: " + error);
        this.handleClose();
        this.props.loadAllDesigns(error, false);
      });
    }
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

  onDesignNameChange = event => {
    let clonedState = Object.assign({}, this.state);
    clonedState.designData.designName = event.target.value;
    if (!clonedState.designData.designName.length > 0) {
      clonedState.errorDesignName = "Please enter a valid Design Name";
    } else {
      clonedState.errorDesignName = "";
    }
    let designData = clonedState.designData;
    let errorDesignName = clonedState.errorDesignName;
    this.setState({designData, errorDesignName});
  };

  onCodeNumberChange = event => {
    let clonedState = Object.assign({}, this.state);
    clonedState.designData.codeNumber = event.target.value;
    if (!clonedState.designData.designName.length > 0) {
      clonedState.errorCodeNumber = "Please enter a valid Code Number";
    } else {
      clonedState.errorCodeNumber = "";
    }
    let designData = clonedState.designData;
    const errorCodeNumber = clonedState.errorCodeNumber;
    this.setState({designData, errorCodeNumber});
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

  onCategoryChanged = event => {
    let clonedState = Object.assign({}, this.state);
    let designData = clonedState.designData;
    designData.selectedCategory = event.target.value;
    this.setState({designData});
  };

  onGiftcardTypesChanged = event => {
    let clonedState = Object.assign({}, this.state);
    let designData = clonedState.designData;
    designData.selectedGiftcardType = event.target.value;
    this.setState({designData});
  };

  handleClose = () => {
    debugger;
    let clonedState = Object.assign({}, this.state);
    let designData = clonedState.designData;
    designData.experiences = [];
    this.setState({
      designData
    });
    this.props.onModalClose();
  };

  render = () => {
    debugger;
    const shouldSubmitBtnVisible =
      this.state.designData.experiences.length !== 0;
    const isExperiencesEmpty = this.state.designData.experiences.length === 0;
    let hideRegionsPrinterDeactiveCardUI = {display: "none"};
    if (!isExperiencesEmpty) {
      hideRegionsPrinterDeactiveCardUI = {display: ""};
    }
    return (
      <div>
        <Dialog
          title="Add Design Details"
          actions={
            <ModalCancelAndSubmit
              overrideSubmitBtnLabel={"Save Design"}
              onCancelClicked={this.handleClose}
              isSubmitBtnVisible={shouldSubmitBtnVisible}
              isCancelBtnVisible={true}
              onSubmitClicked={this.onAddCardDesign}
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
          <div style={hideRegionsPrinterDeactiveCardUI}>
            <DesignInputs
              regionValues={this.state.designData.regions}
              regionChanged={this.onRegionsChanged}
              codeNumberOnChange={this.onCodeNumberChange}
              codeNumber={this.state.designData.codeNumber}
              errorCodeNumber={this.state.errorCodeNumber}
              designName={this.state.designData.designName}
              designNameOnChange={this.onDesignNameChange}
              errorDesignName={this.state.errorDesignName}
              isB2Bor3rdParty={this.state.isB2Bor3rdParty}
              years={this.state.years}
              selectedYear={this.state.designData.selectedYear}
              yearChanged={this.onYearChanged}
              giftcardTypes={this.state.giftcardTypes}
              selectedGiftcardType={this.state.designData.selectedGiftcardType}
              giftcardTypesChanged={this.onGiftcardTypesChanged}
              techniqueOnChange={this.onTechniquesChanged}
              technique={this.state.designData.technique}
              categoryTypes={this.state.categories}
              selectedCategoryType={this.state.designData.selectedCategory}
              categoryChanged={this.onCategoryChanged}
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
          </div>
        </Dialog>
      </div>
    );
  };
}

AddDesignModal.contextTypes = {
  onModalClose: PropTypes.func
};

export default AddDesignModal;
