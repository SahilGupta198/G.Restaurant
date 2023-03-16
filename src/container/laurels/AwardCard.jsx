import React from 'react'
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
    return(
        <div className="app_laurels-awards-card">
        <img src={imgUrl} alt="award" />
        <div className="app_laurels-awards-card-content">
            <p className="p_cormorant" style={{ color: "#DCCA87" }}>{title}</p>
            <p className="p_cormorant" >{subtitle}</p>
        </div>
    </div>
    )
};

export default AwardCard;
