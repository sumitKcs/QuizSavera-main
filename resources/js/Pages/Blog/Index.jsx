import "../../../css/info.css";
import BlogCard from "./Partials/BlogCard";
import AppLayout from "@/Layouts/AppLayout";

export default function Index({ quizcards, sidebars, menu_items }) {
   
    return (
        <AppLayout menu_items={menu_items} sidebars={sidebars} leftBar={true} rightBar={false}>
            <BlogCard quizcards={quizcards} />
        </AppLayout>
    );
}
