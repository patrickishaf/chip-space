import React from "react";
import '../../../style/EventTile.css';
import keyIcon from '../../../assets/vectors/ic-key.svg';
import shovelIcon from '../../../assets/vectors/ic-shovel.svg';
import tagIcon from '../../../assets/vectors/ic-tag.svg';
import timerIcon from '../../../assets/vectors/ic-timer.svg';
import * as ActionTypes from '../../../utils/constants/activity-types';

function EventTile({ event }) {
    return (
        <div className="row">
            <img className="event-icon" src={getIconFromActionType(event)} alt="kind of event thhat this action contains" />
            <p className="event-description">{event}</p>
        </div>
    );
}

function getIconFromActionType(actionType) {
    switch (actionType) {
        case ActionTypes.RESERVE:
            return timerIcon;
        case ActionTypes.RENT:
            return keyIcon;
        case ActionTypes.LIST:
            return tagIcon;
        case ActionTypes.MINT:
            return shovelIcon;
        default:
            return timerIcon;
    }
}

export default EventTile;