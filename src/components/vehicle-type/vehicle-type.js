import React, { Component } from "react";
import vansListData from '../../data/van-guide.json';
import { BrowserRouter as Route, Link } from "react-router-dom";
import './vehicle-type.scss';

class VehicleType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            vanSelected: [vansListData[0]]
        };
        console.log(props.match)
    }
    clicked(data, boolean) {
        this.setState({vanSelected:[data]});
        this.setState({showPopup:boolean});
    }
    render() {

        let showPopup = this.state.showPopup;
        const van = this.state.vanSelected.map((e, index) => {
            const img = require(`../../assets/img/vans/${e.img}`);
            return (
                <li value={e} onClick={() => this.clicked(e, true)} key={index}>
                    {this.props.e}
                    <div className="col-12">
                        <div className="row">
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
        });

        const vans = vansListData.map((e, index) => {
            const img = require(`../../assets/img/vans/${e.img}`);
            return (
                <li value={e} onClick={() => this.clicked(e, false)} key={index}>
                    {this.props.e}
                    <div className="col-12">
                        <div className="row">
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
        });

        return (
            <div>
                <ul className="vehicle">
                    <ul className="popup" style={{ display: showPopup ? 'block' : 'none' }}>
                        {vans}
                    </ul>
                    <ul style={{ display: showPopup ? 'none' : 'block' }}>
                        {van}
                    </ul>
                </ul>
            </div>
        );
    }
}

export default VehicleType;
