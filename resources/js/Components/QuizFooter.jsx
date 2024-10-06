import "../../css/quizfooter.css";
const QuizFooter = ({ items }) => {
    console.log("items", items);
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer_col_container">

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
                                                <a href={item?.link} className="footer_link  hover:underline">{item?.name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })
                }

            </div>
            <div className="footer_copyright">
                Copyright &copy; {currentYear} - {import.meta.env.VITE_APP_NAME}
            </div>
        </footer>
    );
};

export default QuizFooter;
