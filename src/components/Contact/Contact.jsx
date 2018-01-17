import React, { Component } from "react";
import "./Contact.scss";
import Email from 'react-icons/lib/fa/envelope-square';
import Facebook from 'react-icons/lib/fa/facebook-square';
import Twitter from 'react-icons/lib/fa/twitter-square';
import Linkedin from 'react-icons/lib/fa/linkedin-square';
import Skype from 'react-icons/lib/fa/skype';
import WA from 'react-icons/lib/fa/whatsapp';
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="envelope">
					<h3 className="contact-t">Contact / Hire Me</h3>
					<h3 className="contact-line contact-t"></h3>
					<div className="centered">
							<a id="mailme" href="mailto:ricky010193@gmail.com"><Email className="icon-social"/></a>
							<a id="fb" href="http://me.me/rickyjanuaris" target="blank_"><Facebook className="icon-social"/></a>
							<a id="linkedin" href="https://www.linkedin.com/in/rickyjanuari/" target="blank_"><Linkedin className="icon-social"/></a>
              <a id="linkedin" href="http://m.me/rickyjanuaris" target="blank_"><Skype className="icon-social"/></a>
              <a id="linkedin" href="https://api.whatsapp.com/send?phone=6285759621854" target="blank_"><WA className="icon-social"/></a>
						
					</div>				
					<h4 className="contact-note">Always interested in new projects, Just Send me an email</h4>
				</div>
      </div>
    );
  }
}

export default Contact;
