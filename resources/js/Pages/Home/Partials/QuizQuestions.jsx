
import "../../../../css/quizquestions.css";
import SingleQuizQuestion from "./SingleQuizQuestion";
import React, { useState, useEffect } from "react";

const QuizQuestions = ({ questions }) => {
    console.log("questions", questions)

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Adjust this value as needed


    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
        console.log("selected", selected + 1)
    };

    const [displayedItems, setDisplayedItems] = useState([])

    useEffect(() => {
        const items = questions.slice(
            currentPage * itemsPerPage,
            (currentPage + 1) * itemsPerPage
        );
        setDisplayedItems(items)
    }, [currentPage])

    return (
        <div className="quiz_question_container">
            <div className="qq_header">
                Current Affairs Quiz - November, 2023
            </div>
            <div className="flex flex-col gap-10 w-full">
                {displayedItems.map((question, index) => (
                    <SingleQuizQuestion key={index} questionData={question} />
                ))}
            </div>
        </div>
    );
};

export default QuizQuestions;
