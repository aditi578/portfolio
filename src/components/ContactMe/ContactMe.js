import React from 'react';

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="contact-me-section">
        <style>
          {`
          .contact-me-section {
            background-color: #f5f5f5;
            padding: 50px 0;
            text-align: center;
            margin-top: 80px; /* Adjust the margin from the navbar */
          }
          
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 15px;
          }
          
          h1 {
            font-size: 2.1em;
            margin-bottom: 30px;
          }
          
          .form-input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
            margin-bottom: 20px;
          }
          
          .submit-button {
            background-color: #4caf50;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
          }
          
          .submit-button:hover {
            background-color: #45a049;
          }
          
          .contact-info {
            margin-top: 40px;
          }
          
          .contact-info p {
            margin-bottom: 10px;
          }
          `}
        </style>
        <div className="container">
          <h1>Contact Me</h1>
          <form action="https://formspree.io/f/xgebjawd" method="POST">
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              className="form-input"
              placeholder="Name"
              required
            />
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              className="form-input"
              placeholder="Email"
              required
            />
            <br />
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              className="form-input"
              placeholder="Message"
              required
            />
            <br />
            <button type="submit" className="submit-button">Submit</button>
          </form>
          <div className="contact-info">
            <h2>Contact Information:</h2>
            <p>Email: aditirathore178@gmail.com</p>
            <p>Contact Number: (+91)8625877605</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMe;
