import { Head } from "@inertiajs/react";
import QuizNav from "../../Components/QuizNav";
import QuizAlert from "../../Components/QuizAlert";
import QuizLayout from "./QuizLayout";
import QuizHeader from "./QuizHeader";
import "../../../css/info.css";
import QuizQuestions from "./QuizQuestions";
export default function Questions({ questions }) {
    return (
        <div className="info_container">
            <Head title="Quiz" />
            {/* <QuizHeader /> */}
            <QuizNav />
            <QuizAlert />
            <QuizLayout>
                <QuizQuestions questions={questions} />
            </QuizLayout>
        </div>
    );
}
