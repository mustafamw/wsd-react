import React, { Component } from 'react';
import Slider from 'react-slider-light';
import 'react-slider-light/lib/index.css';
import './VerticalSlider.scss';
import servicesSLider from '../../data/services-slider.json';
import ModalImage from "react-modal-image";

export default class Wrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sliderToShow: 3,
            dots: 2,
            isArrows: false,
            vertical: true,
            delay: 1500
        };
    }

    render() {

        const slider = servicesSLider.map((e, index)=>{
            const img = require(`../../assets/img/services/${e.img}`);
            return (
                <div key={index}>
                    <div className="image">
                        <ModalImage
                            small={img}
                            large={img}
                            alt={e.name}
                        />
                    </div>
                    <div className="title">
                        {e.name}
                    </div>
                </div>
            );
        });

        return (
        <Slider {...this.state}>
            {slider}
        </Slider>
        )
    }
}