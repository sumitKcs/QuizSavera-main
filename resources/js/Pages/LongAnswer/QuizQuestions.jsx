import "../../../css/quizquestions.css";
import SingleQuizQuestion from "./SingleQuizQuestion";
import React, { useState } from "react";
const QuizQuestions = () => {
    let quizQuestions = [
        {
            quizQuestion: "What is the capital of France?",
            quizExplanation:
                "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
        },
        {
            quizQuestion: "What is the capital of France?",
            quizExplanation:
                "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
        },
        {
            quizQuestion: "What is the capital of France?",
            quizExplanation:
                "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
        },
        {
            quizQuestion: "What is the capital of France?",
            quizExplanation:
                "Speed = 60 x (5/18) m/sec = (50/3) m/sec.Length of the train = (Speed x Time).Length of the train = (50/3) x 9 m = 150 m.",
        },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };
    const displayedItems = quizQuestions.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <div className="quiz_question_container">
            <div className="qq_header">
                Long Answers
            </div>
            <div className="flex flex-col gap-10">
                {displayedItems.map((question, index) => (
                    <SingleQuizQuestion key={index} questionData={question} />
                ))}
            </div>
        </div>
    );
};

export default QuizQuestions;
