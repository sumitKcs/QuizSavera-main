import { Head } from "@inertiajs/react";
import QuizNav from "../../Components/QuizNav";
import QuizAlert from "../../Components/QuizAlert";
import QuizLayout from "./QuizLayout";
import QuizHeader from "./QuizHeader";
import "../../../css/info.css";
import QuizBlog from "./QuizBlog";
export default function Questions() {
    return (
        <div className="info_container">
            {/* <QuizHeader /> */}
            <QuizNav />
            <QuizAlert />
            <QuizLayout>
                <QuizBlog />
            </QuizLayout>
        </div>
    );
}
