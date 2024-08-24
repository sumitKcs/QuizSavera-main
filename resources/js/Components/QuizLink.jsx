import "../../css/quizlink.css";
const QuizLink = ({ props }) => {
    return (
        <div className="flex flex-col items-start w-full ">
            <h4 className="w-full bg-[#10a19d] text-white rounded px-3 py-1 font-bold">
                {props.header}
            </h4>
            <nav className="flex flex-col items-start gap-4 w-full px-3 mb-2">
                {props.link_array.map((elem, index) => {
                    return (
                        <span
                            className="flex items-center gap-2"
                            key={index}
                        >
                            <div>
                                <img
                                    className=""
                                    src="/point.png"
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
    );
};

export default QuizLink;
