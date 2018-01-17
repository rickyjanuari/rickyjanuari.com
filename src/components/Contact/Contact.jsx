import React, { Component } from "react";
import "./Contact.scss";
import Email from 'react-icons/lib/ti/mail';
import Facebook from 'react-icons/lib/ti/social-facebook';
import Twitter from 'react-icons/lib/ti/social-twitter';
import Linkedin from 'react-icons/lib/ti/social-linkedin';
import Skype from 'react-icons/lib/ti/social-skype';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="envelope">
					<h3 className="contact-t">Contact / Hire Me</h3>
					<h3 className="contact-line contact-t"></h3>
					<div className="centered">
							<a id="mailme" href="mailto:ricky010193@gmail.com"><Email className="icon-social"/></a>
							<a id="fb" href="http://www.facebook.com/rickyjanuaris" target="blank_"><Facebook className="icon-social"/></a>
							<a id="linkedin" href="https://www.linkedin.com/in/rickyjanuari/" target="blank_"><Linkedin className="icon-social"/></a>
              <a id="linkedin" href="skype:rickyjanuari?userinfo" target="blank_"><Skype className="icon-social"/></a>
						
					</div>				
					<h4 className="contact-note">Always interested in new projects, Just Send me an email</h4>
				</div>
      </div>
    );
  }
}

export default Contact;
