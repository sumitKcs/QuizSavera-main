import "../../css/quizlayout.css";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import QuizLink from "@/Components/QuizLink";
import QuizFooter from "@/Components/QuizFooter";
import QuizAlert from "@/Components/QuizAlert";
import QuizHeader from "@/Components/QuizHeader";
import { PrimeReactProvider } from "primereact/api";
import { twMerge } from 'tailwind-merge';
import Tailwind from 'primereact/passthrough/tailwind';
import { useHomeLayoutStore } from "@/store/homeLayout";



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
                <div className="flex justify-start gap-2  text-white">
                    {/* facebook */}
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35px" height="35px" viewBox="0,0,256,256">
                            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.523,0 -10,4.477 -10,10c0,5.013 3.693,9.153 8.505,9.876v-7.226h-2.474v-2.629h2.474v-1.749c0,-2.896 1.411,-4.167 3.818,-4.167c1.153,0 1.762,0.085 2.051,0.124v2.294h-1.642c-1.022,0 -1.379,0.969 -1.379,2.061v1.437h2.995l-0.406,2.629h-2.588v7.247c4.881,-0.661 8.646,-4.835 8.646,-9.897c0,-5.523 -4.477,-10 -10,-10z"></path></g></g>
                        </svg>
                    </a>
                    {/* telegram */}
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35px" height="35px" viewBox="0,0,256,256">
                            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" font-size="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M20.30273,2.98438c-0.28897,0.01257 -0.55415,0.09568 -0.78711,0.1875c-0.21522,0.08476 -0.98809,0.4096 -2.21875,0.92578c-1.23066,0.51618 -2.8614,1.20058 -4.59961,1.93164c-3.47642,1.46212 -7.38303,3.10683 -9.38477,3.94922c-0.06874,0.02864 -0.34791,0.11411 -0.65625,0.34961c-0.30905,0.23605 -0.65234,0.74834 -0.65234,1.30859c0,0.45195 0.22561,0.91225 0.49805,1.17578c0.27243,0.26353 0.54854,0.38674 0.7793,0.47852v-0.00195c0.78003,0.31076 3.10944,1.24288 3.66406,1.46484c0.19673,0.58953 1.04128,3.11337 1.24219,3.74805h-0.00195c0.14201,0.44921 0.28043,0.74196 0.47266,0.98633c0.09611,0.12218 0.21084,0.2329 0.35156,0.32031c0.05399,0.03354 0.11378,0.05955 0.17383,0.08398c0.00837,0.00355 0.01699,0.00443 0.02539,0.00781l-0.02344,-0.00586c0.01741,0.007 0.03304,0.01733 0.05078,0.02344c0.02891,0.00996 0.04896,0.00963 0.08789,0.01758c0.137,0.04215 0.27376,0.07031 0.40039,0.07031c0.54361,0 0.87695,-0.29492 0.87695,-0.29492l0.02149,-0.01563l2.34766,-1.98633l2.875,2.66016c0.05251,0.07415 0.4639,0.63086 1.41602,0.63086c0.56813,0 1.01731,-0.28121 1.30469,-0.57617c0.28738,-0.29496 0.4664,-0.59677 0.54688,-1.00586l0.00195,-0.00195c0.06418,-0.33018 2.81641,-14.15039 2.81641,-14.15039l-0.00586,0.02344c0.08566,-0.38235 0.11095,-0.7521 0.00977,-1.12891c-0.10119,-0.37681 -0.37428,-0.74453 -0.70312,-0.9375c-0.32885,-0.19297 -0.64072,-0.25085 -0.92969,-0.23828zM19.9082,5.17383c-0.10876,0.54603 -2.57419,12.93205 -2.72656,13.70898l-4.15234,-3.8418l-2.80664,2.37305l0.77734,-3.03906c0,0 5.36255,-5.42814 5.68555,-5.74414c0.26,-0.253 0.31445,-0.34169 0.31445,-0.42969c0,-0.117 -0.06022,-0.20117 -0.19922,-0.20117c-0.125,0 -0.29477,0.11978 -0.38477,0.17578c-1.14365,0.713 -6.01473,3.4889 -8.41016,4.85156c-0.14416,-0.0578 -2.30846,-0.92689 -3.47461,-1.39258c2.07426,-0.873 5.62991,-2.36896 8.94141,-3.76172c1.73791,-0.73094 3.36817,-1.41595 4.59766,-1.93164c1.03785,-0.43531 1.57923,-0.6607 1.83789,-0.76758zM17.15234,19.02539h0.00195c-0.00005,0.00023 -0.00185,0.00556 -0.00195,0.00586c0.00127,-0.00646 -0.00095,-0.0008 0,-0.00586z"></path></g></g>
                        </svg>
                    </a>
                    {/* whatsapp */}
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35px" height="35px" viewBox="0,0,256,256">
                            <g fill="#ffffff" fill-rule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M19.077,4.928c-1.886,-1.887 -4.394,-2.927 -7.066,-2.928c-5.506,0 -9.987,4.479 -9.989,9.985c-0.001,1.76 0.459,3.478 1.333,4.992l-1.355,5.023l5.233,-1.237c1.459,0.796 3.101,1.215 4.773,1.216h0.004c5.505,0 9.986,-4.48 9.989,-9.985c0.002,-2.669 -1.036,-5.178 -2.922,-7.066zM16.898,15.554c-0.208,0.583 -1.227,1.145 -1.685,1.186c-0.458,0.042 -0.887,0.207 -2.995,-0.624c-2.537,-1 -4.139,-3.601 -4.263,-3.767c-0.125,-0.167 -1.019,-1.353 -1.019,-2.581c0,-1.228 0.645,-1.832 0.874,-2.081c0.229,-0.25 0.499,-0.312 0.666,-0.312c0.166,0 0.333,0 0.478,0.006c0.178,0.007 0.375,0.016 0.562,0.431c0.222,0.494 0.707,1.728 0.769,1.853c0.062,0.125 0.104,0.271 0.021,0.437c-0.083,0.166 -0.125,0.27 -0.249,0.416c-0.125,0.146 -0.262,0.325 -0.374,0.437c-0.125,0.124 -0.255,0.26 -0.11,0.509c0.146,0.25 0.646,1.067 1.388,1.728c0.954,0.85 1.757,1.113 2.007,1.239c0.25,0.125 0.395,0.104 0.541,-0.063c0.146,-0.166 0.624,-0.728 0.79,-0.978c0.166,-0.25 0.333,-0.208 0.562,-0.125c0.229,0.083 1.456,0.687 1.705,0.812c0.25,0.125 0.416,0.187 0.478,0.291c0.062,0.103 0.062,0.603 -0.146,1.186z"></path></g></g>
                        </svg>
                    </a>
                    {/* youtube */}
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35px" height="35px" viewBox="0,0,256,256">
                            <g fill="#ffffff" fill-rule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" font-family="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M5.67969,2l1.47852,5.34375v2.5625h1.28125v-2.5625l1.49805,-5.34375h-1.29102l-0.53711,2.43164c-0.151,0.71 -0.24702,1.21463 -0.29102,1.51563h-0.03906c-0.063,-0.421 -0.15902,-0.92939 -0.29102,-1.52539l-0.51758,-2.42187zM11.43164,4.01758c-0.434,0 -0.78378,0.08481 -1.05078,0.25781c-0.267,0.172 -0.46384,0.44722 -0.58984,0.82422c-0.125,0.377 -0.1875,0.87605 -0.1875,1.49805v0.83984c0,0.615 0.05406,1.10752 0.16406,1.47852c0.11,0.371 0.29564,0.64431 0.55664,0.82031c0.261,0.176 0.62012,0.26367 1.07813,0.26367c0.446,0 0.80055,-0.08677 1.06055,-0.25977c0.26,-0.173 0.44845,-0.44436 0.56445,-0.81836c0.116,-0.374 0.17383,-0.86838 0.17383,-1.48437v-0.83984c0,-0.621 -0.05874,-1.11819 -0.17773,-1.49219c-0.119,-0.373 -0.30841,-0.64822 -0.56641,-0.82422c-0.258,-0.176 -0.59839,-0.26367 -1.02539,-0.26367zM13.87891,4.13086v4.31445c0,0.534 0.08948,0.92673 0.27149,1.17773c0.182,0.251 0.46466,0.37695 0.84766,0.37695c0.552,0 0.96814,-0.26678 1.24414,-0.80078h0.02734l0.11328,0.70703h1.01758v-5.77539h-1.29883v4.58789c-0.05,0.107 -0.12647,0.19467 -0.23047,0.26367c-0.104,0.07 -0.21122,0.10352 -0.32422,0.10352c-0.132,0 -0.2262,-0.05406 -0.2832,-0.16406c-0.057,-0.11 -0.08594,-0.29473 -0.08594,-0.55273v-4.23828zM11.40234,4.91211c0.182,0 0.31081,0.09511 0.38281,0.28711c0.072,0.191 0.10742,0.49516 0.10742,0.91016v1.79883c0,0.427 -0.03542,0.73583 -0.10742,0.92383c-0.072,0.188 -0.19986,0.2822 -0.38086,0.2832c-0.182,0 -0.30795,-0.0952 -0.37695,-0.2832c-0.07,-0.188 -0.10352,-0.49683 -0.10352,-0.92383v-1.79883c0,-0.414 0.03542,-0.71816 0.10742,-0.91016c0.072,-0.191 0.19509,-0.28711 0.37109,-0.28711zM5,11c-1.1,0 -2,0.9 -2,2v7c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2v-7c0,-1.1 -0.9,-2 -2,-2zM12.04883,13h1.05664v2.56836h0.00781c0.095,-0.186 0.23125,-0.33522 0.40625,-0.44922c0.175,-0.114 0.36441,-0.16992 0.56641,-0.16992c0.26,0 0.46333,0.06903 0.61133,0.20703c0.148,0.138 0.25626,0.36097 0.32226,0.66797c0.066,0.308 0.09766,0.73525 0.09766,1.28125v0.77148h0.00195c0,0.727 -0.08867,1.25956 -0.26367,1.60156c-0.175,0.342 -0.44736,0.51367 -0.81836,0.51367c-0.207,0 -0.39445,-0.04758 -0.56445,-0.14258c-0.17,-0.095 -0.29781,-0.22563 -0.38281,-0.39062h-0.02344l-0.11133,0.46094h-0.90625zM5.48633,13.24609h3.25195v0.88476h-1.08984v5.78906h-1.07227v-5.78906h-1.08984zM17.09766,14.95117c0.376,0 0.66519,0.06903 0.86719,0.20703c0.201,0.138 0.34278,0.35353 0.42578,0.64453c0.082,0.292 0.12305,0.69499 0.12305,1.20899v0.83594h-1.83594v0.24805c0,0.313 0.00834,0.54713 0.02734,0.70313c0.019,0.156 0.05723,0.2708 0.11523,0.3418c0.058,0.072 0.14753,0.10742 0.26953,0.10742c0.164,0 0.27689,-0.06441 0.33789,-0.19141c0.061,-0.127 0.09461,-0.33777 0.09961,-0.63477l0.94727,0.05469c0.005,0.042 0.00781,0.10178 0.00781,0.17578c0,0.451 -0.12409,0.78777 -0.37109,1.00977c-0.247,0.223 -0.59392,0.33398 -1.04492,0.33398c-0.541,0 -0.92067,-0.17077 -1.13867,-0.50977c-0.218,-0.339 -0.32617,-0.86322 -0.32617,-1.57422v-0.85156c0,-0.732 0.11289,-1.26652 0.33789,-1.60352c0.225,-0.337 0.6122,-0.50586 1.1582,-0.50586zM8.41016,15.04492h1.09961v3.58008c0,0.217 0.02427,0.37284 0.07227,0.46484c0.048,0.093 0.12628,0.13867 0.23828,0.13867c0.095,0 0.18839,-0.02889 0.27539,-0.08789c0.088,-0.058 0.15036,-0.13266 0.19336,-0.22266v-3.87305h1.09961v4.875h-0.00195h-0.85937l-0.09375,-0.59766h-0.02539c-0.234,0.452 -0.58378,0.67773 -1.05078,0.67773c-0.324,0 -0.56084,-0.10636 -0.71484,-0.31836c-0.154,-0.212 -0.23242,-0.54414 -0.23242,-0.99414zM17.07422,15.69336c-0.117,0 -0.20377,0.03552 -0.25977,0.10352c-0.056,0.069 -0.09333,0.18189 -0.11133,0.33789c-0.019,0.156 -0.02734,0.39294 -0.02734,0.71094v0.34961h0.80273v-0.34961c0,-0.313 -0.01025,-0.54894 -0.03125,-0.71094c-0.02,-0.162 -0.05923,-0.2758 -0.11523,-0.3418c-0.056,-0.066 -0.14081,-0.09961 -0.25781,-0.09961zM13.5918,15.72852c-0.106,0 -0.20297,0.04195 -0.29297,0.12695c-0.09,0.085 -0.15441,0.19417 -0.19141,0.32617v2.76758c0.048,0.085 0.1105,0.14841 0.1875,0.19141c0.077,0.042 0.159,0.06445 0.25,0.06445c0.117,0 0.20834,-0.04195 0.27734,-0.12695c0.069,-0.085 0.11944,-0.22769 0.14844,-0.42969c0.029,-0.201 0.04297,-0.48094 0.04297,-0.83594v-0.62695c0,-0.382 -0.01116,-0.67581 -0.03516,-0.88281c-0.024,-0.207 -0.06695,-0.35636 -0.12695,-0.44336c-0.061,-0.087 -0.14776,-0.13086 -0.25976,-0.13086z"></path></g></g>
                        </svg>
                    </a>
                </div>
            </div>
            <main className="">

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
