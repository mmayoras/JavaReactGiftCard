import React, {PropTypes} from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const ModalCancelAndSubmit = ({overrideSubmitBtnLabel, overrideCancelBtnLabel, isCancelBtnVisible, isSubmitBtnVisible, onCancelClicked, onSubmitClicked}) => {
    let hideSubmitBtn = {'visibility': 'hidden'};
    if(isSubmitBtnVisible){
        hideSubmitBtn = {'visibility':'visible'};
    }

    let hideCancelBtn = {'visibility': 'hidden'};
    if(isCancelBtnVisible){
        hideCancelBtn = {'visibility':'visible'};
    }

    if(!overrideCancelBtnLabel){
        overrideCancelBtnLabel = 'Cancel';
    }

    if(!overrideSubmitBtnLabel){
        overrideSubmitBtnLabel = 'Submit';
    }

    return (
        <div>
            <Row>
                <Col md="6">
                    <div className="mui--text-left"> 
                        <button className="button md" style={hideCancelBtn} onClick={onCancelClicked}>{overrideCancelBtnLabel}</button>
                    </div>
                </Col>
                <Col md="6">
                    <div className="mui--text-right"> 
                        <button className="button primary md" style={hideSubmitBtn} onClick={onSubmitClicked}>{overrideSubmitBtnLabel}</button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ModalCancelAndSubmit;
