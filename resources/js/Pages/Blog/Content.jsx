import { Head } from "@inertiajs/react";
import BlogContent from "./Partials/BlogContent";
import AppLayout from "@/Layouts/AppLayout";
import "../../../css/quizblog.css";
const Content = ({id}) => {
    return (
        <>
            <Head title="Quiz Savera|Post Title" />
            <AppLayout>
                <BlogContent id={id} />
            </AppLayout>
        </>
    );
};

export default Content;
