import React from "react";
import Regions from "./Regions";
import Projects from "./Projects";
import Input from "../common/Input";
import DropDownInput from "../common/DropDownInput";

const DefaultInputs = ({
  isB2Bor3rdParty,
  regionValues,
  regionChanged,
  designName,
  designNameOnChange,
  errorDesignName,
  codeNumber,
  codeNumberOnChange,
  errorCodeNumber,
  years,
  selectedYear,
  yearChanged,
  giftcardTypes,
  selectedGiftcardType,
  giftcardTypesChanged,
  technique,
  techniqueOnChange,
  categoryTypes,
  selectedCategoryType,
  categoryChanged
}) => {
  return (
    <div>
      <Regions regionValues={regionValues} regionChanged={regionChanged} />
      <Input style={{marginBottom:"10px;"}}
        inputLabel={"Design Name"}
        placeholder={"Enter Design Name"}
        onChange={designNameOnChange}
        value={designName}
        errorTxt={errorDesignName}
      />

      {isB2Bor3rdParty === false
        ? <div>
            <DropDownInput
              dataList={years}
              selectedItem={selectedYear}
              onChange={yearChanged}
              id={"designYearDropDownId"}
              inputLabel={"Design Year"}
              placeholder={"Select Year"}
            />
          </div>
        : ""}

      <Input
        inputLabel={"Code Number"}
        placeholder={"Enter Code Number"}
        onChange={codeNumberOnChange}
        value={codeNumber}
        errorTxt={errorCodeNumber}
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
            <Input
              inputLabel={"Does this design have any special techniques?"}
              placeholder={"Enter Special Techniques"}
              onChange={techniqueOnChange}
              value={technique}
            />
          </div>
        : ""}
      <DropDownInput
        dataList={categoryTypes}
        selectedItem={selectedCategoryType}
        onChange={categoryChanged}
        id={"categoryDropDownId"}
        inputLabel={"General Category"}
        placeholder={"Select General Category"}
      />
    </div>
  );
};

export default DefaultInputs;
