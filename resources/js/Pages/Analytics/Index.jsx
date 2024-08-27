import { Head } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import Piechart from "./Partials/Piechart";

export default function Index() {
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
                leftBar={false}
                rightBar={false}
                alert={false}
                carousel={false}
            >
                <div className="h-fit">
                    <h2 className="text-xl font-extrabold text-center my-8">
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
                </div>
            </AppLayout>
        </>
    );
}
