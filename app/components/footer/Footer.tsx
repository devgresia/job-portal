import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelopeOpen,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section bg-gray-900 text-white flex justify-center pointer">
      <div className="container mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="single-cta">
            <FaMapMarkerAlt className="text-orange-500 text-4xl" />
            <div className="cta-text">
              <h4>Find us</h4>
              <span>Gresia Building, Kamaladi, Opposite to View Tower</span>
            </div>
          </div>
          <div className="single-cta">
            <FaPhone className="text-orange-500 text-4xl" />
            <div className="cta-text">
              <h4>Call us</h4>
              <span>9841123456</span>
            </div>
          </div>
          <div className="single-cta">
            <FaEnvelopeOpen className="text-orange-500 text-4xl" />
            <div className="cta-text">
              <h4>Mail us</h4>
              <span>gresia@info.com</span>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="footer-widget">
              <div className="footer-widget-heading mb-6">
                <h3>About Us</h3>
              </div>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="footer-widget">
              <div className="footer-widget-heading mb-6">
                <h3>Contact Us</h3>
              </div>
              <p className="text-gray-400">
                For any inquiries or questions, please contact us at:
              </p>
              <p className="text-orange-500">contact@example.com</p>
            </div>
            <div className="footer-widget">
              <div className="footer-widget-heading mb-6">
                <h3>Help</h3>
              </div>
              <p className="text-gray-400">
                Need assistance? Reach out to our support team:
              </p>
              <p className="text-orange-500">help@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
