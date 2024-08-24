import "../../../css/info.css";
import BlogCard from "./Partials/BlogCard";
import AppLayout from "@/Layouts/AppLayout";

export default function Index({ quizCards }) {
    return (
        <AppLayout quiz_Cards={quizCards}>
            <BlogCard quiz_Cards={quizCards} />
        </AppLayout>
    );
}
