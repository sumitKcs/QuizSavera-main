import { Head } from "@inertiajs/react";
import QuizNav from "./Partials/QuizNav";
import QuizAlert from "./Partials/QuizAlert";
import QuizLayout from "./QuizLayout";
import QuizHeader from "./QuizHeader";
import "../../../css/info.css";
import QuizBlog from "./QuizBlog";
export default function Questions() {
    return (
        <div className="info_container">
            <Head title="Quiz Info" />
            <QuizHeader />
            <QuizNav />
            <QuizAlert />
            <QuizLayout>
                <QuizBlog />
            </QuizLayout>
        </div>
    );
}
