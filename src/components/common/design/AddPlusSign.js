import React from 'react';
import Row from 'muicss/lib/react/row';

const AddPlusSign = ({onAddClick, hidden, parentDesign}) => {
  const card = {
    boxSizing: 'border-box',
    borderRadius: '1px',
    borderColor: 'lightGray',
    borderStyle: 'dashed',
    backgroundColor: '#fff',
    //boxShadow: '0 0 2px 0 rgba(0,0,0,.12),0 2px 2px 0 rgba(0,0,0,.24)',
    display: 'inline-block',
    minWidth: '280px',
    padding: '15px 20px 14px',
    margin: '10px',
    cursor: 'pointer'
  };

  const plusSign = {
    fontSize: '230px',
    color: '#f96302',
    paddingTop: '50px'
  };

  const addNewDesign = {
    color: '#f96302',
    fontSize: '20px',
    fontWeight: 'bold',
    paddingTop: '63px'
  };

  let display = {
    display: ''
  };

  if (hidden) {
    display = {
      display: 'none'
    };
  }

  return(
    <div style={display}>
      <div style={card} onClick={onAddClick}>
        <div style={{verticalAlign: 'center'}}>
          <div className="mui--text-center">
            <Row>
              <h3 style={plusSign}>+</h3>
            </Row>
            <Row>
              {
                parentDesign ? <h3 style={addNewDesign}>Add New Design</h3>
                  : <h3 style={addNewDesign}>Add New Version</h3>
              }
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AddPlusSign;
