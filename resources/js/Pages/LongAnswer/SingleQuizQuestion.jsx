import "../../../css/quizquestions.css";
import { useState } from "react";

const SingleQuizQuestion = ({ questionData }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [showComment, setShowComment] = useState(false);
    const [showReport, setShowReport] = useState(false);

    const toggleAnswer = () => setShowAnswer(!showAnswer);
    const toggleComment = () => setShowComment(!showComment);
    const toggleReport = () => setShowReport(!showReport);

    const containerStyle = {
        width: "100%",
    };

    const listStyle = {
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        marginBottom: "5px",
    };

    const buttonStyle = {
        borderRadius: ".5rem",
        padding: ".5rem",
        cursor: "pointer",
        backgroundColor: "#F0F0F0",
    };

    const textareaStyle = {
        width: "100%",
        borderRadius: "1rem",
        resize: "none",
        padding: "1rem",
        textAlign: "left",
    };

    return (
        <div
            itemProp="question"
            itemScope=""
            itemType="http://schema.org/Question"
            style={containerStyle}
            className=""
        >
            <h4
                itemProp="name"
                style={{
                    marginBottom: ".4rem",
                    width: "100%",
                    fontWeight: "900",
                }}
            >
                {questionData.quizQuestion}
            </h4>


            <div className="flex gap-4">
                <button
                    title="view answer"
                    style={buttonStyle}
                    className="quiz_answer_button"
                    onClick={toggleAnswer}
                >
                    <img src="./answer.png" alt="view answer" width="25px" />
                </button>
                <button
                    title="comment"
                    style={buttonStyle}
                    className="quiz_comment_button"
                    onClick={toggleComment}
                >
                    <img src="./comments.png" alt="comment" width="25px" />
                </button>
                <button
                    title="report this question"
                    style={buttonStyle}
                    className="quiz_report_button"
                    onClick={toggleReport}
                >
                    <img src="./warning.png" alt="report" width="25px" />
                </button>
            </div>

            {showAnswer && (
                <div className=" hidden showAns">
                    <span style={{ fontWeight: "bold" }}>
                        {/* <span>Answer: </span> */}
                        {questionData.quizAnswer}
                    </span>
                    <br />
                    <br />
                    <p>{questionData.quizExplanation}</p>
                </div>
            )}

            {showReport && (
                <div className="hidden showRpt mt-5">
                    <textarea
                        name={`quiz_report_textarea_${questionData.id}`}
                        id={`quiz_report_textarea_${questionData.id}`}
                        cols="10"
                        rows="3"
                        style={textareaStyle}
                    >
                        What do you want to report about?
                    </textarea>
                    <button className="submit_btn">Submit</button>
                </div>
            )}

            {showComment && (
                <div className="hidden showCmt mt-5">
                    <textarea
                        name={`quiz_comment_textarea_${questionData.id}`}
                        id={`quiz_comment_textarea_${questionData.id}`}
                        cols="10"
                        rows="3"
                        style={textareaStyle}
                    >
                        What do you want to write about? Name: Email:
                    </textarea>
                    <button className="submit_btn">Submit</button>
                </div>
            )}
        </div>
    );
};

export default SingleQuizQuestion;
