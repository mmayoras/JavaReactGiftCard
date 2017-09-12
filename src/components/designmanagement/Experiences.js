import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

const Experiences = ({value, experienceChanged}) => {
  debugger;
  return (
    <div style={{marginBottom:"10px;"}}>
      <label>Select Experience(s):</label>
      <div className="mui--text-center">
        <CheckboxGroup
          name="experiences" value={value} onChange={experienceChanged}>
          <label><Checkbox value="instore"/><span style={{paddingRight:'15px'}}>&nbsp;In Store</span></label>
          <label><Checkbox value="3rdparty"/><span style={{paddingRight:'15px'}}>&nbsp;3rd Party</span></label>
          <label><Checkbox value="b2b"/><span style={{paddingRight:'15px'}}>&nbsp;B2B</span></label>
        </CheckboxGroup>
      </div>
    </div>
  );
};

export default Experiences;
