import React from "react";
import '../../../style/ClickableImage.css';

function ClickableImage({ imageUri, onClicked }) {
    return <img src={imageUri} alt="click" onClick={onClicked} className="clickable-img" />
}

export default ClickableImage;