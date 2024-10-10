
import "../../../../css/quizquestions.css";
import SingleQuizQuestion from "./SingleQuizQuestion";
import React, { useState, useEffect } from "react";
import { Paginator } from 'primereact/paginator';


const QuizQuestions = ({ questions = [], title = '', itemsPerPageVal=5 }) => {

    // instead of moving by page, primereact paginator moves by items index
    // if itemsPerPage = 10, then the first question index is 0, second question index is 10, third question index is 20, etc.
    const [firstQuestionIndex, setFirstQuestionIndex] = useState(0);  //for each pagination change, change the first question index
    const [lang, setLang] = useState("en");
    const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageVal ?? 10);
    let questionNumber = firstQuestionIndex;


    const onPageChange = (event) => {
        setFirstQuestionIndex(event.first);
        setItemsPerPage(event.rows);
    };

    return (
        <div className="quiz_question_container shadow-lg border">
            {
                title !== '' ? <div className="qq_header">
                {title}
            </div> : <div className="w-full bg-gray-300 animate-pulse h-8 rounded-lg"></div>
            }
            <div className="flex flex-col gap-5 w-full">
                {/* select hindi and english language */}
                <div className="w-full flex justify-end">
                    <select
                        defaultValue={'en'}
                        name="select_lang"
                        id="select_lang"
                        className="w-32 px-2 py-0 rounded text-black "
                        onChange={(e) => {
                            // check if window has localStorage object
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
                {
                    questions?.length ? questions.slice(firstQuestionIndex, firstQuestionIndex + itemsPerPage).map((question, index) => {
                        return <SingleQuizQuestion key={index} questionData={question} index={questionNumber++} lang={lang} />
                    }) : (
                        Array(10).fill(0).map((item, index) => {
                            return <SingleQuizQuestion key={index}/>
                        })
                    )
                }
            </div>



            {
                questions.length > 0 && <div className="w-full rounded-md flex justify-center">
                <Paginator
                    first={firstQuestionIndex}
                    rows={itemsPerPage}
                    totalRecords={questions.length}
                    // rowsPerPageOptions={[3, 5, 10, 15]}
                    onPageChange={onPageChange}
                    alwaysShow={false}
                />
            </div>
            }



        </div>
    );
};

export default QuizQuestions;
