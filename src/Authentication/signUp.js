import React from 'react' ;
import LoginPage from './loginpage.js';
import { Dropdown ,Radio } from 'semantic-ui-react';

const cityOptions = [
    { key: 'af', value: 'Chennai', flag: 'af', text: 'Chennai' },
    { key: 'ax', value: 'Coimbatore', flag: 'ax', text: 'Coimbatore' },
    { key: 'al', value: 'Theni', flag: 'al', text: 'Theni'},
    { key: 'dz', value: 'madurai', flag: 'dz', text: 'madurai' },
]

const countryOptions = [
    { key: '1', value: 'India', flag: 'af', text: 'India' },
    { key: '2', value: 'New Zealand', flag: 'ax', text: 'New Zealand' },
    { key: '3', value: 'pakistan', flag: 'al', text: 'pakistan'},
    { key: '4', value: 'bangladesh', flag: 'dz', text: 'bangladesh' },
]


class Register extends React.Component{

    state = {
        change : true,
        userNameValue : '',
        passwordValue : '',
        emailValue : '',
        mobileValue : '',
        DOB_value : '',
        genderValue : '',
        cityValue : '',
        countryValue : '',
    }

    getUserName = (e) => {
        this.setState({
            userNameValue : e.target.value
        })
    }
    getEmail = (e) => {
        this.setState({
            emailValue : e.target.value
        })
    }
    getPassword = (e) => {
        this.setState({
            passwordValue : e.target.value 
        })
    }
    getDOB = (e) => {
        this.setState({
            DOB_value : e.target.value 
        })
    }
    getmobileNo = (e) => {
        this.setState({
            mobileValue : e.target.value 
        })
    }
    gender = (e) => {
        this.setState({
            genderValue : e.target.value 
        })
    }
    city = (e) => {
        this.setState({
            cityValue : e.target.value 
        })
    }
    country = (e) => {
        this.setState({
            countryValue : e.target.value 
        })
    }
    login () {
        return <LoginPage />
    }

    render() {
        return (
            <React.Fragment>
                {this.state.change ? (
                <div className="Register">
                    <p className="heading">Register</p>
                    <div>
                    <input type="text" 
                        className="email" 
                        defaultValue= {this.state.userNameValue} 
                        ref={ input => this.userName = input } 
                        onChange={this.getUserName} 
                        placeholder="Name"
                    />
                    <input type="text" 
                        className="email" 
                        defaultValue={this.state.emailValue} 
                        ref={ input => this.email = input } 
                        onChange={this.getEmail} 
                        placeholder="Email"
                    />
                    <input type="password" 
                        className="password" 
                        defaultValue={this.state.passwordValue} 
                        ref={ input => this.password = input } 
                        onChange={this.getPassword} 
                        placeholder="Password"
                    />
                    <input type="text" 
                        className="email" 
                        defaultValue={this.state.mobileValue} 
                        ref={ input => this.mobile = input } 
                        onChange={this.getmobileNo}
                        placeholder="Mobile No" 
                    />
                    <input type="text" 
                        className="email" 
                        defaultValue={this.state.DOB_value} 
                        ref={ input => this.DOB = input } 
                        onChange={this.getDOB} 
                        placeholder="DD-MM-YYYY"
                        style={{fontSize:'16px'}}
                    />
                    <div className="genderDiv" onClick={this.gender}>
                        <div className="male">
                            <Radio  value="male" style={{ paddingLeft: '-2px' }}/>   
                            <label style={{ color:'gray' , fontWeight: '500' }}>male</label>
                        </div>
                        <div className="female">
                        <Radio value="female" style={{ paddingLeft: '-2px' }}/>
                            <label style={{ color:'gray' , fontWeight: '500' }}>female</label>
                        </div>
                        <div className="other">
                        <Radio style={{ paddingLeft: '-2px' }} value="other" />
                            <label style={{ color:'gray' , fontWeight: '500' }}>other</label>
                        </div>
                    </div>
                    </div>
                    <Dropdown
                        style ={{
                            border : '0',
                            borderRadius : 'none',
                            fontSize: '18px',
                            borderBottom: '1px solid gray' ,
                            margin : '0 0 20px 0',
                            boxShadow: "none",
                        }
                    }
                        placeholder='Select City'
                        fluid
                        search
                        selection
                        options={cityOptions}
                        defaultValue={this.state.cityValue}
                        onChange={this.city}
                    />
                    <Dropdown
                        style ={{
                            border : '0',
                            borderRadius : 'none',
                            fontSize: '18px',
                            borderBottom: '1px solid gray' ,
                            margin : '0 0 20px 0',
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
                    <button type="submit" className="submit" onClick={this.Register} > Register </button>
                    <p className="para">
                        Already have a account?<span onClick={this.login}>Login</span>
                    </p>
                </div>): <LoginPage />}
            </React.Fragment>
        )
    }
}

export default Register;