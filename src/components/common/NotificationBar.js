import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';

export default ({autoCloseMilli, enableAutoClose, bgColor, icon, showNotification, msg, onCloseClicked}) => {
  //debugger
  let showComponent = {
    // visibility: 'hidden',
    display: 'none',
    backgroundColor: bgColor,
  };

  if (showNotification) {
    showComponent = {
      backgroundColor: bgColor,
      marginBottom: '0px',
    };
  }
  const contentStyle = {
    color: 'white',
    fontSize: '20px',
  };

  if (enableAutoClose) {
    let counter = 1000;
    let interval = setInterval(() => {
      counter += 1000;
      if (counter === autoCloseMilli) {
        clearInterval(interval);
        onCloseClicked();
      }
    }, autoCloseMilli);
  }

  return (
    <Panel style={showComponent}>
      <Container fluid={true}>
        <Row>
          <Col md="1">
            <div className="mui--text-left">
              <span className={icon} style={contentStyle}/>
            </div>
          </Col>
          <Col md="10">
            <div className="mui--text-left" style={contentStyle}>
              {msg}
            </div>
          </Col>
          <Col md="1">
            <div className="mui--text-right">
              <label onClick={onCloseClicked} style={contentStyle}>X</label>
            </div>
          </Col>
        </Row>
      </Container>
    </Panel>
  );
}
