import { Head } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import VerticalCard from "./Partials/VerticalCard";

export default function Index({ title, sidebars, menu_items, views, isCategory, contentType }) {
    // console.log("sidebars", sidebars);
    // console.log("menu_items", menu_items);
    // console.log("views", views);
    // console.log("isCategory", isCategory);
    // console.log("contentType", contentType);

    const contentTypeList = ["quiz, mock"]
    // check if contentType is in contentTypeList
    if (contentType == 'mock' || contentType == 'quiz') {
        // redirect to quiz/play
        window.location.href = "/quiz/play"
    }
    return (
        <>
            <Head title={`${title} Quiz`} />
            <AppLayout menu_items={menu_items} sidebars={sidebars} leftBar={true} rightBar={false} carousel={false}>
                <div div className="flex flex-col justify-start items-start w-full gap-4">
                    {views && views.length > 0 && views.map((view, index) => {
                        const mainItemType = view.mainItemType;

                        console.log("mainItemType", mainItemType);

                        if (view.level == 2) {
                            if (view.mainItemType == 'bordered_rows_card_view_level_2') {
                                return (
                                    <>
                                        <h2 className="text-lg font-semibold text-center w-full pt-5">{isCategory == 0 ? view.mainItemName : title}</h2>
                                        <div key={view.sid} className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
                                            {
                                                view.subItems.map((subitem) => {
                                                    return (
                                                        <VerticalCard key={subitem.sid} title={subitem.text1st} items={subitem.subItems} limit={5} />

                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                )
                            }
                            if (view.mainItemType == 'two_columns_tabular_view_level_2') {
                                return (
                                    <>
                                        <h2 className="text-lg font-semibold text-center w-full pt-5">{isCategory == 0 ? view.mainItemName : title}</h2>
                                        <div key={view.sid} className="flex justify-center items-center w-full gap-4">

                                            <table className="table-auto p-2 w-full">
                                                <tbody className="">
                                                    {
                                                        view.subItems.map((subitem) => {
                                                            return (
                                                                <tr className="border border-black">
                                                                    <td className="border border-black border-r-1 p-5">{subitem.text1st}</td>
                                                                    <td className="p-5 flex flex-col md:flex-row">
                                                                        {
                                                                            subitem.subItems.map((subsubitem) => {
                                                                                const contentType = subsubitem.contentType ? subsubitem.contentType.toString().toLowerCase() : "";
                                                                                return (
                                                                                    <a href={`/quiz/${subsubitem?.sid}${contentType ? `/${contentType}` : ""}`} key={subsubitem.sid} className="underline text-blue-700 pr-3">{subsubitem.text1st}</a>
                                                                                )
                                                                            })
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>

                                            </table>

                                        </div>
                                    </>
                                )
                            }
                        }

                        if (view.level == 1) {
                            if (view.mainItemType == 'one_column_tabular_view_level_1') {
                                return (
                                    <>
                                        <h2 className="text-lg font-semibold text-center w-full pt-5">{isCategory == 0 ? view.mainItemName : title}</h2>
                                        <div key={view.sid} className="flex justify-center items-center w-full gap-4">
        
                                            <div className="p-2 w-full flex flex-wrap gap-4">
                                                {
                                                    view.subItems.map((subitem) => {
                                                        const contentType = subitem.contentType ? subitem.contentType.toString().toLowerCase() : "";
                                                        return (
                                                            <div className="w-full md:w-fit shadow-lg flex justify-start items-center border py-3 px-3 rounded gap-3 hover:bg-slate-500 bg-slate-700">
                                                                <div>
                                                                <svg
                                                                    fill="#ffffff"
                                                                    version="1.1"
                                                                    id="Capa_1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    width="18px"
                                                                    height="18px"
                                                                    viewBox="0 0 388.151 388.15"
                                                                    xmlSpace="preserve"
                                                                    className=" rotate-90"
                                                                >
                                                                    <g>
                                                                        <g>
                                                                            <path
                                                                                d="M294.442,388.15c1.393-4.576,2.918-9.344,3.938-11.8c24.241-58.511,21.491-120.33,20.417-140.134
                    c-0.745-13.367-2.054-24.655-9.518-33.615c-11.025-13.153-27.935-17.248-35.158-18.452c-4.588-11.529-11.602-19.11-20.867-22.584
                    c-3.621-1.36-7.572-2.048-11.715-2.048c-6.966,0-13.229,1.91-17.438,3.615c-5.566-10.104-12.994-16.369-22.098-18.651
                    c-2.498-0.633-5.143-0.952-7.854-0.952c-8.67,0-16.603,3.27-21.995,6.197c-1.402-9.334-6.29-84.8-9.185-126.176
                    C162.045,10.302,151.026,0,137.74,0h-0.018c-14.192,0-25.709,11.47-25.767,25.656c-0.435,89.7-2.765,178.297-3.312,191.718
                    c-8.713,3.963-23.89,9.253-30.643,18.41c-15.444,20.945-8.725,37.362-1.068,50.177c17.285,28.967,47.384,80.74,60.204,102.189
                    H294.442L294.442,388.15z"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                                </div>
                                                                <a href={`/quiz/${subitem?.sid}${contentType ? `/${contentType}` : ""}`} key={subitem.sid} className=" text-white pr-3">{subitem.text1st}</a>
                                                            </div>
                                                        )
                                                    })
                                                }
        
                                            </div>
        
                                        </div>
                                    </>
                                )
                            }
                        }

                        return (
                            <>
                                <h2 className="text-lg font-semibold text-center w-full pt-5">{isCategory == 0 ? view.mainItemName : title}</h2>
                                <div key={view.sid} className="flex justify-center items-center w-full gap-4">

                                    <div className="p-2 w-full flex flex-wrap gap-4">
                                        {
                                            view.subItems.map((subitem) => {
                                                const contentType = subitem.contentType ? subitem.contentType.toString().toLowerCase() : "";
                                                return (
                                                    <div className="w-full md:w-fit shadow-lg flex justify-start items-center border py-3 px-3 rounded gap-3 hover:bg-slate-500 bg-slate-700">
                                                        <div>
                                                        <svg
                                                            fill="#ffffff"
                                                            version="1.1"
                                                            id="Capa_1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            width="18px"
                                                            height="18px"
                                                            viewBox="0 0 388.151 388.15"
                                                            xmlSpace="preserve"
                                                            className=" rotate-90"
                                                        >
                                                            <g>
                                                                <g>
                                                                    <path
                                                                        d="M294.442,388.15c1.393-4.576,2.918-9.344,3.938-11.8c24.241-58.511,21.491-120.33,20.417-140.134
			c-0.745-13.367-2.054-24.655-9.518-33.615c-11.025-13.153-27.935-17.248-35.158-18.452c-4.588-11.529-11.602-19.11-20.867-22.584
			c-3.621-1.36-7.572-2.048-11.715-2.048c-6.966,0-13.229,1.91-17.438,3.615c-5.566-10.104-12.994-16.369-22.098-18.651
			c-2.498-0.633-5.143-0.952-7.854-0.952c-8.67,0-16.603,3.27-21.995,6.197c-1.402-9.334-6.29-84.8-9.185-126.176
			C162.045,10.302,151.026,0,137.74,0h-0.018c-14.192,0-25.709,11.47-25.767,25.656c-0.435,89.7-2.765,178.297-3.312,191.718
			c-8.713,3.963-23.89,9.253-30.643,18.41c-15.444,20.945-8.725,37.362-1.068,50.177c17.285,28.967,47.384,80.74,60.204,102.189
			H294.442L294.442,388.15z"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                        </div>
                                                        <a href={`/quiz/${subitem?.sid}${contentType ? `/${contentType}` : ""}`} key={subitem.sid} className=" text-white pr-3">{subitem.text1st}</a>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>

                                </div>
                            </>
                        )
                    })}
                </div>
            </AppLayout>
        </>
    );
}
