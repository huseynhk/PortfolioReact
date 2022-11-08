import React from 'react';
import './contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';



const Contact = () => {
  return (
    <section id='contact'>

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact-options">

          <article className='contact-option'>
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>khuseyn693@gmail.com</h5>
            <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'>Send a Message</a>
          </article>

          <article className='contact-option'>
            <RiMessengerLine />
            <h4>Facebook</h4>
            <h5>Huseyn Huseynzade</h5>
            <a href="https://www.facebook.com/campaign/landing.php?campaign_id=17872459592&extra_1=s%7Cc%7C613001315951%7Cb%7Cfacebook%20%27%7C&placement=&creative=613001315951&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D17872459592%26adgroupid%3D145027591648%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D2031%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAmaibBhCAARIsAKUlaKRvS-lgJicXv1SthpZLOo4PQmAuoESn_3Zx2pQm4ImbN77yvekOpAAaAp_KEALw_wcB" target='_blank'>Send a Message</a>
          </article>

          <article className='contact-option'>
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>055-350-92-92</h5>
            <a href="https://web.whatsapp.com/" target='_blank'>Send a Message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>


    </section>
  )
}

export default Contact