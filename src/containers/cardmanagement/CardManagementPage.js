import React from 'react';
import CardManagementInfo from '../../components/cardmanagement/CardManagementInfo';

class CardManagementPage extends React.Component {
    render = () => {
        let message = 'a message passed down from Home Page';
        return (
            <div>
                <div className="home-message flex-column">
                    <label className="home-title">Gift card Consignment Managing UI</label>
                    <CardManagementInfo msg={message}/>
                </div>
            </div>
        );
    }
}

export default CardManagementPage;
