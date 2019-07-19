import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import VehicleType from '../../components/vehicle-type/vehicle-type';
import "react-datepicker/dist/react-datepicker.css";
import './quote-form.scss';

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
                        <div className="row">
                            <div className="col-xl-12 text-align-center">
                                <h1>Get a Quote</h1>
                                <p>Same day pallet delivery prices start from £35</p>
                            </div>
                            <div className="col-xl-12">
                                <div className="col-xl-8 col-12 margin-center">
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="email" placeholder="Email..." />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="name" placeholder="Name..." />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="number" placeholder="Contact Number..." />
                                        </div>
                                        <div className="form-group">
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <label>Pick Up From:</label>
                                                    </div>
                                                    <div className="col-7">
                                                        <input type="text" className="form-control" id="number" placeholder="Post Code..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <label>Pick Up To:</label>
                                                    </div>
                                                    <div className="col-7">
                                                        <input type="text" className="form-control" id="number" placeholder="Post Code..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <label>Date & Time:</label>
                                                    </div>
                                                    <div className="col-7">
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
                                        </div>
                                        <div className="form-group">
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-5">
                                                        Vehicle Type
                                                    </div>
                                                    <div className="col-7">
                                                        <VehicleType/>
                                                    </div>
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
