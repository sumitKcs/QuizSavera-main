import { Head } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import VerticalCard from "./Partials/VerticalCard";

export default function Index({ data }) {
    return (
        <>
            <Head title="Quiz" />
            <AppLayout>
                <VerticalCard data={data} />
            </AppLayout>
        </>
    );
}
