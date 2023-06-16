import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-violet-500">
            <footer className="container  mx-auto footer p-10 md:py-10 md:px-0 bg-violet-500 text-base-content text-white">
                <div>
                <h1 className="normal-case font-bold border rounded p-2 text-lg md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-slate-600 to-blue-600 hover:cursor-pointer"> <Link to={'/'}>Global Speak</Link> </h1>
                    <p>Global Speak is the largest online learning Platform.<br />Providing services since 2001</p>
                </div>
                <div>
                    <span className="footer-title">Quick Links</span>
                    <a className="link link-hover">All Classes</a>
                    <a className="link link-hover">All Instructors</a>
                </div>
                <div>
                    <span className="footer-title">Find Us on</span>
                    <a className="link link-hover"><i className="fa-brands fa-facebook"></i> facebook</a>
                    <a className="link link-hover"><i className="fa-brands fa-twitter"></i> Twitter</a>
                    <a className="link link-hover"><i className="fa-brands fa-instagram"></i> Instagram</a>
                    <a className="link link-hover"><i className="fa-brands fa-youtube"></i> YouTube</a>
                </div>
                <div>
                    <span className="footer-title">Contact Us</span>
                    <a className="link link-hover"><i className="fa-solid fa-house"></i> DIU-hall,Ashulia,Savar,Dhaka-1216</a>
                    <a className="link link-hover"><i className="fa-solid fa-envelope"></i> example@email.com</a>
                    <a className="link link-hover"><i className="fa-solid fa-phone"></i> +880 16xxxxxxxxx</a>
                </div>

            </footer>
            <div className="bg-violet-600 h-[50px] flex items-center justify-center">
                <p className="text-center">Copyright © 2023 - All right reserved by Global Speak</p>
            </div>
        </div>
    );
};

export default Footer;