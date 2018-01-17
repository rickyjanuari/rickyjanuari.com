import React, { Component } from "react";
import "./Contact.css";
import MessengerCustomerChat from 'react-messenger-customer-chat';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1>
            Ini Halaman Contact
        </h1>
        <MessengerCustomerChat
          pageId="1456719061293720"
          appId="159308587468711"
        />
      </div>
    );
  }
}

export default Contact;
