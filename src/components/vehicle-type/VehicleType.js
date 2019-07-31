import React, { Component } from "react";
import vansListData from '../../data/van-guide.json';
import { BrowserRouter as Route, Link } from "react-router-dom";
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
    }

    clicked(data, boolean, index) {
        this.setState({vanSelected:[data]});
        this.setState({showPopup:boolean});
    }
    
    renderType(e, boolean, index){
        const img = require(`../../assets/img/vans/${e.img}`);
        return (
            <li value={e} onClick={() => this.clicked(e, boolean, index)} key={index}>
                <div className="col-12">
                    <div className="display-flex">
                        <div className="col-2 image">
                            <img src={img}/>
                        </div>
                        <div className="col-10 info">
                            {e.title}
                        </div>
                    </div>
                </div>
            </li>
        );
    }

    render() {

        let showPopup = this.state.showPopup;

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
                </ul>
            </div>
        );
    }
}

export default VehicleType;
