import { Head } from "@inertiajs/react";
import "../../../css/info.css";
import QuizQuestions from "./Partials/QuizQuestions";
import AppLayout from "@/Layouts/AppLayout";
export default function Questions({ questions }) {
    return (
        <>
            <Head title="Quiz" />
            <AppLayout>
                <QuizQuestions questions={questions} />
            </AppLayout>
        </>
    );
}
