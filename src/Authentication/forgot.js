import React from 'react';
import NewPassword from './newpass.js';
import LoginPage from './loginpage.js';

class Forgot extends React.Component {

  // Set The State Value

  state = {
    forgotEmailValue: '',
    change: true,
    changeNewPassword: true
  }

  // Get the Forgot Password Value

  forgot = (e) => {
    this.setState({
      forgotEmailValue: e.target.value
    })
  }

  // Change The Page

  login = () => {
    this.setState({
      change: false,
      changeNewPassword: true
    })
  }

  // Form Validation

  validateForm() {

    let formIsValid = true;
    let forgotEmailValue = this.state.forgotEmailValue;
    
    // Email Checking

    if (!forgotEmailValue) {
      formIsValid = false;
    }

    if (typeof forgotEmailValue !== "undefined") {

      //regular expression for email validation

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(forgotEmailValue)) {
        formIsValid = false;
      }
    }
    return formIsValid;
  }

  // Form Submission

  Submit = (e) => {
    
    e.preventDefault();
    if (this.validateForm()) {
      let forgotValue = '';
      alert(this.state.forgotEmailValue)
      this.setState({
        forgotEmailValue: forgotValue,
        changeNewPassword: false,
        change: false
      });
    }
  }

  render() {
    return (

      // Forgot Password Form Creation

      <React.Fragment>
        {this.state.change ? (
          <div className="forgotPassword">

            {/* Heading And Sub-Heading */}

            <div className="paragraphContent">
              <p className="heading">Forgot Your Password</p>
              <p className="subHeading" >Verify your email id</p>
            </div>

            {/* Forgot input Box */}
            <form onSubmit={this.Submit}>
              <div className="forgotInputBoxDiv">
                <input type="text"
                  className="email"
                  value={this.state.forgotValue}
                  placeholder="Email"
                  onChange={this.forgot} />
              </div>

              {/* Form Submit button And Paragraph  */}

              <div className="submitButtonDiv">
                <button onClick={this.Submit}
                  type="submit"
                  className="submit">
                  Verify email
              </button>
                <p className="para">
                  Remember your password?
              <span onClick={this.login}>
                    Login
              </span>
                </p>
              </div>
            </form>
          </div>) :

          // change the file page

          (
            this.state.changeNewPassword ?
              <LoginPage /> : <NewPassword />
          )}
      </React.Fragment>
    )
  }
}

export default Forgot;