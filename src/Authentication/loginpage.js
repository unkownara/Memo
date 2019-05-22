import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Forgot from './forgot.js';
import Register from './signUp';
import LargeInput from '../Generics/Styles';


class LoginPage extends React.Component {

    // set the state values

    state = {
        fields: {},
        icon: true,
        change: true,
        changeRegister: true
    }

    // handle Change

    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value
        this.setState({
            fields
        })
    }

    // file and icon changes

    register = () => {
        this.setState({
            change: false,
            changeRegister: false
        });
    }
    forgotPassword = () => {
        this.setState({
            change: false,
            changeRegister: true
        })
    }
    eyeIconChange = () => {
        this.setState({
            Type: 'password',
            icon: true
        })
    }
    eyeSlashIconChange = () => {
        this.setState({
            Type: 'text',
            icon: false
        })
    }
    eyeSlashIcon = () => {
        return (
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJQSURBVEiJ7VRNaBNBGH1vN5teiphiD6JQkSJ48FKpUAv2KojSCiJeekyykUAExaqQ0h4kYMGWkOzmIJT0UETqD+hZEL2koCcPQgUP9hSI1fwVutnPQ7dlOw6tPfXSBwsz773vZ4eZDzjEQYO7iZlM5uj6+vp1kjdEpA9AbyBVAfwg+TwSibzK5/N/9lUgnU53eZ6XEZGHAI7s0eRvkjONRuPpwsJCc88Ctm2fFpHXAM7tkVjFimmao4VC4WuYNMKbVCrVLyIfNcmXSF4i2UOyR0RGSL5UPP2dTud9KpU6q/2DdDrdu7GxUQFwaoeBvOM4zqyu5UQicZfkE4X+aVnWQD6frwJAZIv1PK+sJgew5DjObDwetwzDmAZwK+AXfd/PlkqlmUQiMUxyNBRz0vO8ZwCuAcERJZPJMRG5rHZIcg4AguQTAPqCb8I0zamwJwwRuWrb9pXtAgAe646A5JdgOa5JMg4AlmV91sWKSC5cwNeZ6vW6BEtDIxsA0Gw2RaMBgIQD7+sc3d3dA8FyXtVIzgNANBo9r4sl+WC7gOu6b4O7r+IeAPi+nwWQw+YLrgLIdTqdybBHwRvHcd4BoWsaj8ePGYaxDOUmichkqVSa1nVp2/aUiGQV+jvJQcdxfu0oAGw+NN/3PwA4rgQtkZxrt9vLsViMrVZrkGQGwJjiqxqGcbFYLK5sEf+MiuDBvQAwout6F3wCcNN13dUwaaquSqXSGhoaWhSRBoALALp2yyoiawAe1Wq12+VyeU3V9zOuzwA4EUirAL79z7g+xMHjL5Oj3hDwLuoyAAAAAElFTkSuQmCC"
                onClick={this.eyeIconChange}
            />
        )
    }
    eyeIcon = () => {
        return (
            <img className="eyeslashIcon"
                src="data:image/png;base64,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"
                onClick={this.eyeSlashIconChange}
            />
        )
    }

    // form validate

    validateForm() {

        let fields = this.state.fields;
        let formIsValid = true;

        // Email Checking

        if (!fields["emailid"]) {
            formIsValid = false;
        }

        if (typeof fields["emailid"] !== "undefined") {

            //regular expression for email validation

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
            }
        }

        // Password Checking

        if (!fields["password"]) {
            formIsValid = false;
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
            }
        }
        return formIsValid;

    }

    // submit form

    submit = (e) => {

        // Email validate

        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["emailid"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });
        }
    }

    render() {
        return (

            // login page content

            <div className="loginPage">
                {this.state.change ? (
                    <section className="loginpageSection">
                        <p className="heading">Welcome Back!</p>

                        {/* form Creation */}

                        <form onSubmit={this.submit}>

                            {/* Set The Input Box */}

                            <div className="emailDiv">
                                <LargeInput type="text"
                                    placeholder="Email"
                                    autoComplete="off"
                                    name="emailid"
                                    value={this.state.fields.emailid}
                                    onChange={this.handleChange}
                                    ref={input => this.email = input}
                                ></LargeInput>
                            </div>
                            <div className="passwordDiv">
                                <LargeInput type={this.state.Type}
                                    placeholder="Password"
                                    name="password"
                                    autoComplete="off"
                                    className="password"
                                    value={this.state.fields.password}
                                    onChange={this.handleChange}>
                                </LargeInput>
                                <div>
                                    {this.state.icon === true ? this.eyeIcon() : this.eyeSlashIcon()}
                                </div>
                            </div>

                            <p className="forgotSpan" onClick={this.forgotPassword}>forgot Password?</p>

                            {/* submit form button */}

                            <div className="paraAndButton">
                                <button type="submit"
                                    onClick={() => this.submit}
                                    className="submit">
                                    Let's Go
                                </button>
                                <p className="para">
                                    Have not yet to
                                <span onClick={this.register}>
                                        Register?
                                </span>
                                </p>
                            </div>
                        </form>
                    </section>
                ) :

                    // change the file page

                    (this.state.changeRegister ? <Forgot /> : <Register />)
                }
            </div>
        )
    }
}

export default LoginPage;

