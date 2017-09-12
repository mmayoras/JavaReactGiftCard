import React, { Component } from "react";
import PropTypes from "prop-types";

import FilterInputs from "./FilterInputs";
import SearchBar from "./SearchBar";

class Filters extends Component {
  constructor(props) {
    super(props);

    const queriedCategories = [
      { value: "Birthday", label: "Birthday" },
      { value: "Evergreen", label: "Evergreen" }
    ];
    let categories = queriedCategories.map(year =>
      <option value={year.value}>
        {year.label}
      </option>
    );

    const queriedYears = [
      { value: "2017", label: "2017" },
      { value: "2018", label: "2018" }
    ];
    let years = queriedYears.map(project =>
      <option value={project.value}>
        {project.label}
      </option>
    );

    const queriedExperiences = [
      { value: "In Store", label: "in-store" },
      { value: "3rd Party", label: "3rd-party" },
      { value: "B2B", label: "B2B" }
    ];
    let experiences = queriedExperiences.map(experience =>
      <option value={experience.value}>
        {experience.label}
      </option>
    );

    this.state = {
      filterToggleBtnLabel: "Show Filters",
      isFilterBtnClicked: false,
      categories,
      years,
      experiences
    };
  }

  componentDidMount = () => {};

  onToggleFilter = () => {
    let clonedState = Object.assign({}, this.state);
    let currentFilterToggleLable = clonedState.filterToggleBtnLabel;
    let currentFilterClicked = clonedState.isFilterBtnClicked;

    let isFilterBtnClicked = true;
    let filterToggleBtnLabel = "";
    if (currentFilterClicked === false) {
      isFilterBtnClicked = true;
      filterToggleBtnLabel = "Hide Filters";
    } else {
      isFilterBtnClicked = false;
      filterToggleBtnLabel = "Show Filters";
    }
    console.info("toogle cliked label is: " + filterToggleBtnLabel);
    this.setState({
      filterToggleBtnLabel,
      isFilterBtnClicked
    });
  };

  render = () => {
    debugger;
    let showFilters = {
      display: "none"
    };
    if (this.state.isFilterBtnClicked) {
      showFilters = {
        display: ""
      };
    }
    debugger;
    return (
      <div>
        <SearchBar
          onSearchTermChange={this.props.onSearchTermChange}
          onToggleFilter={this.onToggleFilter}
          toggleFilterBtnLabel={this.state.filterToggleBtnLabel}
        />
        <div style={showFilters }>
          <FilterInputs
            onSearchTermChange={this.props.onSearchTermChange}
            years={this.state.years}
            categories={this.state.categories}
            experiences={this.state.experiences}
          />
        </div>
      </div>
    );
  };
}

export default Filters;
