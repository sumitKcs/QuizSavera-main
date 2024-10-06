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
            <header className="bg-primary flex flex-col justify-start items-start lg:flex-row lg:justify-start px-4 py-2 gap-3 lg:gap-8  antialiased shadow-2xl border">
                <div className="flex gap-2 w-full lg:w-fit ">
                    {/* mobile menu icon */}
                    <span className={`${!toggleMobileMenu ? "flex" : "hidden"} lg:hidden`} onClick={handleMobileMenu}>&#9776;</span>
                    {/* brand name */}
                    <a href="/" className="flex-1 text-center lg:text-left text-brand font-extrabold"><span className="text-xl font-extrabold">{import.meta.env.VITE_APP_NAME}</span></a>
                    {/* side menu */}
                    <span className={` flex lg:hidden justify-center items-center fixed top-[50%] left-0 bg-slate-700 h-24 px-1 rounded-se-xl rounded-ee-xl`} onClick={handleMobileSideBar}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>

                    </span>
                </div>


                {/* mobile menu*/}
                <aside className={`${toggleMobileMenu ? "flex" : "hidden"} flex-col justify-start items-start overflow-hidden bg-secondary text-menu font-semibold gap-4 fixed top-0 left-0 z-50 h-screen w-full`} >
                    {/* close icon */}
                    <div className="w-full flex justify-between text-black p-2  " onClick={() => setToggleMobileMenu(false)}>
                        <p className="text-xl font-extrabold text-white">{import.meta.env.VITE_APP_NAME}</p>
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
                            menu_items.map((item, index) => {
                                return (
                                    <a href={`/quiz/${item?.id}`} key={item?.id}>{item?.name}</a>
                                )
                            })
                        }
                    </div>
                </aside>

                {/* left bar */}
                <aside className={`${toggleMobileSideBar ? "flex" : "hidden"} flex-col justify-start items-start overflow-hidden bg-primary gap-4 fixed top-0 left-0 z-50 h-screen w-full`} >
                    {/* close icon */}
                    <div className="w-full flex justify-between text-brand p-2  " onClick={() => setToggleMobileSideBar(false)}>
                        <p className="text-xl font-extrabold text-brand">{import.meta.env.VITE_APP_NAME}</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </p>
                    </div>
                    {/* left side bar content */}
                    <div className="px-2 pb-6 flex mobile_menu_content_wrapper flex-col gap-4 w-full text-center overflow-y-auto">
                       {/* menu content here */}
                    </div>
                </aside>
            </header>
            {/* menu items */}
            <nav className={`bg-secondary hidden md:flex justify-start lg:justify-center items-center flex-wrap gap-4 px-4 py-2 md:text-[16px] text-xs  text-menu font-semibold overflow-y-auto`}>

                <a href="/" className=" hover:text-blue-700 hover:underline ">Home</a>

                {
                    menu_items.map((item, index) => {
                        return (
                            <a href={`/quiz/${item?.id}`} key={item?.id} className=" hover:text-blue-700 hover:underline">{item?.name}</a>
                        )
                    })
                }

                {/* <a href="#" className="flex justify-center items-center gap-2 border border-black bg-[#4d4c7d] p-1">
    <img src="/google-play.png" alt="" width="20" height="30" />
    <span
        className="text-sm"
    >
        Get App
    </span>
</a> */}
            </nav>
        </>
    );
};

export default QuizHeader;
