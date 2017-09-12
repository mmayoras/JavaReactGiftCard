import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

const Regions = ({regionValues, regionChanged}) => {
    return (
        <div style={{marginBottom:"10px;"}}>
            <label>Select Region(s):</label>
            <div className="mui--text-center">
                <CheckboxGroup
                    name="regions" value={regionValues} onChange={regionChanged}>
                    <label><Checkbox value="us"/><span style={{paddingRight:'15px'}}>&nbsp;United States</span></label>
                    <label><Checkbox value="caEng"/><span style={{paddingRight:'15px'}}>&nbsp;Canada English</span></label>
                    <label><Checkbox value="caFr"/><span style={{paddingRight:'15px'}}>&nbsp;Canada French</span></label>
                </CheckboxGroup>
            </div>
        </div>
    );
};

export default Regions;
