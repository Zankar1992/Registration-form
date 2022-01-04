import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  constructor(props) {    // props ni value change kari sako 
    super(props);   //constructor use kariye aetle super method ne call karse
    this.state = {
      fullname: "",
      email: "",
      mobile: "",
      message: "",
    }
  }
  // multiple mate ek j fuction ne call karse one line code che 
  handlechangeall = (e) => {
    this.setState( { [e.target.name] :e.target.value } )    //single line code for multiple function call
    console.log(e.target);
  }

  handlesubmit = (e) => {
    // alert(`my name is ${this.state.fullname},
    //       my email id is ${this.state.email},
    //       my mobile number is ${this.state.mobile},
    //       my message to your company is ${this.state.message}`);
    // or 
    // alert json method che shortcut je js object ne string ma convert kare che 
    alert(JSON.stringify(this.state));
    e.preventDefault();
  }

  render() {

    return (
      <>
        <div>
          <form onSubmit={this.handlesubmit}>
            <label>Fullname</label> <br />
            <input type="text" name="fullname" value={this.state.fullname}
              onChange={this.handlechangeall} /> <br />

            <label>Email</label><br />
            <input type="text" name="email" value={this.state.email}
              onChange={this.handlechangeall} /> <br />
            <label>Mobile</label><br />
            <input type="number" name="mobile" value={this.state.mobile}
              onChange={this.handlechangeall} /> <br />
            <label>Message</label><br />
            <textarea name="message" value={this.state.message}
              onChange={this.handlechangeall} /> <br />
            <input type="submit" value="Send" />
          </form>
        </div>
      </>

    )
  }
}

export default Form;