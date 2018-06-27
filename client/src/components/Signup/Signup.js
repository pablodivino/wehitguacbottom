import React, { Component } from "react";
import "./Signup.css";

class Signup extends Component {
  state = {
    firstName: "",
    middleName: "",
    lastName: "",
    photoLink: "",
    email: "",
    phone: "",
    age: "",
    password: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target
    // console.log(name, value)
    this.setState({
      [name]: value
    });
    // console.log(this.state);
  }
  render() {
    return (
      <div className="col-md-12">
        <form id="signUpForm">
          <div className="form-group">
            <label htmlFor="name" id="firstNameLabel">First Name</label>
            <input onChange={this.handleInputChange} name="firstName" type="name" className="form-control" id="firstNameInput" rows="1" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="name" id="middleNameLabel">Middle Name</label>
            <input onChange={this.handleInputChange} name="middleName" type="name" className="form-control" id="middleNameInput" rows="1" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="name" id="lastNameLabel">Last Name</label>
            <input onChange={this.handleInputChange} name="lastName" type="name" className="form-control" id="lastNameInput" rows="1" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="name" id="photoLinkLabel">Photo Link</label>
            <input onChange={this.handleInputChange} name="photoLink" type="name" className="form-control" id="PhotoLinkInput" rows="1" placeholder="Link to your photo" />
          </div>
          <div className="form-group">
            <label htmlFor="email" id="emailLabel">Email</label>
            <input onChange={this.handleInputChange} name="email" type="email" className="form-control" id="emailInput" rows="1" placeholder="example@gmail.com" />
          </div>
          <div className="form-group">
            <label htmlFor="number" id="phoneLabel">Phone Number</label>
            <input onChange={this.handleInputChange} name="phone" type="number" className="form-control" id="phoneInput" rows="1" placeholder="1235555555" />
          </div>
          <div className="form-group">
            <label htmlFor="number" id="ageLabel">Age</label>
            <input onChange={this.handleInputChange} name="age" type="number" className="form-control" id="ageInput" rows="1" placeholder="42" />
          </div>
          <div className="form-group">
            <label htmlFor="password" id="passwordLabel">Password</label>
            <input onChange={this.handleInputChange} name="password" type="password" className="form-control" id="passwordInput" rows="1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
        </form>
      </div>
    )
  }
};

  export default Signup;

