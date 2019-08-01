import React, { Component } from "react";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: null,
    email: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="firstName">Name</label>
          <input id="firstName" type="text" onChange={this.handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" type="text" onChange={this.handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="text" onChange={this.handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" onChange={this.handleChange} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
