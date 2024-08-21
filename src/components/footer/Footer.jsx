import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterLink from "./FooterLink";
import { Link } from "react-router-dom";
// import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="lg:px-48 px-4 w-full md:pt-20 pt-10 pb-10 md:text-xl text-lg flex flex-col shadow-x min-h-[479px] bg-[#F7F7F7]">
      <div className="w-full flex md:flex-row flex-col pb-16 ">
        <div className="flex flex-col md:items-start items-center md:justify-center w-full md:mb-0 mb-10 ">
          <img src="./images/logo.png" className="md:w-3/4 w-1/2 md:ml-0 ml-16" alt="logo" />
          <p className="mt-4 mb-2 font-semibold">Follow Us</p>
          <div className="flex items-center md:gap-6 gap-4">
            <FaFacebookSquare size={24} />
            {/* <FaSquareXTwitter /> */}
            <FaLinkedin size={24} />
            <FaInstagram size={24}/>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 w-full">
          <div className="flex flex-col">
            <p className="font-bold mb-2">Quick Links</p>
            <div className="flex flex-col gap-y-3 text-base font-semibold">
              <FooterLink page="about" label="About us" />
              <FooterLink page="products" label="Products" />
              <FooterLink page="blog" label="Latest News" />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-bold mb-2">Products</p>
            <div className="flex flex-col gap-y-3 text-base font-semibold">
              <a href="#">Scheduling</a>
              <a href="#">FAQs</a>
              <a href="#">Callback Request</a>
              <a href="#">Event Booking</a>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-bold mb-2">Talk to us</p>
            <a href="#">info@chatterbot.com</a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1C1E21] pt-10 flex flex-row items-center justify-between space-y-3 lg:space-y-0 text-sm lg:text-base font-normal">
        <div className="text-[#232323] text-sm md:mt-4">©2024 Meta</div>
        <div className="md:w-1/2 w-3/4 font-semibold md:text-xl text-lg lg:w-1/4 flex flex-row justify-around md:mt-4">
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
