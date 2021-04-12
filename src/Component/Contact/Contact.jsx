import React, { Component } from "react";
import "../Contact/Contact1.css"
import { db } from "../../Config/firebase"
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      let jsonObject = {
        name: this.state.input["name"],
        subject: this.state.input["subject"],
        email: this.state.input["email"],
        message: this.state.input["comment"],
      };
      let docRef = await db.collection("Contact_info").doc();
      docRef.set(jsonObject);
      console.log(docRef);

      let input = {};
      input["name"] = "";
      input["subject"] = "";
      input["email"] = "";
      input["comment"] = "";
      this.setState({ input: input });

      alert("Submitted");
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your phone.";
    }
    if (!input["subject"]) {
      isValid = false;
      errors["subject"] = "Please enter your subject.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["comment"]) {
      isValid = false;
      errors["comment"] = "Please enter your message.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }
  render() {
    return (
      <>
      {/* <div style={{backgroundColor:"#1B1B1B"}}> */}

  
        <div className="container site-section " id="section-contact">
          <div className="row">
            <div class="col-md-12 mb-0">
              <div class="section-heading text-center">
                <h2>
                  Get <strong>In Touch</strong>
                </h2>
              </div>
            </div>
            <div className="col-lg-12 pt-5 "></div>
            <div class="col-12">
              <h2 class="contact-title" style={{ color: "white" }}>
                Get in Touch
              </h2>
            </div>
            <div class="col-lg-8 mx-auto">
              <form
                class="form-contact contact_form"
                novalidate="novalidate"
                onSubmit={this.handleSubmit}
              >
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <textarea
                        class="form-control valid "
                        cols="30"
                        rows="9"
                        name="comment"
                        id="comment"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your message'"
                        placeholder="Enter your message"
                        value={this.state.input.comment}
                        onChange={this.handleChange}
                      />
                      <div className="text-danger">
                        {this.state.errors.comment}
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        class="form-control valid"
                        name="name"
                        id="name"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your name'"
                        placeholder="Enter your name"
                        value={this.state.input.name}
                        onChange={this.handleChange}
                      />
                      <div className="text-danger">
                        {this.state.errors.name}
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        class="form-control valid"
                        name="email"
                        id="email"
                        type="email"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email address'"
                        placeholder="Email"
                        value={this.state.input.email}
                        onChange={this.handleChange}
                      />
                      <div className="text-danger">
                        {this.state.errors.email}
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Subject'"
                        placeholder="Enter Subject"
                        value={this.state.input.subject}
                        onChange={this.handleChange}
                      />
                      <div className="text-danger">
                        {this.state.errors.subject}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <button
                    type="submit"
                    class="button button-contactForm boned-btn"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div class="col-lg-3 offset-lg-1">
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="ti-home"></i>
                </span>
                <div class="media-body">
                  <h3 style={{ color: "white" }}>Potohar Builders.</h3>
                  <p style={{ color: "white" }}>F-7 Markaz Islamabad</p>
                </div>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="ti-tablet"></i>
                </span>
                <div class="media-body">
                  <h3 style={{ color: "white" }}>+1 253 565 2365</h3>
                  <p style={{ color: "white" }}>Mon to Sat 9am to 6pm</p>
                </div>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="ti-email"></i>
                </span>
                <div class="media-body">
                  <h3 style={{ color: "white" }}>
                    <a
                      href="/cdn-cgi/l/email-protection"
                      class="__cf_email__"
                      data-cfemail="b0c3c5c0c0dfc2c4f0d3dfdcdfc2dcd9d29ed3dfdd"
                    >
                      [email&#160;protected]
                    </a>
                  </h3>
                  <p style={{ color: "white" }}>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }
}

export default Contact;
