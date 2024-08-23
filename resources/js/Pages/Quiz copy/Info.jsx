import { Head } from "@inertiajs/react";
import QuizNav from "../../Components/QuizNav";
import QuizAlert from "../../Components/QuizAlert";
import "../../../css/info.css";
import QuizCard from "./QuizCard";
import AppLayout from "@/Layouts/AppLayout";

export default function Info({ quizCards }) {
    return (
        <div className="info_container">
            <AppLayout quiz_Cards={quizCards}>
                <QuizCard quiz_Cards={quizCards} />
            </AppLayout>
        </div>
    );
}
