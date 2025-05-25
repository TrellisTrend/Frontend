import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="bg-gray-800 text-white py-6 text-center">
        <div className="container mx-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="mt-4">
            <Link
              to="#"
              className="hover:text-gray-300 transition duration-300"
            >
              Privacy Policy
            </Link>
            <span> | </span>
            <Link
              to="#"
              className="hover:text-gray-300 transition duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
