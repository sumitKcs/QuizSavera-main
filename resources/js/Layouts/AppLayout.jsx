import "../../css/quizlayout.css";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import QuizCarousel from "@/Components/QuizCarousel";
import QuizLink from "@/Components/QuizLink";
import QuizFooter from "@/Components/QuizFooter";
import QuizAlert from "@/Components/QuizAlert";
import QuizHeader from "@/Components/QuizHeader";
import { PrimeReactProvider } from "primereact/api";
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import Tailwind from 'primereact/passthrough/tailwind';
import { useHomeLayoutStore } from "@/store/homeLayout";
import { FaFacebookF } from "react-icons/fa6";
import { FaTelegramPlane, FaWhatsapp, FaYoutube } from "react-icons/fa";


const PaginationStyle = {
    paginator: {
        root: {
            className: classNames(
                'flex items-center justify-center flex-wrap gap-4',
                'bg-white text-gray-500 border-0 px-4 py-2 rounded-md',
                // 'dark:bg-gray-900 dark:text-white/60 dark:border-blue-900/40' // Dark Mode
            )
        },
        firstpagebutton: ({ context }) => ({
            className: classNames(
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border border-2 border-[rgba(191,219,254,1)] text-gray-500  min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                // 'dark:text-white', //Dark Mode
                {
                    'border border-2 border-gray-300 cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            )
        }),
        previouspagebutton: ({ context }) => ({
            className: classNames(
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                // 'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            )
        }),
        nextpagebutton: ({ context }) => ({
            className: classNames(
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                // 'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            )
        }),
        lastpagebutton: ({ context }) => ({
            className: classNames(
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border border-2 border-[rgba(191,219,254,1)] text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                // 'dark:text-white', //Dark Mode
                {
                    'border border-2 border-gray-300 cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            )
        }),
        pagebutton: ({ context }) => ({
            className: classNames(
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200 rounded-full',
                // 'dark:border-blue-300 dark:text-white', // Dark Mode
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                {
                    'bg-blue-50 border-blue-50 text-blue-700 dark:bg-blue-300 rounded-full': context.active
                }
            )
        }),
        rowperpagedropdown: {
            root: ({ props, state }) => ({
                className: classNames(
                    'inline-flex relative cursor-pointer user-none hidden',
                    'bg-white border rounded-md',
                    'transition duration-200',
                    'h-12 mx-2',
                    // 'dark:bg-gray-950 dark:border-blue-900/40', //DarkMode
                    {
                        'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-blue-500': state.focused && !props.disabled, //Focus
                        'border-gray-300': !state.focused,
                        'hover:border-blue-500': !props.disabled //Hover
                    }
                )
            }),
            input: {
                className: classNames(
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0',
                    'focus:outline-none focus:outline-offset-0',
                    // 'dark:text-white' //Dark Mode
                )
            },
            trigger: {
                className: classNames('flex items-center justify-center shrink-0', 'text-gray-500 dark:text-white w-12 rounded-r-md')
            },
            panel: {
                className: classNames(
                    'bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]',
                    // 'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
                )
            },
            wrapper: 'overflow-auto',
            list: 'm-0 p-0 py-3 list-none',
            item: ({ context }) => ({
                className: classNames(
                    'relative font-normal cursor-pointer space-nowrap overflow-hidden',
                    'm-0 py-3 px-5 border-none text-gray-600 rounded-none',
                    'transition duration-200',
                    // 'dark:text-white/80', // Dark Mode
                    {
                        'text-blue-700 bg-blue-50 dark:text-white/80 dark:bg-blue-300': !context.focused && context.selected,
                        'bg-blue-300/40': context.focused && context.selected,
                        'text-gray-600 bg-gray-300 dark:text-white/80 dark:bg-blue-900/40': context.focused && !context.selected
                    }
                )
            })
        },
        jumptopageinput: {
            root: 'inline-flex mx-2',
            input: {
                className: classNames(
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border border-gray-300 pr-0',
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] focus:border-blue-300',
                    // 'dark:text-white dark:bg-gray-950 dark:border-blue-900/40', //Dark Mode
                    'm-0 flex-auto max-w-[3rem]'
                )
            }
        },
        jumptopagedropdown: {
            root: ({ props, state }) => ({
                className: classNames(
                    'inline-flex relative cursor-pointer user-none ',
                    'bg-white border rounded-md',
                    'transition duration-200',
                    'h-12 mx-2',
                    // 'dark:bg-gray-950 dark:border-blue-900/40', //DarkMode
                    {
                        'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-blue-500': state.focused && !props.disabled, //Focus
                        'border-gray-300': !state.focused,
                        'hover:border-blue-500': !props.disabled //Hover
                    }
                )
            }),
            input: {
                className: classNames(
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0',
                    'focus:outline-none focus:outline-offset-0',
                    // 'dark:text-white' //Dark Mode
                )
            },
            trigger: {
                className: classNames('flex items-center justify-center shrink-0', 'text-gray-500 dark:text-white w-12 rounded-r-md')
            },
            panel: {
                className: classNames(
                    'bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]',
                    // 'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
                )
            },
            wrapper: 'overflow-auto',
            list: 'm-0 p-0 py-3 list-none',
            item: ({ context }) => ({
                className: classNames(
                    'relative font-normal cursor-pointer space-nowrap overflow-hidden',
                    'm-0 py-3 px-5 border-none text-gray-600 rounded-none',
                    'transition duration-200',
                    // 'dark:text-white/80', // Dark Mode
                    {
                        'text-blue-700 bg-blue-50 dark:text-white/80 dark:bg-blue-300': !context.focused && context.selected,
                        'bg-blue-300/40': context.focused && context.selected,
                        'text-gray-600 bg-gray-300 dark:text-white/80 dark:bg-blue-900/40': context.focused && !context.selected
                    }
                )
            })
        }
    }
}

const parseHtmlToText = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    return doc.body.textContent || '';
};


const AppLayout = ({
    children,
    title,
    description,
    keywords,
    leftBar = true,
    rightBar = true,
    carousel = true,
    alert = true,
}) => {
    const { homeLayout, setMenu, setNotifications, setSidebars, setFooter } = useHomeLayoutStore();
    const { menu_items, notifications, sidebars, footer } = homeLayout
    const [leftbarSearch, setLeftbarSearch] = useState('');


    useEffect(() => {
        //if menu_items is empty fetch the menu_items from the server
        if (menu_items.length == 0) {
            const url = import.meta.env.VITE_SERVER_URL + '/api/' + import.meta.env.VITE_API_VERSION + '/get-web'
            const postData = async () => {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 'packageName': import.meta.env.VITE_PACKAGE_NAME }),
                });
                const result = await response.json();
                setMenu(result.menuItems);
                setNotifications(result.notificationItems);
                setSidebars(result.sidebars);
                setFooter(result.footer);
            };

            postData();
        }


    }, []);

    const handleLeftbarSearch = (search) => {
        // filter leftbar based on search
        const filteredLeftbar = sidebars?.leftbar.filter((item) => {
            const searchTerm = search.toLowerCase();
            const mainItemName = item.mainItemName.toLowerCase()
            // check if  mainItemName contains searchTerm use regex to check if searchTerm is in mainItemName
            const regex = new RegExp(searchTerm, 'i');
            return regex.test(mainItemName);
        });
        setLeftbar(filteredLeftbar);
        setLeftbarSearch(search);
    };

    return (
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind, ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge } }}>
            <Head>
                <title>{`${title} Quiz`}</title>
                {/* parsed html description as plain text and set as description */}
                <meta name="description" content={parseHtmlToText(description)} />
                <meta name="keywords" content={keywords} />
            </Head>
            <QuizHeader menu_items={menu_items} />
            {alert && <QuizAlert items={notifications} />}
            <div className="flex flex-col justify-center items-center w-full gap-2 pb-2">
                <p className="text-white font-extrabold">Join our groups for latest updates </p>
                <div className="flex justify-start gap-2  text-white text-2xl">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"> <FaTelegramPlane /></a>
                    <a href="#"> <FaWhatsapp /></a>
                    <a href="#"> <FaYoutube /></a>
                </div>
            </div>
            <main className="">
                {carousel && <QuizCarousel />}

                <div className="content_wrapper">
                    {sidebars?.leftbar.length > 0 ? (
                        <aside
                            className="leftbar flex flex-col gap-4">
                            <div className="w-full">
                                <input type="text" className="rounded w-full text-black p-1 px-2" placeholder="search.."
                                    onChange={(e) => {
                                        handleLeftbarSearch(e.target.value);
                                    }}
                                />
                            </div>
                            {
                                sidebars?.leftbar.map((item, index) => {
                                    return (
                                        <QuizLink key={index} item={item} search={leftbarSearch} />
                                    )
                                })
                            }
                        </aside>
                    ) : (
                        <aside
                            className="leftbar flex flex-col gap-4">
                            <div className="w-full">
                                <input type="text" className="rounded w-full text-black bg-slate-800 p-1 px-2" placeholder="search.."
                                    onChange={(e) => {
                                        handleLeftbarSearch(e.target.value);
                                    }}
                                />
                            </div>
                            {
                                Array(5).fill(0).map((item, index) => {
                                    return (
                                        <QuizLink key={index} />
                                    )
                                })
                            }
                        </aside>
                    )
                    }
                    <div className={`w-full lg:max-w-[98%] lg:min-h-[1200px] content flex ${rightBar ? "lg:col-span-1" : "md:col-span-2"}`}>{children}</div>
                    {sidebars?.rightBar && (
                        <aside className={`rightbar flex flex-col gap-4`}>
                            <div className="w-full">
                                <input type="text" className="rounded w-full text-black p-1 px-2" placeholder="search.." />
                            </div>
                            {
                                sidebars?.rightbar.map((item, index) => {
                                    return (
                                        <QuizLink key={index} props={item} />
                                    )
                                })
                            }
                        </aside>
                    )}
                </div>
                {/* <QuizQuickNav /> */}
            </main>
            <QuizFooter items={footer} />
        </PrimeReactProvider>
    );
};

export default AppLayout;
