import "../../../css/quizfooter.css";
const QuizFooter = () => {
    let footerStyle = {
        padding: "2rem 0 5rem 0",
    };
    let footerStyle2 = {
        color: "rgba(255, 255, 255, 0.9)",
        paddingBottom: "3rem",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    };
    return (
        <footer>
            <div className="footer_wrapper" style={footerStyle}>
                <ul>
                    <li>
                        <h3 className="footer_col_heading">Company</h3>
                    </li>
                    <li>
                        <a href="/about">
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            <span>Career</span>
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            <span>Team</span>
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            <span>About</span>
                        </a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <h3 className="footer_col_heading">Contact us</h3>
                    </li>
                    <li>
                        <a href="/about">
                            <span>Help & Support</span>
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            <span>Partener with us</span>
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            <span>rRde with Us</span>
                        </a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <h3 className="footer_col_heading">Legal</h3>
                    </li>
                    <li>
                        <a href="/about">
                            <span>Terms & Condition</span>
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            <span>Cookie Policy</span>
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            <span>privacy Policy</span>
                        </a>
                    </li>
                </ul>
            </div>
            <span className="text_white self_center" style={footerStyle2}>
                &copy; 2023 Comebyte
            </span>
        </footer>
    );
};

export default QuizFooter;
