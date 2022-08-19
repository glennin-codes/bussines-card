 import Logo from "../images/logo192.png"
 import Facebook from "../images/2024248_facebook_fb_media_network_social_icon.png"
 import Telephone from "../images/telephone-call.png"
 import Email from "../images/2024646_email_mail_message_new_send_icon.png"
 import  Ig from "../images/2024255_instagram_media_network_social_icon.png"
 export default function Header(){
      return(
            <div className="app--header">
                         <img
                              src={Logo}
                              alt="app logo"
                              className="app--logo"
                          />
                          <h1>Glennin Enterprise</h1>
                          <img
                                src={Telephone}
                                alt="telephone-logo"
                                className="app--contact--logos"
                          />
                          <img
                               src={Facebook}
                               alt="facebook logo"
                               className="app--contact--logos"
                          /> 
                           <img
                                src={Email}
                                alt="email-logo"
                                className="app--contact--logos"
                           />
                            <img
                                src={Ig}
                                alt="instagram-logo"
                                className="app--contact--logos"
                            />
                            <h4>bussines-1</h4>

            </div>
      )
 }