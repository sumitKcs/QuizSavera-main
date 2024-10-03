
import "../../../../css/quizquestions.css";
import SingleQuizQuestion from "./SingleQuizQuestion";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const QuizQuestions = ({ questions, title }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [lang, setLang] = useState("en");
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
                {title}
            </div>
            <div className="flex flex-col gap-5 w-full">
                {/* select hindi and english language */}
                <div className="w-full flex justify-end">
                    <select 
                    defaultValue={'en'}
                    name="select_lang" 
                    id="select_lang" 
                    className="w-32 px-2 py-0 rounded"
                    onChange={(e) => {
                        // check if window ahs localStorage object
                        if (window.localStorage) {
                            window.localStorage.setItem("language", e.target.value)
                        }

                        // set lang state
                        setLang(e.target.value)
                    }}
                    >
                        <option value="" disabled={true}>Select language</option>
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                    </select>
                </div>
                {displayedItems.map((question, index) => (
                    <SingleQuizQuestion key={index} questionData={question} index={index} lang={lang} />
                ))}
            </div>
            <ReactPaginate
                pageCount={Math.ceil(questions.length / itemsPerPage)}
                activeClassName={'item active '}
                breakClassName={'item break-me '}
                breakLabel={'...'}
                containerClassName={'pagination'}
                disabledClassName={'disabled-page'}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                nextClassName={"item next "}
                nextLabel="next >"
                onPageChange={handlePageChange}
                pageClassName={'item pagination-page '}
                previousClassName={"item previous"}
                previousLabel="< prev"
            />
        </div>
    );
};

export default QuizQuestions;
