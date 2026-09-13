import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-base-300 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-12">
        <div>
          <img src={Logo} alt="Dev Stack" className="h-8 mb-2" />
          <p className="text-sm text-base-content/60 mb-3">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-4 text-lg text-base-content/60">
            <FaGithub />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-3">PRODUCT</h4>
          <ul className="space-y-2 text-sm text-base-content/60">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">COMPANY</h4>
          <ul className="space-y-2 text-sm text-base-content/60">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">LEGAL</h4>
          <ul className="space-y-2 text-sm text-base-content/60">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-base-300 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-6 text-sm text-base-content/50">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;