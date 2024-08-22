import { Head } from "@inertiajs/react";
import QuizNav from "./Partials/QuizNav";
import QuizAlert from "./Partials/QuizAlert";
import QuizLayout from "./QuizLayout";
import QuizHeader from "./QuizHeader";
import "../../../css/info.css";
import QuizCard from "./QuizCard";
export default function Info({ quizCards }) {
    return (
        <div className="info_container">
            <Head title="Quiz Info" />
            {/* <QuizHeader /> */}
            <QuizNav />
            <QuizAlert />
            <QuizLayout quiz_Cards={quizCards}>
                <QuizCard quiz_Cards={quizCards} />
            </QuizLayout>
        </div>
    );
}
