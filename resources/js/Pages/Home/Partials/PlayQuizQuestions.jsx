import CountdownTimer from "@/Components/CountdownTimer";
import "../../../../css/quizquestions.css";
import React, { useState, useEffect } from "react";
import ConfirmationDialogue from "@/Components/ConfirmationDialogue";
import { router } from "@inertiajs/react";

const PlayQuizQuestions = ({ questions, minutes }) => {
    console.log("questions", questions);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [isDialogueOpen, setIsDialogueOpen] = useState(false);

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

    const handleSubmit = () => {
        setIsDialogueOpen(true);
        console.log("submitted");
    };

    const handleConfirmBtn = () => {
        let questionAnswerMap = [];
        // get questionAnswerMap from  localstorage
        if (window.localStorage) {
            questionAnswerMap = JSON.parse(
                localStorage.getItem("questionAnswerMap")
            );
        }

        //store qauestions in localstorage
        if (window.localStorage) {
            localStorage.setItem("quizQuestions", JSON.stringify(questions));
        }

        router.visit("/quiz/1/analytics", {
            method: "get",
        });

        // router.visit(url, { method: "post" });
    };

    const onTimerComplete = () => {
        setIsDialogueOpen(true);
    };

    const handleOptions = (e, index) => {
        let questionAnswerMap = [];
        // get questionAnswerMap from  localstorage
        if (window.localStorage) {
            questionAnswerMap = JSON.parse(
                localStorage.getItem("questionAnswerMap")
            );
        }

        questionAnswerMap[currentQuestion] = index;

        // save the questionAnswerMap in localstorage
        if (window.localStorage) {
            localStorage.setItem(
                "questionAnswerMap",
                JSON.stringify(questionAnswerMap)
            );
        }

        e.target.classList.add("bg-green-700", "text-white");
        const parentElement = e.target.parentElement;
        const options = Array.from(parentElement.children);
        options.forEach((option) => {
            if (option.innerText === e.target.innerText) return;

            option.classList.remove("bg-green-700", "text-white");
        });
        console.log(index, questionAnswerMap);
    };

    useEffect(() => {
        console.log("called");

        let questionAnswerMap = [];
        // get questionAnswerMap from  localstorage
        if (window.localStorage) {

            // if localstorage is not empty
            if (localStorage.getItem("questionAnswerMap")) {
                questionAnswerMap = JSON.parse(
                    localStorage.getItem("questionAnswerMap")
                );

                console.log("questionAnswerMap", questionAnswerMap);

                const selectedOption = questionAnswerMap[currentQuestion];
                console.log(
                    "currentQuestion: ",
                    currentQuestion,
                    " selectedoption: ",
                    selectedOption
                );
                const option_container = document.querySelector(".option_container");
                const options = Array.from(option_container.children);
                if (selectedOption !== -1) {
                    const selelectedElement = options[selectedOption];
                    selelectedElement.classList.add("bg-green-700", "text-white");
                    console.log("selelectedElement", selelectedElement);
                }

                console.log("option_container", option_container);
            }



        }


    }, [currentQuestion]);

    useEffect(() => {
        const questionAnswerMap = Array(questions.length).fill(-1);
        // save the questionAnswerMap in localstorage
        if (window.localStorage) {
            localStorage.setItem(
                "questionAnswerMap",
                JSON.stringify(questionAnswerMap)
            );
        }
    }, []);

    return (
        <>
            <div className="flex flex-col">
                <div className="bg-[#10a19d] flex justify-between p-2 text-white">
                    <h2 className="text-xl font-extrabold  text-white">
                        QuizSavera
                    </h2>
                    <div className="flex justify-center items-center gap-2">
                        <span>
                            <CountdownTimer
                                minutes={minutes}
                                onTimerComplete={onTimerComplete}
                            />
                        </span>
                    </div>

                    <div>
                        <button
                            className="px-2 font-extrabold rounded border"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div className="flex lg:grid lg:grid-cols-3 justify-center items-start gap-8 h-screen">
                    <div className="lg:col-start-2 mt-5">
                        <div className="flex flex-col gap-4 items-center lg:max-w-lg px-4">
                            <h4 className="text-lg font-extrabold">
                                {currentQuestion + 1}.
                                {questions[currentQuestion].question} What is
                                the capital of France?
                            </h4>
                            <div className="flex flex-col justify-start items-start self-start gap-4 w-full option_container">
                                {
                                    questions[currentQuestion]?.option1_eng &&
                                    <span className="flex justify-start items-center gap-2 border w-full py-2 px-2 cursor-pointer"
                                        onClick={(e) =>
                                            handleOptions(e, 0)
                                        }
                                    >
                                        <span className=" rounded-full border px-3 py-1">
                                            A
                                        </span>
                                        {questions[currentQuestion]?.option1_eng}
                                    </span>
                                }
                                 {
                                    questions[currentQuestion]?.option2_eng &&
                                    <span className="flex justify-start items-center gap-2 border w-full py-2 px-2 cursor-pointer"
                                        onClick={(e) =>
                                            handleOptions(e, 1)
                                        }
                                    >
                                        <span className=" rounded-full border px-3 py-1">
                                            B
                                        </span>
                                        {questions[currentQuestion]?.option2_eng}
                                    </span>
                                }
                                 {
                                    questions[currentQuestion]?.option3_eng &&
                                    <span className="flex justify-start items-center gap-2 border w-full py-2 px-2 cursor-pointer"
                                        onClick={(e) =>
                                            handleOptions(e, 2)
                                        }
                                    >
                                        <span className=" rounded-full border px-3 py-1">
                                            C
                                        </span>
                                        {questions[currentQuestion]?.option3_eng}
                                    </span>
                                }
                                 {
                                    questions[currentQuestion]?.option4_eng &&
                                    <span className="flex justify-start items-center gap-2 border w-full py-2 px-2 cursor-pointer"
                                        onClick={(e) =>
                                            handleOptions(e, 3)
                                        }
                                    >
                                        <span className=" rounded-full border px-3 py-1">
                                            D
                                        </span>
                                        {questions[currentQuestion]?.option4_eng}
                                    </span>
                                }
                                 {
                                    questions[currentQuestion]?.option5_eng &&
                                    <span className="flex justify-start items-center gap-2 border w-full py-2 px-2 cursor-pointer"
                                        onClick={(e) =>
                                            handleOptions(e, 4)
                                        }
                                    >
                                        <span className=" rounded-full border px-3 py-1">
                                            A
                                        </span>
                                        {questions[currentQuestion]?.option5_eng}
                                    </span>
                                }
                            </div>
                        </div>
                    </div>

                    <div className=" hidden lg:flex rounded-xl border-2 h-[700px] bg-[#10a19d]">
                        <div className="flex flex-wrap gap-8 justify-start w-full h-fit p-8">
                            {questions.map((item, index) => (
                                <button
                                    key={index}
                                    className={`${currentQuestion === index
                                        ? "bg-white text-black"
                                        : "text-white"
                                        }  font-semibold border rounded-xl size-10 flex justify-center items-center hover:bg-white hover:text-black hover:cursor-pointer`}
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
                            className={`${currentQuestion === 0
                                ? "bg-[#10a19d] opacity-50"
                                : "bg-[#10a19d]"
                                } px-4 py-1 rounded text-white flex gap-2 justify-center items-center `}
                            onClick={handlePrevBtn}
                            disabled={currentQuestion === 0}
                        >
                            &lt; Prev
                        </button>

                        <button
                            className={`${currentQuestion === questions.length - 1
                                ? "bg-[#10a19d] opacity-50"
                                : "bg-[#10a19d]"
                                } px-4 py-1 rounded text-white flex gap-2 justify-center items-center `}
                            onClick={handleNextBtn}
                        >
                            Next &gt;
                        </button>
                    </div>
                </div>
            </div>

            <ConfirmationDialogue
                isDialogueOpen={isDialogueOpen}
                setIsDialogueOpen={setIsDialogueOpen}
                handleConfirmBtn={handleConfirmBtn}
            />
        </>
    );
};

export default PlayQuizQuestions;
