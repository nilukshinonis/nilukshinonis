import React from 'react';
import config from '../../config';
export default function ContactForm() {
  return (
    <section id="contact_form">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <ul className="contact">
          {/* <li className="fa-home">{config.address}</li>

          <li className="fa-phone">{config.phone}</li> */}

          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
