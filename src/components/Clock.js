import React, { Component } from "react";
import Clock from 'react-live-clock';
import "./Clock.css"

class Time extends Component{
    render () {
        return (
            <div className="Time">
                <div className="time">
                <Clock format={'hh:mm:ss A'} ticking={true} timezone={'Asia/Jakarta'} />
                </div>
            </div>
        )
    }
}
 

export default Time;
