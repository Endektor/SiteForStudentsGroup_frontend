import React from 'react';
import Style from './Event.module.css';

const Event = (props) => {

    return (
        <div className={Style.Event}>
            <div className={Style.Color} style={{
                backgroundColor: props.color,
                boxShadow: '0 0 10px ' + props.color,
            }}> </div>
            <div className={Style.Time}>{props.time}</div>
            <div className={Style.Title}>{props.title}</div>
        </div>
    );
};

export default Event;