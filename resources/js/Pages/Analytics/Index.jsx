import { Head } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import Piechart from "./Partials/Piechart";
import { useState } from "react";

export default function Index() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    let questionAnswerMap = [];
    let questions = [];
    // get questionAnswerMap from  localstorage
    if (window.localStorage) {
        questionAnswerMap = JSON.parse(
            localStorage.getItem("questionAnswerMap")
        );

        questions = JSON.parse(localStorage.getItem("quizQuestions"));
    }

    const optionMap = new Map();
    optionMap.set("A", 0);
    optionMap.set("B", 1);
    optionMap.set("C", 2);
    optionMap.set("D", 3);
    optionMap.set("E", 4);

    console.log(
        "Answer 1: ",
        optionMap.get(questions[0].answer),
        " selected answer: ",
        questionAnswerMap[0]
    );
    console.log(
        "Answer 2: ",
        optionMap.get(questions[1].answer),
        " selected answer: ",
        questionAnswerMap[1]
    );

    let unattempted = 0;
    let correct = 0;
    let incorrect = 0;

    // find correct answers
    questionAnswerMap.forEach((answer, index) => {
        if (answer == -1) unattempted++;
        else if (
            optionMap.get(questions[index].answer) == questionAnswerMap[index]
        )
            correct++;
        else incorrect++;
    });

    return (
        <>
            <Head title="Quiz" />
            <AppLayout
                leftBar={true}
                rightBar={false}
                alert={false}
                carousel={false}
            >
                <div className="h-fit flex flex-col gap-8">
                    <h2 className="text-xl font-extrabold text-center">
                        Quiz Analytics
                    </h2>

                    <div className="h-96">
                        <Piechart
                            unattempted={unattempted}
                            correct={correct}
                            incorrect={incorrect}
                            total={unattempted + correct + incorrect}
                        />
                    </div>

                    <div className="h-fit p-2 flex flex-col gap-4">
                        <h2 className="text-xl font-extrabold text-center">
                            Solutions
                        </h2>
                        <div className="flex gap-2 border-b-2 py-2 overflow-x-auto">
                            {questions.map((question, index) => {
                                return (
                                    <button
                                        key={index}
                                        className=" bg-slate-700 px-3 py-1 rounded text-white"
                                        onClick={() =>
                                            setCurrentQuestion(index)
                                        }
                                    >
                                        {index + 1}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>{questions[currentQuestion].question}</p>
                            <div className="flex flex-col justify-start items-start self-start gap-4 w-full option_container">
                                {questions[currentQuestion].options.map(
                                    (option, index) => {
                                        const alpha = [
                                            "A",
                                            "B",
                                            "C",
                                            "D",
                                            "E",
                                            "F",
                                        ];

                                        // optionMap.get(questions[index].answer) == questionAnswerMap[index]

                                        const selectedAnswer =
                                            questionAnswerMap[currentQuestion];

                                        const correctAnswer = optionMap.get(
                                            questions[currentQuestion].answer
                                        );

                                        let isCorrect = false;

                                        if (selectedAnswer === correctAnswer)
                                            isCorrect = true;

                                        console.log("correct", correct);

                                        return (
                                            <p
                                                key={
                                                    option +
                                                    "_" +
                                                    currentQuestion
                                                }
                                                className={`relative flex justify-start items-center gap-2 border w-full py-2 px-2 cursor-pointer ${
                                                    selectedAnswer === index &&
                                                    isCorrect
                                                        ? "bg-green-700 text-white"
                                                        : selectedAnswer ===
                                                              index &&
                                                          !isCorrect
                                                        ? "bg-red-700 text-white"
                                                        : correctAnswer ===
                                                          index
                                                        ? "bg-green-700 text-white"
                                                        : ""
                                                }`}
                                            >
                                                <span className=" rounded-full border px-3 py-1">
                                                    {alpha[index]}
                                                </span>
                                                <span>
                                                    <span className="absolute top-2 left-14">
                                                        {option}
                                                    </span>
                                                    {selectedAnswer === index &&
                                                    isCorrect ? (
                                                        <span
                                                            className={`absolute top-8 left-14 text-xs whitespace-nowrap`}
                                                        >
                                                            Correct Answer
                                                        </span>
                                                    ) : selectedAnswer ===
                                                          index &&
                                                      !isCorrect ? (
                                                        <span
                                                            className={`absolute top-8 left-14 text-xs whitespace-nowrap`}
                                                        >
                                                            Incorrect Answer
                                                        </span>
                                                    ) : correctAnswer ===
                                                      index ? (
                                                        <span
                                                            className={`absolute top-8 left-14 text-xs whitespace-nowrap`}
                                                        >
                                                            Correct Answer
                                                        </span>
                                                    ) : (
                                                        ""
                                                    )}
                                                </span>
                                                {selectedAnswer === index && (
                                                    <span className="flex-1 flex justify-end items-center text-sm">
                                                        Your answer
                                                    </span>
                                                )}
                                            </p>
                                        );
                                    }
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className=" font-extrabold">Explanation:</h2>
                                <p>{questions[currentQuestion].explanation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
