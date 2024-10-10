import { useEffect } from "react";
import "../../../../css/quizquestions.css";
import { useState } from "react";

const SingleQuizQuestion = ({ questionData = {}, index, lang }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [showComment, setShowComment] = useState(false);
    const [showReport, setShowReport] = useState(false);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [solution, setSolution] = useState("");
    const [options, setOptions] = useState([]);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
        setShowComment(false);
        setShowReport(false);
    };
    const toggleComment = () => {
        setShowComment(!showComment)
        setShowAnswer(false);
        setShowReport(false);
    };
    const toggleReport = () => {
        setShowReport(!showReport)
        setShowComment(false);
        setShowAnswer(false);
    };

    const options_eng = []
    const options_hin = []

    if(questionData.question_eng) {
        options_eng.push(questionData.option1_eng, questionData.option2_eng, questionData.option3_eng, questionData.option4_eng, questionData.option5_eng);
    }
    if(questionData.question_hin) {
        options_hin.push(questionData.option1_hin, questionData.option2_hin, questionData.option3_hin, questionData.option4_hin, questionData.option5_hin);
    }



    useEffect(() => {
        if (lang == 'en') {
            setQuestion(questionData.question_eng ?? "");
            setAnswer(questionData.answer_eng ?? "");
            setSolution(questionData.solution_eng ?? "");
            setOptions(options_eng ?? []);
        } else {
            setQuestion(questionData.question_hin ?? "");
            setAnswer(questionData.answer_hin ?? "");
            setSolution(questionData.solution_hin);
            setOptions(options_hin ?? []);
        }
    }, [lang]);


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
            className="quiz_wrapper"
        >
            {
                question ? <h4
                    itemProp="name"
                    style={{
                        marginBottom: ".4rem",
                        width: "100%",
                        fontWeight: "900",
                    }}
                >
                    {index + 1}. {question}
                </h4> : <div className="w-full bg-gray-300 animate-pulse h-8 rounded-lg"></div>
            }

            <ul style={listStyle}>
                {(questionData?.option1_eng || questionData?.option1_hin) ?
                    options.map((option, i) => {
                        return option !== 'null' ? (
                            <li
                                key={i}
                                itemProp="suggestedAnswer"
                                itemScope=""
                                itemType="http://schema.org/Answer"
                                className="qq_option"
                            >
                                <input
                                    type="radio"
                                    name={`q${questionData.id}`}
                                    id={`q${questionData.id}_option${i + 1}`}
                                    value={option}
                                />
                                <label
                                    htmlFor={`q${questionData.id}_option${i + 1}`}
                                    itemProp="text"
                                >
                                    {String.fromCharCode(65 + i)}. {option}
                                </label>
                            </li>
                        ) : ""
                    }) : (
                        <div className="flex flex-col gap-2 mt-6 border-b-2 border-gray-300 pb-2">
                            <div className="bg-gray-300 w-56 h-4 animate-pulse rounded-lg"></div>
                            <div className="bg-gray-300 w-72 h-4 animate-pulse rounded-lg"></div>
                            <div className="bg-gray-300 w-56 h-4 animate-pulse rounded-lg"></div>
                            <div className="bg-gray-300 w-44 h-4 animate-pulse rounded-lg"></div>
                        </div>
                    )

                }
            </ul>

            {
                options.length > 0 ?
                 <div className="flex flex-col gap-2 mt-6 border-b-2 border-gray-300 pb-2">
                    {showAnswer && (
                        <div className="hidden showAns border rounded-xl p-2">
                            <span className=" font-bold">
                                <span>Answer: </span>
                                {questionData?.answer?.toUpperCase()}
                            </span>
                            <br />
                            <br />
                            <p><span className="font-bold">Solution: </span>{lang == 'eng' ? questionData?.solution_eng : questionData?.solution_hin}</p>
                        </div>
                    )}

                    {showReport && (
                        <div className="hidden showRpt">
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
                        <div className="hidden showCmt border">
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

                    <div className="quiz_action_buttons_cont">
                        <button
                            title="view answer"
                            style={buttonStyle}
                            className="quiz_answer_button"
                            onClick={toggleAnswer}
                        >
                            <img src="/answer.png" alt="view answer" width="25px" />
                        </button>
                        <button
                            title="comment"
                            style={buttonStyle}
                            className="quiz_comment_button"
                            onClick={toggleComment}
                        >
                            <img src="/comments.png" alt="comment" width="25px" />
                        </button>
                        <button
                            title="report this question"
                            style={buttonStyle}
                            className="quiz_report_button"
                            onClick={toggleReport}
                        >
                            <img src="/warning.png" alt="report" width="25px" />
                        </button>
                    </div>
                </div> : (<></>)
            }


        </div>
    );
};

export default SingleQuizQuestion;
