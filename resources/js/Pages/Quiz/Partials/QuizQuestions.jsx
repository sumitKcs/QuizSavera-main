
import "../../../../css/quizquestions.css";
import SingleQuizQuestion from "./SingleQuizQuestion";
import React, { useState, useEffect } from "react";
import { Paginator } from 'primereact/paginator';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/primereact.min.css'
// import 'primeicons/primeicons.css';


const  QuizQuestions = ({ questions, title }) => {

    const [currentPage, setCurrentPage] = useState(0);
    const [lang, setLang] = useState("en");
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [questionNumber, setQuestionNumber] = useState(1);

    console.log("questions", questions);


    const onPageChange = (event) => {
        setCurrentPage(event.first);
        setItemsPerPage(event.rows);
    };

    return (
        <div className="quiz_question_container shadow-lg border">
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
                {questions.slice( currentPage, currentPage + itemsPerPage).map((question, index) => {
                    return  <SingleQuizQuestion key={index} questionData={question} index={question.id} lang={lang} />
                })}
            </div>



            <Paginator
                first={currentPage}
                rows={itemsPerPage}
                totalRecords={questions.length}
                // rowsPerPageOptions={[3, 5, 10, 15]}
                onPageChange={onPageChange}
                alwaysShow={false}
            />



        </div>
    );
};

export default QuizQuestions;
