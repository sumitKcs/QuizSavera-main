import "../../../../css/quizquestions.css";
import React, { useState, useEffect } from "react";

const PlayQuizQuestions = ({ questions }) => {
    console.log("questions", questions);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNextBtn = () => {
        if (currentQuestion < questions.length - 1)
            setCurrentQuestion(currentQuestion + 1);
    };

    const handlePrevBtn = () => {
        if (currentQuestion >= 0) setCurrentQuestion(currentQuestion - 1);
    };

    const handleQuestionNav = (index) => {
        setCurrentQuestion(index);
    };

    return (
        <div className="flex flex-col">
            <div className="bg-[#10a19d] flex justify-between p-2 text-white">
                <h2 className="text-xl font-extrabold  text-white">
                    QuizSavera
                </h2>
                <div className="flex justify-center items-center gap-2">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </span>
                    <span>10:00</span>
                </div>

                <div>
                    <button className="px-2 font-extrabold rounded border">
                        Submit
                    </button>
                </div>
            </div>
            <div className="flex lg:grid lg:grid-cols-3 justify-center items-start gap-8 h-screen">
                <div className="lg:col-start-2 mt-5">
                    <div className="flex flex-col gap-4 items-center lg:max-w-lg px-4">
                        <h4 className="text-lg font-extrabold">
                            {currentQuestion + 1}.
                            {questions[currentQuestion].question} What is the
                            capital of France?
                        </h4>
                        <div className="flex flex-col justify-start items-start self-start gap-4">
                            {questions[currentQuestion].options.map(
                                (option, index) => (
                                    <span
                                        key={index}
                                        className="flex justify-center items-center gap-2"
                                    >
                                        <input
                                            type="radio"
                                            name={`question_${currentQuestion}`}
                                            id={`question_${currentQuestion}`}
                                            value={option}
                                        />{" "}
                                        {option}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div className=" hidden lg:flex rounded-xl border-2 h-[700px] bg-[#10a19d]">
                    <div className="flex flex-wrap gap-8 justify-start w-full h-fit p-8">
                        {questions.map((item, index) => (
                            <button
                                key={index}
                                className={`${currentQuestion === index ? "bg-white text-black" : "text-white"}  font-semibold border rounded-xl size-10 flex justify-center items-center hover:bg-white hover:text-black hover:cursor-pointer`}
                                onClick={() => handleQuestionNav(index)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-8 absolute bottom-10 left-0 w-full flex justify-center items-center gap-4">
                <div className=" w-80 lg:w-1/3 flex justify-between px-4 gap-8">
                    <button
                        className="bg-[#10a19d] px-4 py-1 rounded text-white flex gap-2 justify-center items-center"
                        onClick={handlePrevBtn}
                    >
                        &lt; Prev
                    </button>
                    <button
                        className="bg-[#10a19d] px-4 py-1 rounded text-white flex gap-2 justify-center items-center"
                        onClick={handleNextBtn}
                    >
                        Next &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayQuizQuestions;
