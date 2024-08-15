const QuizAlert = () => {
    let marqueeStyle = {
        background: "rgba(192, 192, 192, 0.621)",
        padding: "1rem 0",
    };
    return (
        <div>
            <marquee behavior="" direction="" style={marqueeStyle}>
                <div className=" flex items-center gap-7">
                    <div className="flex items-center ">
                        <span>
                            <img src="New64.gif" alt="new icon" width="30px" />
                        </span>
                        <span>Hiring alert!</span>
                    </div>
                    <div className="flex items-center ">
                        <span>
                            <img src="New64.gif" alt="new icon" width="30px" />
                        </span>
                        <span>Hiring alert!</span>
                    </div>
                    <div className="flex items-center ">
                        <span>
                            <img src="New64.gif" alt="new icon" width="30px" />
                        </span>
                        <span>Hiring alert!</span>
                    </div>
                    <div className="flex items-center ">
                        <span>
                            <img src="New64.gif" alt="new icon" width="30px" />
                        </span>
                        <span>Hiring alert!</span>
                    </div>
                </div>
            </marquee>
        </div>
    );
};

export default QuizAlert;
