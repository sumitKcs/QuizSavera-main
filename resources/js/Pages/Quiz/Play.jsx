import { Head } from "@inertiajs/react";
import PlayQuizQuestions from "./Partials/PlayQuizQuestions";

export default function Index({ questions, minutes }) {
    return (
        <>
            <Head title="Play | Quiz" />
            <PlayQuizQuestions questions={questions} minutes={minutes} />
        </>
    );
}
