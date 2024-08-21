import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterLink from "./FooterLink";
import { Link } from "react-router-dom";
// import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="lg:px-52 pt-20 pb-10 text-xl flex flex-col shadow-x min-h-[479px] bg-[#F7F7F7]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pb-16 ">
        <div>
          <img src="./images/logo.png" className="w-4/5" alt="logo" />
          <p className="mt-4 mb-2">Follow Us</p>
          <div className="flex items-center gap-6">
            <FaFacebookSquare />
            {/* <FaSquareXTwitter /> */}
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>

        <div className="col-span-3 grid grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col">
            <p className="font-semibold mb-2">Quick Links</p>
            <div className="flex flex-col gap-y-3">
              <FooterLink page="about" label="About us" />
              <FooterLink page="products" label="Products" />
              <FooterLink page="blog" label="Latest News" />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold mb-2">Products</p>
            <div className="flex flex-col gap-y-3 ">
              <a href="#">Scheduling</a>
              <a href="#">FAQs</a>
              <a href="#">Callback Request</a>
              <a href="#">Event Booking</a>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold mb-2">Talk to us</p>
            <a href="#">info@chatterbot.com</a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1C1E21] pt-10 flex flex-col lg:flex-row lg:items-center justify-between space-y-6 lg:space-y-0 text-sm lg:text-base font-normal">
        <div className="text-[#232323] text-sm mt-4">©2024 Meta</div>
        <div className="w-full font-semibold text-2xl lg:w-1/4 grid grid-cols-2 gap-4 lg:gap-0 lg:flex lg:flex-row flex-row-reverse justify-between mt-4">
          <Link to="/terms-of-service" className="hover:text-violet-700">
            Terms of service
          </Link>
          <Link to="/privacy-policy" className="hover:text-violet-700">
            Privacy policy
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
