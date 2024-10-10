import "../../css/quizfooter.css";
import {FaFacebookF } from "react-icons/fa6";
import { FaTelegramPlane,FaWhatsapp, FaYoutube } from "react-icons/fa";



const QuizFooter = ({ items }) => {
    console.log("items", items);
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer_col_container">
               <div className="footer_about_container">
               <ul>
                    <li className="rounded-xl px-4 py-1 relative h-20">
                        <img src="/quizsavera_logo.png" alt="" className="absolute left-[-2rem] top-0" />
                    </li>
                    <li className="footer_col_heading">
                        <h1>About QuizSavera</h1>
                    </li>
                    <li className="w-full lg:max-w-96">
                        <p className="text-white w-full">QuizSavera is one of India’s leading Government exam preparation platforms. Our mission is to provide the best online learning platform for all government job aspirants.</p>
                    </li>
                    <li>
                        <span className="flex justify-start gap-2 w-full flex-wrap text-white text-3xl">
                            <a href="#"><FaFacebookF/></a>
                           <a href="#"> <FaTelegramPlane/></a>
                           <a href="#"> <FaWhatsapp/></a>
                           <a href="#"> <FaYoutube/></a>
                        </span>
                    </li>
                </ul>
               </div>

              <div className="footer_nav_container">
              {
                    items.map((item, index) => {
                        return (
                            <ul key={index}>
                                <li>
                                    <h3 className="footer_col_heading">{item.name}</h3>
                                </li>
                                {
                                    item.contents.map((item, index) => {
                                        return (
                                            <li>
                                                <a href={item?.link} className="footer_link  hover:underline hover:text-blue-600 hover:font-extrabold">{item?.name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })
                }
              </div>

            </div>
            <div className="footer_copyright">
                Copyright &copy; {currentYear} - {import.meta.env.VITE_APP_NAME}
            </div>
        </footer>
    );
};

export default QuizFooter;
