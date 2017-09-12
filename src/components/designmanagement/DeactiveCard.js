import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import {Radio, RadioGroup} from 'react-radio-group';

const DeactiveCard = ({value, deactivateCardChanged}) => {
    return (
        <div>
            <p className="mui--text-center">Deactivate this card?</p>
            <div className="mui--text-center">
                <RadioGroup name="deactivateCard" selectedValue={value} onChange={deactivateCardChanged}>
                    <Row>
                        <Col md="6"><Radio value="yes" /> Yes</Col>
                        <Col md="6"><Radio value="no" /> No</Col>
                    </Row>
                </RadioGroup>
            </div>
        </div>
    );
};

export default DeactiveCard;
