import "../../../css/info.css";
import BlogCard from "./Partials/BlogCard";
import AppLayout from "@/Layouts/AppLayout";

export default function Info({ quizCards }) {
    return (
        <div className="info_container">
            <AppLayout quiz_Cards={quizCards}>
                <BlogCard quiz_Cards={quizCards} />
            </AppLayout>
        </div>
    );
}
