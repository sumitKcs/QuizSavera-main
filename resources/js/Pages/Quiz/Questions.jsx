import { Head } from "@inertiajs/react";
import QuizLayout from "./QuizLayout";
import "../../../css/info.css";
import QuizQuestions from "./Partials/QuizQuestions";
export default function Questions({ questions }) {
    return (
        <>
            <Head title="Quiz" />
            <QuizLayout>
                <QuizQuestions questions={questions} />
            </QuizLayout>
        </>
    );
}
