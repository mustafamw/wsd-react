import React, { Component } from "react";
import vansListData from '../../data/van-guide.json';
import arrowUp from '../../assets/img/icons/arrow-up.png';
import arrowDown from '../../assets/img/icons/arrow-down.png';
import './VehicleType.scss';

class VehicleType extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            vanSelected: [vansListData[0]]
        };
        var urlParams = new URLSearchParams(window.location.search);
        const index = urlParams.get("index");
        if(index && vansListData[index]){
            this.state.vanSelected = [vansListData[index]];
        }
        this.onVehicleChange(this.state.vanSelected);
    }

    clicked(data, boolean, index) {
        this.setState({showPopup:boolean});
        this.setState({vanSelected:[data]}, () => {
            this.onVehicleChange(this.state.vanSelected);
        });
    }
    
    renderType(e, boolean, index){
        const img = require(`../../assets/img/vans/${e.img}`);
        return (
            <li value={e} onMouseDown={() => this.clicked(e, boolean, index)} key={index}>
                <div className="col-12 no-padding-left no-padding-right">
                    <div className="display-flex">
                        <div className="col-2 image">
                            <img src={img} alt={e.title}/>
                        </div>
                        <div className="col-10 info">
                            {e.title}
                        </div>
                    </div>
                </div>
            </li>
        );
    }

    onVehicleChange(data) {
        this.props.onVehicleChange(data);
    }

    render() {

        const showPopup = this.state.showPopup;

        const van = this.state.vanSelected.map((e, index) => {
            return this.renderType(e, true, index);
            
        });

        const vans = vansListData.map((e, index) => {
            return this.renderType(e, false, index);
        });

        return (
            <div>
                <ul className="vehicle">
                    <ul className="popup" style={{ display: showPopup ? 'block' : 'none' }}>
                        {vans}
                    </ul>
                    <ul className="non-popup">
                        {van}
                    </ul>
                    <img src={showPopup ? arrowUp : arrowDown} 
                         alt={"arrow " + showPopup ? "up" : "down" } 
                         className={"arrow " + (showPopup ? "up" : "down") }/>
                </ul>
            </div>
        );
    }
}

export default VehicleType;
