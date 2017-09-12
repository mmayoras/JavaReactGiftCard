import React from "react";
import Regions from "./Regions";
import Projects from "./Projects";
import Input from "../common/Input";
import InputDisabled from "../common/InputDisabled";
import DropDownInput from "../common/DropDownInput";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";

const VersionInputs = ({
  isB2Bor3rdParty,
  regionValues,
  regionChanged,
  designName,
  versionName,
  versionNameOnChange,
  codeNumber,
  codeNumberOnChange,
  years,
  selectedYear,
  yearChanged,
  giftcardTypes,
  selectedGiftcardType,
  giftcardTypesChanged,
  technique,
  techniqueOnChange
}) => {
  return (
    <div>
      <Regions regionValues={regionValues} regionChanged={regionChanged} />
      <InputDisabled
        inputLabel={"Design Name"}
        placeholder={"Enter Design Name"}
        value={designName}
      />

      {isB2Bor3rdParty === false
        ? <div>
            <Row>
              <Col md="2" />
              <Col md="10">
                <Input
                  inputLabel={"Version Name"}
                  placeholder={"Enter Version Name"}
                  onChange={versionNameOnChange}
                  value={versionName}
                />
                <DropDownInput
                  dataList={years}
                  selectedItem={selectedYear}
                  onChange={yearChanged}
                  id={"designYearDropDownId"}
                  inputLabel={"Version Year"}
                  placeholder={"Select Year"}
                />
              </Col>
            </Row>
          </div>
        : ""}
      <Input
        inputLabel={"Code Number"}
        placeholder={"Enter Code Number"}
        onChange={codeNumberOnChange}
        value={codeNumber}
      />
      {isB2Bor3rdParty === false
        ? <div>
            <DropDownInput
              dataList={giftcardTypes}
              selectedItem={selectedGiftcardType}
              onChange={giftcardTypesChanged}
              id={"gcTypeDropDownId"}
              inputLabel={"How many will fit on a peg?"}
              placeholder={"Select Gift Card Size"}
            />
          </div>
        : ""}
    </div>
  );
};

export default VersionInputs;
