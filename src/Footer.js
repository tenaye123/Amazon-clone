import React from "react";
import "./Footer.css";
import Footerp from "./Footerp";
import { Link } from "react-router-dom"

function Footer() {
  const scrollTop = () => {
window.scrollTo({
top: 0,
behavior : 'auto',})}  //smoth
  return (
    <>
      <Link to="/">
        <div className="firstHeader" onClick={()=> scrollTop()}>Back to top</div>
      </Link>
      <div className="footer-wrapper row">
        <div className="linkwrapper col-sm-12 col-md">
          <h3>Get to Know Us</h3>
          <Link>
            <Footerp
              linkName={[
                "Careers",
                "Amazon Newsletter",
                "About Amazon",
                "Accessibility",
                "Sustainability",
                "Press Center",
                "Investor Relations",
                "Amazon Devices",
                "Amazon Science",
              ]}
            />
          </Link>
        </div>
        <div className="linkwrapper col-sm-12 col-md">
          <h3>Make Money with Us</h3>
          <Link>
            <Footerp
              linkName={[
                "Sell products on Amazon",
                "Sell apps on Amazon",
                "Supply to Amazon",
                "Protect & Build Your Brand",
                "Become an Affiliate",
                "Become a Delivery Driver",
                "Start a package delivery business",
                "Advertise Your Products",
                "Self-Publish with Us",
                "Host an Amazon Hub",
                "›See More Ways to Make Money",
              ]}
            />
          </Link>
        </div>
        <div className="linkwrapper col-sm-12 col-md">
          <h3>Amazon Payment Products</h3>
          <Link>
            <Footerp
              linkName={[
                "Amazon Rewards Visa Signature Cards",
                "Amazon Store Card",
                "Amazon Secured Card",
                "Amazon Business Card",
                "Shop with Points",
                "Credit Card Marketplace",
                "Reload Your Balance",
                "Amazon Currency Converter",
              ]}
            />
          </Link>
        </div>
        <div className="linkwrapper col-sm-12 col-md">
          <h3>Let Us Help You</h3>
          <Link>
            <Footerp
              linkName={[
                "Amazon and COVID-19",
                "Your Account",
                "Your Orders",
                "Shipping Rates & Policies",
                "Amazon Prime",
                "Returns & Replacements",
                "Manage Your Content and Devices",
                "Your Recalls and Product Safety",
                "Alerts",
                "Help",
              ]}
            />
          </Link>
        </div>
      </div>
      <hr />
      <hr />
      <Link>
        <div className="allwrapper">
          <div className="wrapperImg">
            <button className="btnn">
              <img
                className="footer__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="footer logo"
              />
            </button>
            <div className="flagbtn">
              <img
                className="footer__flag"
                src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png"
                alt="footer logo"
              />
              <button className="btnn usa">  United States</button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Footer;

// import React from 'react'
// import "./Footer.css"
// import Footerp from './Footerp'

// function Footer() {
//     return(
// <>
//     <div className='footer-wrapper'>
//         <div className='linkwrapper'>
// <Footerp linkTitle="Get to Know Us"
//        let item={[

// "Careers",
// "Amazon Newsletter",
// "About Amazon",
// "Accessibility",
// "Sustainability",
// "Press Center",
// "Investor Relations",
// "Amazon Devices",
// "Amazon Science"

//     ]}/>
//     <div className='linkwrapper'>
//        <Footerp linkTitle="Make Money with Us"
//        let item={[
// "Sell products on Amazon",
// "Sell apps on Amazon",
// "Supply to Amazon",
// "Protect & Build Your Brand",
// "Become an Affiliate",
// "Become a Delivery Driver",
// "Start a package delivery business",
// "Advertise Your Products",
// "Self-Publish with Us",
// "Host an Amazon Hub",
// "›See More Ways to Make Money"]}/>

//     </div>
//     <div className='linkwrapper'>
//      <Footerp linkTitle="Amazon Payment Products"
//        let item={[
// "Amazon Rewards Visa Signature Cards",
// "Amazon Store Card",
// "Amazon Secured Card",
// "Amazon Business Card",
// "Shop with Points",
// "Credit Card Marketplace",
// "Reload Your Balance",
// "Amazon Currency Converter"]}/>
//     </div>
// <div className='linkwrapper'>
//     <Footerp linkTitle="Let Us Help You"
//        let item={[

// "Amazon and COVID-19",
// "Your Account",
// "Your Orders",
// "Shipping Rates & Policies",
// "Amazon Prime",
// "Returns & Replacements",
// "Manage Your Content and Devices",
// "Your Recalls and Product Safety","Alerts",
// "Help" ]}/>
// </div></div>
// <hr/><hr/>

// </>
// )}
// export default Footer
