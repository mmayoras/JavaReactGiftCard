import React from "react";
import Input from "../../common/Input";
import DropDownInput from "../../common/DropDownInput";

import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";

const FilterInputs = ({ onSearchTermChange, years, categories, experiences }) => {
  return (
    <div className="mui--text-center">
      <Row>
        <Col md="6">
          <Row>
            <Col md="3">
              <div style={{ marginTop: "35px", marginLeft: "10px" }}>
                <label>Design Name</label>
              </div>
            </Col>
            <Col md="9">
              <div style={{ width: "80%" }}>
                <Input
                  placeholder={"Enter Name"}
                  onChange={null}
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="3">
              <div style={{ marginTop: "35px", marginLeft: "10px" }}>
                <label>Code Number</label>
              </div>
            </Col>
            <Col md="9">
              <div style={{ width: "80%" }}>
                <Input
                  placeholder={"Enter Code"}
                  onChange={null}
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="3">
              <div style={{ marginTop: "35px", marginLeft: "10px" }}>
                <label>Technique</label>
              </div>
            </Col>
            <Col md="9">
              <div style={{ width: "80%" }}>
                <Input
                  placeholder={"Enter Technique"}
                  onChange={null}
                />
              </div>
            </Col>
          </Row>
        </Col>

        <Col md="6">
          <Row>
            <Col md="3">
              <div style={{ marginTop: "35px", marginLeft: "10px" }}>
                <label>Category</label>
              </div>
            </Col>
            <Col md="9">
              <div style={{ width: "80%" }}>
                <DropDownInput
                  dataList={categories}
                  selectedItem={null}
                  onChange={null}
                  id={"filterCategoryDropDownId"}
                  placeholder={"Select Category"}
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="3">
              <div style={{ marginTop: "35px", marginLeft: "10px" }}>
                <label>Year</label>
              </div>
            </Col>
            <Col md="9">
              <div style={{ width: "80%" }}>
                <DropDownInput
                  dataList={years}
                  selectedItem={null}
                  onChange={null}
                  id={"filterProjectDropDownId"}
                  placeholder={"Select Year"}
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="3">
              <div style={{ marginTop: "35px", marginLeft: "10px" }}>
                <label>Experience</label>
              </div>
            </Col>
            <Col md="9">
              <div style={{ width: "80%" }}>
                <DropDownInput
                  dataList={experiences}
                  selectedItem={null}
                  onChange={null}
                  id={"filterExperienceDropDownId"}
                  placeholder={"Select Experience"}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <div className="mui--text-center">
          <button className="button primary md" onClick={null}>
            Apply Filters
          </button>
        </div>
      </Row>
    </div>
  );
};

export default FilterInputs;
