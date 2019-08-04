import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import AddressContact from '../../components/address-contact/AddressContact';
import ValidationService from '../../utils/validation/Validation';
import ContactUsService from '../../services/contact-us/ContactUs';
import checked from '../../assets/img/icons/checked.png';
import './ContactUs.scss';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: {
                valid: undefined,
                focus: false,
                max: 50
            },
            subject: {
                valid: undefined,
                focus: false,
                min: 5,
                max: 100
            },
            message: {
                valid: undefined,
                focus: false,
                min: 5,
                max: 300
            },
            sent: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleBlur(event){
        const field = event.target.name;
        const value = event.target.value;
        this.setState({
            [field]: {
                valid: this.handleValidate(field, value),
                focus: false,
                min: this.state[field].min,
                max: this.state[field].max
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
            ContactUsService.contactus(data)
            .then((data) => {
                this.setState({sent: true});
            });
        }
    }

    handleBack() {
        this.setState({sent: false});
    }

    render() {
        return (
            <article>
                <section>
                    <div className="container contact-us">
                        <div className="col-12 text-align-center">
                            <h1>Contact Us</h1>
                        </div>
                        <div className="display-flex">
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 no-padding-left no-padding-right">
                                {this.state.sent === false ?
                                <div className="col-xl-12 col-12 margin-center">
                                    <p>
                                        If you have an enquiry please do contact us, we will get back to you as soon as possible.
                                    </p>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input type="email" 
                                                   className={"form-control " + (this.state.email.valid === false && this.state.email.focus === false  ? "input-error" : null)} 
                                                   id="email" 
                                                   name="email" 
                                                   onBlur={this.handleBlur} 
                                                   onFocus={this.handleFocus} 
                                                   placeholder="Email..." 
                                                   maxlength={this.state.email.max}/>
                                            {this.state.email.valid === false && this.state.email.focus === false  ? <div className="input-error-text">Please enter a valid Email address</div> : null}
                                        </div>
                                        <div className="form-group">
                                            <input type="text" 
                                                   className={"form-control " + (this.state.subject.valid === false && this.state.subject.focus === false  ? "input-error" : null)}
                                                   id="subject" name="subject" 
                                                   onBlur={this.handleBlur} 
                                                   onFocus={this.handleFocus} 
                                                   placeholder="Subject..."
                                                   maxlength={this.state.subject.max}/>
                                            {this.state.subject.valid === false && this.state.subject.focus === false  ? 
                                            <div className="input-error-text">
                                                Your Subject character length minimum {this.state.subject.min} and maximum {this.state.subject.max}
                                            </div> : null}
                                        </div>
                                        <div className="form-group">
                                            <textarea placeholder="Enquiry..." 
                                                      className={(this.state.message.valid === false && this.state.message.focus === false  ? "input-error" : null)}
                                                      id="message" 
                                                      onBlur={this.handleBlur} 
                                                      onFocus={this.handleFocus} 
                                                      name="message"
                                                      maxlength={this.state.message.max}></textarea>
                                            {this.state.message.valid === false && this.state.message.focus === false  ? 
                                            <div className="input-error-text">
                                                Your Enquiry character length minimum {this.state.message.min} and maximum {this.state.message.max}
                                            </div> : null}
                                        </div>
                                        <div className="form-group">
                                            <button className="blue">Submit</button>
                                        </div>
                                    </form>
                                </div> : null }
                                {this.state.sent === true ?
                                <div className="col-xl-12 col-12 margin-center text-align-center">
                                    <img src={checked} alt="Checked" className="checked"/>
                                    <h2>Thank you, your enquiry has been sent, we will get back to you.</h2>
                                    <button className="blue" onClick={this.handleBack}>Back to Enquiry</button>
                                </div> : null }
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 address-contact">
                                <AddressContact showTitle={false} />
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        );
    }
}

export default ContactUs;
