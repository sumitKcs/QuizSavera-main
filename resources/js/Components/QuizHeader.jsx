import { useEffect, useState } from "react";

const QuizHeader = ({ menu_items }) => {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const [toggleMobileSideBar, setToggleMobileSideBar] = useState(false);
    // useEffect(() => {
    // const menuIcon = document.querySelector(".menu-icon");
    // const dropdownMenu = document.querySelector(".dropdown-menu");

    // const handleResize = () => {
    //     const dropdownMenu = document.querySelector(".dropdown-menu");
    //     if (window.innerWidth >= "769px") {
    //         // Remove the show class if present
    //         dropdownMenu.classList.remove("show");
    //     }
    // };

    // menuIcon.addEventListener("click", () => {
    //     console.log("Clicked");
    //     dropdownMenu.classList.toggle("show");
    // });

    // window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    // return () => {
    //     menuIcon.removeEventListener("click", () => {
    //         dropdownMenu.classList.toggle("show");
    //     });
    //     window.addEventListener("resize", handleResize);
    // };
    // }, []);


    const handleMobileMenu = () => {
        // show mobile menu
        setToggleMobileMenu(true)
        /** set mobile  menu content*/
        // get leftbar 
        // const leftbar = document.querySelector(".leftbar");
        // // get mobile menu content wrapper
        // const mobile_menu_content_wrapper = document.querySelector(".mobile_menu_content_wrapper");
        // // get contents of left bar and add to mobile menu content wrapper
        // mobile_menu_content_wrapper.innerHTML = leftbar.innerHTML;

    }

    const handleMobileSideBar = () => {
        // show mobile menu
        setToggleMobileSideBar(true)
        /** set mobile  menu content*/
        // get leftbar 
        const leftbar = document.querySelector(".leftbar");
        // get mobile menu content wrapper
        const mobile_menu_content_wrapper = document.querySelector(".mobile_menu_content_wrapper");
        // get contents of left bar and add to mobile menu content wrapper
        mobile_menu_content_wrapper.innerHTML = leftbar.innerHTML;

    }

    return (
        <>
            <header className="bg-primary flex flex-col justify-start items-start lg:flex-row lg:justify-start gap-3 py-4 lg:gap-8  antialiased shadow-2xl ">
                <div className="flex  justify-between items-center px-4 lg:grid lg:grid-cols-3  w-full">
                    {/* mobile menu icon */}
                    <div className={`${!toggleMobileMenu ? "flex" : "hidden"} lg:hidden text-white w-10`} onClick={handleMobileMenu}>&#9776;</div>
                    {/* brand name */}
                   <div className=" lg:col-start-2 lg:w-full">
                   <a href="/" className="flex justify-center">
                        <img src="/quizsavera_logo.webp" alt="" srcset=""  height={450} fetchPriority="high" loading="eager" />
                    </a>
                   </div>
                    {/* download app button */}
                    <div className=" lg:col-start-4 hidden lg:flex justify-center items-center gap-2 bg-secondary w-fit rounded py-1 px-4 shadow-inner">
                    <img src="/google-play.webp" alt="" width="20" height="30" fetchPriority="high" loading="eager"  />
                    <a href="https://playstore.com?app=com.quizsavera.app" className="text-white font-bold whitespace-nowrap">
                        Get App
                    </a>
                    </div>
                    {/* side menu */}
                    <span className={` flex lg:hidden justify-center items-center fixed top-[50%] left-0 z-50 text-white bg-secondary h-24 px-1 rounded-se-xl rounded-ee-xl`} onClick={handleMobileSideBar}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </div>


                {/* mobile menu*/}
                <aside className={`${toggleMobileMenu ? "flex" : "hidden"} flex-col justify-start items-start overflow-hidden bg-primary text-menu font-semibold gap-4 fixed top-0 left-0 z-50 h-screen w-full`} >
                    <div className="w-full flex justify-between text-black p-2  " onClick={() => setToggleMobileMenu(false)}>
                    <a href="/" className="flex justify-center">
                        <img src="/quizsavera_logo.webp" alt="" srcset=""  height={450} />
                    </a>

                            {/* close icon */}
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </p>
                    </div>
                    {/* left side bar content */}
                    <div className="px-2 pb-6 flex flex-col gap-4 w-full text-center overflow-y-auto">
                        <a href="/">Home</a>

                        {
                            menu_items.length ? menu_items.map((item, index) => {
                                return (
                                    <a href={`/quiz/${item?.id}`} key={item?.id}>{item?.name}</a>
                                )
                            }) : (
                                Array(12).fill(0).map((item, index) => {
                                    return (
                                        <span className=" hover:text-blue-700 hover:underline w-48 h-3 bg-green-300 rounded-lg animate-pulse"></span>
                                    )
                                })
                            )
                        }
                    </div>
                </aside>

                {/* left bar */}
                <aside className={`${toggleMobileSideBar ? "flex" : "hidden"} flex-col justify-start items-start overflow-hidden bg-primary gap-4 fixed top-0 left-0 z-50 h-screen w-full`} >
          
                    <div className="w-full flex justify-between text-black p-2  " onClick={() => setToggleMobileSideBar(false)}>
                    <a href="/" className="flex justify-center">
                        <img src="quizsavera_logo.webp" alt="" srcset=""  height={450} />
                    </a>
                              {/* close icon */}
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </p>
                    </div>
                    {/* left side bar content */}
                    <div className="px-2 pb-6 flex mobile_menu_content_wrapper text-white flex-col gap-4 w-full text-center overflow-y-auto">
                        {/* menu content here */}
                    </div>
                </aside>
            </header>
            {/* menu items */}
            <nav className={`bg-secondary hidden md:flex justify-start lg:justify-center items-center flex-wrap gap-4 px-4 py-2   text-menu font-semibold overflow-y-auto`}>

                <a href="/" className=" hover:text-blue-700 hover:underline ">Home</a>

                {
                    menu_items.length ? menu_items.map((item, index) => {
                        return (
                            <a href={`/quiz/${item?.id}`} key={item?.id} className=" hover:text-blue-700 hover:underline">{item?.name}</a>
                        )
                    }) : (
                        Array(12).fill(0).map((item, index) => {
                            return (
                                <span className="hover:text-blue-700 hover:underline w-48 h-3 bg-green-300 rounded-lg animate-pulse"></span>
                            )
                        })
                    )
                }
            </nav>
        </>
    );
};

export default QuizHeader;
