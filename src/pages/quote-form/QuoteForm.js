import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";
import VehicleType from '../../components/vehicle-type/VehicleType';
import QuoteService from '../../services/quote/Quote';
import ValidationService from '../../utils/validation/Validation';
import sent from '../../assets/img/icons/sent.png';
import "react-datepicker/dist/react-datepicker.css";
import './QuoteForm.scss';
const moment = require('moment');

class QuoteForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: {
                valid: undefined,
                focus: false,
                max: 50
            },
            fullname: {
                valid: undefined,
                focus: false,
                min: 5,
                max: 50
            },
            contactNo: {
                valid: undefined,
                focus: false,
                min: 5,
                max: 20
            },
            pickupFrom: {
                valid: undefined,
                focus: false,
                min: 5,
                max: 10
            },
            pickupTo: {
                valid: undefined,
                focus: false,
                min: 5,
                max: 10
            },
            pickupDatetime: {
                valid: true,
                date: new Date()
            },
            vehicleType: {
                valid: true,
                value: ''
            },
            sent: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.onVehicleChange = this.onVehicleChange.bind(this);
    }

    handleBlur(event){
        const field = event.target.name;
        const value = event.target.value;
        this.setState({
            [field]: {
                valid: this.handleValidate(field, value),
                focus: false,
                min: this.state[field].min,
                max: this.state[field].max,
                value: this.state[field].value, 
                date: this.state[field].date
            }
        });
    }

    handleFocus(event){
        const field = event.target.name;
        this.setState({
            [field]: {
                focus: true,
                valid: this.state[field].valid,
                min: this.state[field].min,
                max: this.state[field].max
            }
        });
    }

    handleChange(date) {
        this.setState({
            pickupDatetime: {
                date: date,
                valid: true
            }
        });
    }

    handleValidate(field, value){
        let valid;
        if(field === 'email'){
            valid = ValidationService.email(value);
        }else{
            valid = ValidationService.string(value, this.state[field].min, this.state[field].max);
        }
        return valid;
    }

    handleValidateAllField(data){
        let fieldsValid = true;
        Object.keys(this.state).forEach((item) => {
            if(item !== 'sent'){
                const value = data.get(item);
                const valid = this.state[item].valid;
                if(!valid || valid === false){
                    fieldsValid = false;
                }
                this.handleBlur({
                    target: {
                        name: item,
                        value: value
                    }
                });
            }
        });
        return fieldsValid;
    }


    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const valid =  this.handleValidateAllField(data);
        if(valid){
            QuoteService.quote(data)
            .then((data) => {
                this.setState({sent: true});
            });
        }
    }

    handleBack() {
        this.setState({sent: false});
    }

    onVehicleChange(vehicle){
        this.setState({
            vehicleType: {
                value: vehicle[0].title,
                valid: true
            }
        })
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
                                    {this.state.sent === false ? <p>Same day pallet delivery prices start from £35</p> : null }
                                </div>
                                <div className="col-xl-8 row col-12 margin-center no-padding-left no-padding-right">
                                    {this.state.sent === false ? 
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <div className="display-flex">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                                    Email Address:
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                                                    <input type="email" 
                                                        className={"form-control " + (this.state.email.valid === false && this.state.email.focus === false  ? "input-error" : null)}  
                                                        id="email"
                                                        name="email" 
                                                        onBlur={this.handleBlur} 
                                                        onFocus={this.handleFocus} 
                                                        placeholder="Email..."
                                                        maxlength={this.state.email.max} />
                                                    {this.state.email.valid === false && this.state.email.focus === false  ? <div className="input-error-text">Please enter a valid Email address</div> : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="display-flex">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                                    Full Name:
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                                                    <input type="text" 
                                                        className={"form-control " + (this.state.fullname.valid === false && this.state.fullname.focus === false  ? "input-error" : null)}  
                                                        id="fullname" 
                                                        name="fullname"
                                                        onBlur={this.handleBlur} 
                                                        onFocus={this.handleFocus}
                                                        minLength={this.state.fullname.min}
                                                        maxlength={this.state.fullname.max} 
                                                        placeholder="Full Name..." />
                                                    {this.state.fullname.valid === false && this.state.fullname.focus === false  ? <div className="input-error-text">Please enter your Full name</div> : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="display-flex">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                                    Contact Number:
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                                                    <input type="text" 
                                                        className={"form-control " + (this.state.contactNo.valid === false && this.state.contactNo.focus === false  ? "input-error" : null)}  
                                                        id="contactNo"
                                                        name="contactNo" 
                                                        onBlur={this.handleBlur} 
                                                        onFocus={this.handleFocus}
                                                        minLength={this.state.contactNo.min}
                                                        maxlength={this.state.contactNo.max} 
                                                        placeholder="Contact No..." />
                                                    {this.state.contactNo.valid === false && this.state.contactNo.focus === false  ? <div className="input-error-text">Please enter a valid Contact No</div> : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="display-flex">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                                    <label>Pick Up From:</label>
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                                                    <input type="text" 
                                                        className={"form-control " + (this.state.pickupFrom.valid === false && this.state.pickupFrom.focus === false  ? "input-error" : null)}  
                                                        id="pickupFrom" 
                                                        name="pickupFrom"
                                                        onBlur={this.handleBlur} 
                                                        onFocus={this.handleFocus}
                                                        minLength={this.state.pickupFrom.min}
                                                        maxlength={this.state.pickupFrom.max} 
                                                        placeholder="Post Code..." />
                                                    {this.state.pickupFrom.valid === false && this.state.pickupFrom.focus === false  ? <div className="input-error-text">Please enter a valid Post Code</div> : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="display-flex">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                                    <label>Pick Up To:</label>
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                                                    <input type="text" 
                                                        className={"form-control " + (this.state.pickupTo.valid === false && this.state.pickupTo.focus === false  ? "input-error" : null)}  
                                                        id="pickupTo" 
                                                        name="pickupTo"
                                                        onBlur={this.handleBlur} 
                                                        onFocus={this.handleFocus}
                                                        minLength={this.state.pickupTo.min}
                                                        maxlength={this.state.pickupTo.max} 
                                                        placeholder="Post Code..." />
                                                    {this.state.pickupTo.valid === false && this.state.pickupTo.focus === false  ? <div className="input-error-text">Please enter a valid Post Code</div> : null}
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
                                                        selected={this.state.pickupDatetime.date}
                                                        onChange={this.handleChange}
                                                        minDate={subDays(new Date(), 0)}
                                                        showTimeSelect
                                                        timeFormat="HH:mm"
                                                        timeIntervals={30}
                                                        dateFormat="MMMM d, yyyy h:mm aa"
                                                        timeCaption="time"
                                                    />
                                                    <input type="text"
                                                        id="pickupDatetime"
                                                        name="pickupDatetime"
                                                        value={moment(this.state.pickupDatetime.date).format('YYYY-MM-DDTHH:mm')}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="display-flex">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                                    Vehicle Type
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                                                    <VehicleType onVehicleChange={this.onVehicleChange}/>
                                                </div>
                                            </div>
                                            <input type="hidden"
                                                id="vehicleType"
                                                name="vehicleType"
                                                value={this.state.vehicleType.value}/>
                                        </div>
                                        <div className="form-group">
                                            <div className="display-flex">
                                                <div className="col-12">
                                                    <button className="blue">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form> : null }
                                    {this.state.sent === true ?
                                    <div className="col-xl-12 col-12 margin-center text-align-center sent">
                                        <img src={sent} alt="Sent"/>
                                        <h2>Thank you for choosing {this.state.vehicleType.value}, your quote form has been sent and you will recieve an Email 
                                        confirmation shortly, we will get back to you.</h2>
                                        <button className="blue" onClick={this.handleBack}>Back to Quote</button>
                                    </div> : null }
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
