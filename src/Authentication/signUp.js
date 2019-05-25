import React from 'react';
import LoginPage from './loginpage.js'
import { Dropdown, Icon } from 'semantic-ui-react';
import _ from 'lodash';
import { LargeInput, H2, MediumPrimaryButton, P5, H6, P3 } from '../Generics/Styles';

const cityOptions = [
    { key: 'af', value: 'Chennai', flag: 'af', text: 'Chennai' },
    { key: 'ax', value: 'Coimbatore', flag: 'ax', text: 'Coimbatore' },
    { key: 'al', value: 'Theni', flag: 'al', text: 'Theni' },
    { key: 'dz', value: 'madurai', flag: 'dz', text: 'madurai' },
]

const countryOptions = [
    { key: '1', value: 'India', flag: 'af', text: 'India' },
    { key: '2', value: 'New Zealand', flag: 'ax', text: 'New Zealand' },
    { key: '3', value: 'pakistan', flag: 'al', text: 'pakistan' },
    { key: '4', value: 'bangladesh', flag: 'dz', text: 'bangladesh' },
]
const getDay = (number, prefix = 'Choice ') =>
    _.times(number, index => ({
        key: index,
        text: `${index + 1}`,
        value: index,
    }))
const getMonth = (number, prefix = 'Choice ') =>
    _.times(number, index => ({
        key: index,
        text: `${index + 1}`,
        value: index,
    }))

const getYear = (number, prefix = '2019 ') =>
    _.times(number, index => ({
        key: index,
        text: `${prefix - index}`,
        value: `${prefix - index}`,
    }))


class Register extends React.Component {

    //set the state values

    state = {
        change: true,
        fields: {},
        changeImage: true,
        changeImage2: true,
        changeImage3: true,
        genderValue: '',
        cityValue: '',
        countryValue: '',
        Date: 'Day'

    }

    //get the all input values

    getValue = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value

        this.setState({
            fields
        })
    }

    gender = (e) => {


        if (e === 'male') {
            this.setState({
                changeImage: false,
                changeImage2: true,
                changeImage3: true,
                genderValue: e
            })
        }
        if (e === 'female') {
            this.setState({
                changeImage: true,
                changeImage2: false,
                changeImage3: true,
                genderValue: e
            })
        }
        if (e === 'other') {
            this.setState({
                changeImage: true,
                changeImage2: true,
                changeImage3: false,
                genderValue: e
            })
        }
    }

    //Form validation Condition

    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }

        if (typeof fields["username"] !== "undefined") {
            if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobileno"] !== "undefined") {
            if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobileno"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });
        console.log(this.state.errors)
        return formIsValid;
    }

    //Form Submission

    submit = (e) => {
        let fields = [];
        let gender = this.state.genderValue;
        fields.push(gender);

        this.setState({
            fields
        })

        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["emailid"] = "";
            fields["mobileno"] = "";
            fields["password"] = "";
            this.setState({ fields: fields }, () => console.log(this.state.fields));
            alert("Form submitted");
        }
    }

    register = () => {
        this.setState({
            change: false
        })
    }

    render() {
        return (

            // SignUp page creation

            <React.Fragment>
                {this.state.change ? (
                    <div className="Register">

                        {/* heading */}

                        <H2 className="heading">Register</H2>

                        {/* Form creation */}

                        {/* <form onSubmit={this.submit}> */}
                        <LargeInput type="text"
                            autoComplete="off"
                            className="email"
                            value={this.state.fields.username}
                            ref={input => this.userName = input}
                            onChange={this.getValue}
                            name="username"
                            placeholder="Name"
                        />
                        <LargeInput type="text"
                            autoComplete="off"
                            className="email"
                            value={this.state.fields.emailid}
                            ref={input => this.email = input}
                            onChange={this.getValue}
                            placeholder="Email"
                            name="emailid"
                        />
                        <LargeInput type="password"
                            autoComplete="off"
                            className="password"
                            value={this.state.fields.password}
                            ref={input => this.password = input}
                            onChange={this.getValue}
                            placeholder="Password"
                            name="password"
                        />
                        <LargeInput type="text"
                            autoComplete="off"
                            className="email"
                            value={this.state.fields.mobileno}
                            ref={input => this.mobile = input}
                            onChange={this.getValue}
                            maxLength="10"
                            minLength="10"
                            placeholder="Mobile No"
                            name="mobileno"
                        />
                        <P3 color="gray" className="DOBPara">
                            What is your birthdate? 
                        </P3>
                        {/* Date Of Birth Creation */}
                        <div className="DOBDiv">
                            <Dropdown className="DOB" placeholder='Day' scrolling options={getDay(30)} />
                            <Dropdown className="DOB" placeholder='Mon' scrolling options={getMonth(12)} />
                            <Dropdown className="DOBYear" placeholder='Year' scrolling options={getYear(50)} />
                        </div>

                        {/* gender Division */}
                        <P3 color="gray" className="genderPara">
                            What is your gender? 
                        </P3>
                        <div className="genderMainDiv">
                            <div className="genderSubDiv">
                                <input className="gender" type="button" value="Male" onClick={this.gender.bind(this, 'male')} />
                                {this.state.changeImage ?
                                    <img
                                        onClick={this.gender.bind(this, 'male')}
                                        className="imageIcon1"
                                        src="https://img.icons8.com/ios/18/000000/unchecked-circle-filled.png" /> :
                                    <img
                                        className="imageIcon"
                                        src="https://img.icons8.com/material-sharp/18/000000/unchecked-radio-button.png" />
                                }
                            </div>
                            <div className="genderSubDiv">
                                <input className="gender" type="button" value="Female" onClick={this.gender.bind(this, 'female')} />
                                {this.state.changeImage2 ?
                                    <img
                                        onClick={this.gender.bind(this, 'female')}
                                        className="imageIcon1"
                                        src="https://img.icons8.com/ios/18/000000/unchecked-circle-filled.png" /> :
                                    <img
                                        className="imageIcon"
                                        src="https://img.icons8.com/material-sharp/18/000000/unchecked-radio-button.png" />
                                }
                            </div>
                            <div className="genderSubDiv">
                                <input className="gender" type="button" value="Other" onClick={this.gender.bind(this, 'other')} />
                                {this.state.changeImage3 ?
                                    <img
                                        onClick={this.gender.bind(this, 'other')}
                                        className="imageIcon1"
                                        src="https://img.icons8.com/ios/18/000000/unchecked-circle-filled.png" /> :
                                    <img
                                        className="imageIcon"
                                        src="https://img.icons8.com/material-sharp/18/000000/unchecked-radio-button.png" />
                                }
                            </div>
                        </div>

                        {/* Dropdown Division */}

                        <Dropdown
                            className="city"
                            placeholder='Select City'
                            fluid
                            search
                            selection
                            options={cityOptions}
                            defaultValue={this.state.cityValue}
                            onChange={this.city}
                        />
                        <Dropdown
                            style={{
                                border: '0',
                                borderRadius: 'none',
                                fontSize: '18px',
                                borderBottom: '1px solid gray',
                                margin: '0 0 20px 0',
                                boxShadow: "none"
                            }}
                            placeholder='Select City'
                            fluid
                            search
                            selection
                            options={countryOptions}
                            defaultValue={this.state.countryValue}
                            onChange={this.country}
                        />

                        {/* Form Submit Button */}

                        <MediumPrimaryButton type="button" className="submit" onClick={this.submit} > Register </MediumPrimaryButton>
                        <div className="Paragraph">
                            <P5 className="para">
                                Already Have an account?
                            </P5>
                            <H6 className="h6" onClick={this.register}>
                                Login
                            </H6>
                        </div>
                        {/* </form> */}
                    </div>) : <LoginPage />}
            </React.Fragment>
        )
    }
}

export default Register;