import partnersLogo from "../Images/partners logo (1).jpg";
import partnersLogo2 from "../Images/partners logo (2).jpg";
import partnersLogo3 from "../Images/partners logo (3).png";
import partnersLogo4 from "../Images/partners logo (4).png";
import partnersLogo5 from "../Images/partners logo (1).png";
import partnersLogo6 from "../Images/partners logo (2).png";
import partnersLogo7 from "../Images/partners logo (5).png";

const Footer = () => {
    return ( 
        <footer>
            <div className="footer-con">
                <div className="kujiaretink-con">
                    <h4>KujiaRetink</h4>
                    <p>Kaiserstrasse 89, 53113 Bonn.</p>
                    <ul>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                    </ul>
                </div>
                <div className="contact">
                    <h4>Contact Info</h4>
                    <p> <a href="tel:+4915219254165">+4915219254165</a>, <span> <a href="tel:+254706835980">+254706835980</a></span> </p>
                    <p><a href="mailto:info@retinkmedia">info@retinkmedia</a></p>
                    <p> <a href="mailto:kenya@kujia.or.ke" rel="noreferrer" >kenya@kujia.or.ke</a></p>
                    <p> <a href="http://www.retinkmedia.com" rel="noreferrer" target="_blank">www.retinkmedia.com</a>, <span><a href="http://www.kujia.org" target="_blank" rel="noreferrer">www.kujia.org</a></span></p>
                </div>
                <div className="partners-con">
                    <h4>Partners</h4>
                    <div className="partners-logo-con">
                    <img src={partnersLogo} alt="" />
                    <img src={partnersLogo2} alt="" />
                    <img src={partnersLogo3} alt="" />
                    <img src={partnersLogo4} alt="" />
                    <img src={partnersLogo5} alt="" />
                    <img src={partnersLogo6} alt="" />
                    <img src={partnersLogo7} alt="" />
                    </div>
                    
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;