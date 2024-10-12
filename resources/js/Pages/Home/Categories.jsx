import AppLayout from "@/Layouts/AppLayout";
import VerticalCard from "./Partials/VerticalCard";
import { useEffect, useState } from "react";
import {useHomeLayoutStore} from "@/store/homeLayout";
import { Link } from '@inertiajs/react';


export default function Categories({cat_name, cat_id}) {
    const { homeLayout, setMenu, setNotifications, setSidebars, setFooter } = useHomeLayoutStore();
    const { menu_items, notifications, sidebars, footer } = homeLayout


    // const [responseData, setResponseData] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [keywords, setKeywords] = useState('');
    const [content, setContent] = useState('');
    const [recommended_content, setRecommendedContent] = useState('');
    const [views, setViews] = useState([]);
    const [isCategory, setIsCategory] = useState(1);

    useEffect(() => {
        const url = import.meta.env.VITE_SERVER_URL + '/api/' + import.meta.env.VITE_API_VERSION + '/get-web-page-data'
        const postData = async () => {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({  
                'packageName' : import.meta.env.VITE_PACKAGE_NAME,
                'catId': cat_id,
                'device': 'web'
            }),
          });
          const result = await response.json();
          setTitle(result.appName);
          setViews(result.items);
          setDescription(result.description);
          setKeywords(result.keywords);
          setContent(result.content);
          setRecommendedContent(result.recommended_content);

           // if menu_items, notifications, sidebars, footer are empty, then set them to result values
           if (menu_items.length == 0) {
            setMenu(result.menuItems);
            setNotifications(result.notificationItems);
            setSidebars(result.sidebars);
            setFooter(result.footer);
          }

        };
    
        postData();
      }, []);



    return (
        <>
              <AppLayout title={title} description={description} keywords={keywords} leftBar={true} rightBar={false} carousel={false}>
            <div div className="flex flex-col justify-start items-center w-full gap-4">
                    {/* category views */}
                    {views && views.length > 0 ? views.map((view, index) => {
                        const mainItemType = view.mainItemType;

                        console.log("mainItemType", mainItemType);

                        if (view.level == 2) {
                            if (view.mainItemType == 'bordered_rows_card_view_level_2') {
                                return (
                                    <>
                                        {/* category name */}
                                        <h6 className="text-lg font-semibold text-center w-full pt-5">{isCategory == 0 ? view.mainItemName : title}</h6>
                                        {/* category description */}
                                        {
                                            description && description.length > 0 &&
                                            <p className="w-full p-5" dangerouslySetInnerHTML={{ __html: description }}></p>
                                        }
                                        <div key={view.sid} className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
                                            {
                                                view.subItems.map((subitem) => {
                                                    return (
                                                        <VerticalCard key={subitem.sid} title={subitem.text1st} categoryId={subitem.mid} items={subitem.subItems} limit={2} />
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
                                      {/* category name */}
                                      <h6 className="font-semibold text-center w-full pt-5">{isCategory == 0 ? view.mainItemName : title}</h6>
                                        {/* category description */}
                                        {
                                            description && description.length > 0 &&
                                            <div className="w-full p-5" dangerouslySetInnerHTML={{ __html: description }}></div>
                                        }
                                        <div key={view.sid} className="flex justify-center items-center w-full gap-4">

                                            <table className="table-auto p-2 w-full">
                                                <tbody className="">
                                                    {
                                                        view.subItems.map((subitem) => {
                                                            return (
                                                                <tr className="border border-white">
                                                                    <td className="border border-white border-r-1 p-5">{subitem.text1st}</td>
                                                                    <td className="p-5">
                                                                        <ul className="list-disc p-5 lg:columns-2">
                                                                            {
                                                                                subitem.subItems.map((subsubitem) => {
                                                                                    const contentType = subsubitem.contentType ? subsubitem.contentType.toString().toLowerCase() : "";
                                                                                    return (
                                                                                        <li>
                                                                                            <Link href={`/${subsubitem?.text1st.toLowerCase()}/${subsubitem?.sid}${contentType ? `/${contentType}` : ""}`} key={subsubitem.sid} className="underline text-orange-500  font-extrabold pr-3 hover:text-blue-600 hover:font-extrabold">{subsubitem.text1st}</Link>
                                                                                        </li>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ul>
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
                ): (
                    Array(10).fill(0).map((item, index) => {
                        return (
                            <>
                              {/* category name */}
                              <h1 className="w-full h-10 bg-gray-300 animate-pulse pt-5 rounded-lg"></h1>
                              <p className="w-full h-3 bg-gray-300 animate-pulse pt-5 rounded-lg"></p>
                              <p className="w-full h-3 bg-gray-300 animate-pulse pt-5 rounded-lg"></p>
                              <p className="w-full h-3 bg-gray-300 animate-pulse pt-5 rounded-lg"></p>
                              <p className="w-full h-3 bg-gray-300 animate-pulse pt-5 rounded-lg"></p>
                              <p className="w-full h-3 bg-gray-300 animate-pulse pt-5 rounded-lg"></p>
                              <p className="w-full h-3 bg-gray-300 animate-pulse pt-5 rounded-lg"></p>
                                {/* category description */}
                                <div className="w-full h-32 bg-gray-300 animate-pulse rounded-lg"></div>
                            </>
                        )
                    })
                )
            
            }

                    {/* category content */}
                    {
                        content && content.length > 0 &&
                        <div className="w-full p-5" dangerouslySetInnerHTML={{ __html: content }}></div>
                    }
                    {/* category recommendation */}
                    {
                        recommended_content && recommended_content.length > 0 &&
                        <div className="w-full p-5" dangerouslySetInnerHTML={{ __html: recommended_content }}></div>
                    }
                   
                </div>
            </AppLayout>
        </>
    );
}
