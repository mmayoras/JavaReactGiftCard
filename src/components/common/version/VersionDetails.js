import React from 'react';

const VersionDetails = ({version}) => {
  return (
      <div style={{'marginLeft': '10px'}}>
        <div><strong>Experiences: </strong>{version.experiences[0]}</div>
        <div><strong>Regions: </strong>{version.regions[0]}</div>
        <div><strong>Projects: </strong>{version.projects[0]}</div>
        <div><strong>Code Number: </strong>{version.codeNumber}</div>
        <div><strong>Type: </strong>{version.selectedGiftcardType}</div>
        <div><strong>Techniques: </strong>{version.technique}</div>
      </div>
  );
};

export default VersionDetails;
