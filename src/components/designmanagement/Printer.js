import React, {PropTypes} from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import {Radio, RadioGroup} from 'react-radio-group';

const Printer = ({value, printerPrintedBeforeChanged}) => {
    return (
        <div style={{marginTop: '10px'}}>
            <p className="mui--text-center">Have the printers printed this art before?</p>
            <div className="mui--text-center">
                <RadioGroup name="printerPrintedBefore" selectedValue={value} onChange={printerPrintedBeforeChanged}>
                    <Row>
                        <Col md="6"><Radio value="yes" /> Yes</Col>
                        <Col md="6"><Radio value="no" /> No</Col>
                    </Row>
                </RadioGroup>
            </div>
        </div>
    );
};

export default Printer;
