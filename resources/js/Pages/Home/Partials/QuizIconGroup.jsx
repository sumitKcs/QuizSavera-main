import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import "../../../../css/quizicongroup.css";
const QuizIconGroup = () => {
    return (
        <div
            className="text-xl text-white  grid grid-cols-6 gap-0 "
            style={{ width: "100%" }}
        >
            <a
                href=""
                className="w-full text-center py-2 whatsapp-icon-cont icon-hover"
            >
                <FaWhatsapp className="whatsapp-icon" />
            </a>
            <a
                href=""
                className="w-full text-center py-2 twitter-icon-cont icon-hover"
            >
                <FaXTwitter className="twitter-icon" />
            </a>
            <a
                href=""
                className="w-full text-center py-2 facebook-icon-cont icon-hover"
            >
                <FaFacebook className="facebook-icon" />
            </a>
            <a
                href=""
                className="w-full text-center py-2 telegram-icon-cont icon-hover"
            >
                <FaTelegram className="telegram-icon" />
            </a>
            <a
                href=""
                className="w-full text-center py-2 messenger-icon-cont icon-hover"
            >
                <FaFacebookMessenger className="messenger-icon" />
            </a>
            <a
                href=""
                className="w-full text-center py-2 printer-icon-cont
                    icon-hover"
            >
                <AiFillPrinter className="printer-icon" />
            </a>
        </div>
    );
};

export default QuizIconGroup;
