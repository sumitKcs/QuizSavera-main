import { Head } from "@inertiajs/react";
import PlayQuizQuestions from "./Partials/PlayQuizQuestions";

export default function Index({ questions }) {
    return (
        <>
            <Head title="Play | Quiz" />
            <PlayQuizQuestions questions={questions}/>
        </>
    );
}
