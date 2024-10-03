import { Head } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import VerticalCard from "./Partials/VerticalCard";

export default function Index({ title, sidebars, menu_items, home_layout }) {
    console.log("sidebars", sidebars);
    console.log("menu_items", menu_items);
    console.log("home_layout", home_layout);
    return (
        <>
            <Head title={`${title} Quiz`} />
            <AppLayout menu_items={menu_items} sidebars={sidebars} leftBar={true} rightBar={false}>
                <div div className="flex flex-col justify-start items-start w-full gap-4">
                    {home_layout && home_layout.length > 0 && home_layout.map((item, index) => {

                        if (item.level == 2) {
                            return (
                                <>
                                    <h2 className="text-lg font-semibold">{item.mainItemName}</h2>
                                    <div key={item.sid} className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
                                        {
                                            item.subItems.map((subitem) => {
                                                return (
                                                    <VerticalCard key={subitem.sid} title={subitem.text1st} items={subitem.subItems} limit={5} />
                                                )
                                            })
                                        }
                                    </div>
                                </>
                            )
                        }
                        return (
                            <div key={item.sid}>
                                <h2>{item.mainItemName}</h2>
                            </div>
                        );
                    })}
                </div>
            </AppLayout>
        </>
    );
}
