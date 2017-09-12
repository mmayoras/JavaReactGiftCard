import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

const Projects = ({projectValues, projectChanged}) => {
  return (
    <div>
      <label>Select Project(s):</label>
      <div className="mui--text-center">
        <CheckboxGroup
          name="projects" value={projectValues} onChange={projectChanged}>
          <label><Checkbox value="holiday"/><span style={{paddingRight:'15px'}}>&nbsp;Holiday</span></label>
          <label><Checkbox value="postHoliday"/><span style={{paddingRight:'15px'}}>&nbsp;Post-Holiday</span></label>
          <label><Checkbox value="fatherDay"/><span style={{paddingRight:'15px'}}>&nbsp;Father's Day</span></label>
        </CheckboxGroup>
      </div>
    </div>
  );
};

export default Projects;
