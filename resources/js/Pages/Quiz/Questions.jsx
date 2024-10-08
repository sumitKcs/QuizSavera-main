import { Head } from "@inertiajs/react";
import "../../../css/info.css";
import QuizQuestions from "./Partials/QuizQuestions";
import AppLayout from "@/Layouts/AppLayout";
export default function Questions({ title, sidebars, menu_items, questions, quiz_title,footer, notificationItems }) {
    console.error("quiz/questions", questions);
    return (
        <>
            <Head title={`${title} Quiz`} />
            <AppLayout menu_items={menu_items} sidebars={sidebars} leftBar={true} rightBar={false} carousel={false} footer={footer} notificationItems={notificationItems}>
                <QuizQuestions questions={questions} title={quiz_title} itemsPerPageVal={3} />
            </AppLayout>
        </>
    );
}
