import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import VehicleType from '../../components/vehicle-type/VehicleType';
import "react-datepicker/dist/react-datepicker.css";
import './QuoteForm.scss';

class QuoteForm extends Component {

    constructor(props){
        super(props);
        this.state = {
          startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
          startDate: date
        });
    }
    

    render() {
        return (
            <article>
                <section>
                    <div className="container">
                        <div className="display-flex">
                            <div className="col-12 no-padding-left no-padding-right">
                                <div className="col-xl-12 text-align-center">
                                    <h1>Get a Quote</h1>
                                    <p>Same day pallet delivery prices start from £35</p>
                                </div>
                                <div className="col-xl-8 row col-12 margin-center no-padding-left no-padding-right">
                                    <form>
                                        <div className="form-group">
                                            <div className="display-flex">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                                    Email Address:
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                                                    <input type="email" className="form-control" id="email" placeholder="Email..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="display-flex">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                                    Full Name:
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                                                    <input type="text" className="form-control" id="name" placeholder="Full Name..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="display-flex">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                                    Contact Number:
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                                                    <input type="text" className="form-control" id="contact" placeholder="Telephone No..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="display-flex">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                                    <label>Pick Up From:</label>
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                                                    <input type="text" className="form-control" id="number" placeholder="Post Code..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="display-flex">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                                    <label>Pick Up To:</label>
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                                                    <input type="text" className="form-control" id="number" placeholder="Post Code..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="display-flex">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                                    <label>Date & Time:</label>
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                                                    <DatePicker
                                                        selected={this.state.startDate}
                                                        onChange={this.handleChange}
                                                        showTimeSelect
                                                        timeFormat="HH:mm"
                                                        timeIntervals={30}
                                                        dateFormat="MMMM d, yyyy h:mm aa"
                                                        timeCaption="time"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="display-flex">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                                    Vehicle Type
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12 no-padding-left">
                                                    <VehicleType/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="display-flex">
                                                <div className="col-12">
                                                    <button className="blue">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        );
    }
}

export default QuoteForm;
