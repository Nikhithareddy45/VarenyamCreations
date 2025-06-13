import React from "react";
// import logo from "../../assets/images/favicon.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="maroon w-full p-5 mt-5">
      {/* <div className="flex">
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="rounded-full h-10" />
                    <h4 className="font-logo text-xl heading">Varenyam Creations</h4>
                </div>
                <p>Crafting exquisite jewelry pieces that celebrate your special moments. Each design tells a story of elegance, tradition, and timeless beauty.</p>
            </div>
            <div className="flex">
                <h3>Quick Links</h3>
                <Link to="#">Home</Link>
                <Link to="#">Collections</Link>
                <Link to="#">About Us</Link>
                <Link to="#">Contact</Link>
            </div>
            <div className="flex"></div>
            <div className="flex"></div>
        </div> */}
      <div className="flex items-center lg:justify-center w-[90%] gap-15 flex-wrap mb-5 mt-5 p-5 sm:justify-start">
        <div className="flex flex-col gap-3">
          <h3 className="font-logo yellow-text lg:text-2xl md:text-xl sm:text-lg ">Visit Our Store</h3>
          <p className="font">
            123 Jewelry Street
            <br />
            Vanasthalipuram, LB Nagar
            <br />
            Hyderabad, India
          </p>
        </div>
        <div className="flex flex-col gap-2">
            <h3  className="font-logo yellow-text lg:text-2xl md:text-xl sm:text-lg ">Contact Us</h3>
            <p className="font"> <strong>Phone:</strong> +91 98765 43210</p>
             <p className="font"> <strong>Email:</strong> <Link to="">varenyamcreations@gmail.com</Link></p>
             <p className="font"> <strong>WhatsApp:</strong> +91 98765 43210</p>
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="font-logo yellow-text lg:text-2xl md:text-xl sm:text-lg ">Store Hours</h3>
            <p className="font"> <strong>Mon-Sat:</strong> 10:00 AM - 8:00 PM </p>
            <p className="font"> <strong>Sunday:</strong>  11:00 AM - 6:00 PM</p>
            <p className="font"> <strong>Online:</strong> 24/7 Available</p>
        </div>
      </div>
      <hr/>
      <div className="flex flex-col items-center justify-center m-2 gap-3">
        <p>© Varenyam Creations. All rights reserved.</p>
        <p className="font">Made with ❤️ for jewelry lovers</p>
      </div>
    </div>
  );
}

export default Footer;
