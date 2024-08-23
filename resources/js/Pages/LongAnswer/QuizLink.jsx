import "../../../css/quizlink.css";
const QuizLink = ({ props }) => {
    return (
        <div className="sidebar ">
            <div className="flex flex-col items-start gap-4 w-full ">
                <h4 className="w-full quiz_link_header p-3 font-bold">
                    {props.header}
                </h4>
                <nav className="flex flex-col items-start gap-4 w-full p-3">
                    {props.link_array.map((elem, index) => {
                        return (
                            <span
                                className="flex items-center gap-2"
                                key={index}
                            >
                                <div>
                                    <img
                                        className=""
                                        src="./point.png"
                                        alt="finger_point"
                                        width="14px"
                                    />
                                </div>
                                <a href="/link" className="sidebar_link">
                                    {elem}
                                </a>
                            </span>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default QuizLink;
