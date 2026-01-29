import React from 'react';
import '../../sass/components/_constructionSticker.scss';

const ConstructionSticker = (props) => {

return (
 <div className="sticker">
            <div className="inner">
                <div className="upper">
                    <div className="caution">Caution</div>
                    <div className="bars">
                        <div className="blackStripe"></div>
                        <div className="blackStripe"></div>
                        <div className="blackStripe"></div>
                        <div className="blackStripe"></div>
                        <div className="blackStripe"></div>
                        <div className="blackStripe"></div>
                        <div className="blackStripe"></div>
                        <div className="blackStripe"></div>
                        <div className="blackStripe"></div>
                        <div className="blackStripe"></div>
                        <div className="blackStripe"></div>
                        <div className="blackStripe"></div>
                    </div>
                </div>
                <div className="lower">
                    <div className="labelDetail">Area Under Construction</div>
                </div>
            </div>
        </div>
        )


};

export default ConstructionSticker;

