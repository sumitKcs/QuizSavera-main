import "../../css/quizheader.css";
import { useEffect, useState } from "react";
import QuizLink from "./QuizLink";
import "../../css/quizlink.css";
const QuizHeader = ({menu_items}) => {
    const [toggleMenu, setToggleMenu] = useState(false);
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
        setToggleMenu(true)
        /** set mobile  menu content*/ 
        // get leftbar 
        const leftbar = document.querySelector(".leftbar");
        // get mobile menu content wrapper
        const mobile_menu_content_wrapper = document.querySelector(".mobile_menu_content_wrapper");
        // get contents of left bar and add to mobile menu content wrapper
        mobile_menu_content_wrapper.innerHTML = leftbar.innerHTML;
        
      }

    return (
        <header className="bg-[#10a19d] flex flex-row-reverse justify-end lg:flex-row lg:justify-start px-4 py-2 gap-8 text-white">
            <a href="/" className=" w-full lg:w-auto text-left"><span className="text-xl font-extrabold">QuizSavera</span></a>

            <nav className={`hidden lg:flex justify-end items-center flex-wrap gap-4 w-full`}>

                <a href="/">Home</a>

                {
                    menu_items.map((item, index) => {
                        return (
                            <a href={`/quiz/${item?.id}`} key={item?.id} >{item?.name}</a>
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
            {/* mobile menu icon */}
            <div className={`${!toggleMenu ? "flex" : "hidden"} lg:hidden`} onClick={handleMobileMenu}>&#9776;</div>
            {/* left side bar */}
            <aside className={`${toggleMenu ? "flex" : "hidden"} flex-col justify-start items-start overflow-y-auto bg-slate-700 text-white gap-4 absolute top-0 left-0 z-50 h-screen`} >
               {/* close icon */}
                <div className=" self-end text-black p-1  " onClick={() => setToggleMenu(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                {/* left side bar content */}
                <div className="px-2 pb-6 mobile_menu_content_wrapper flex flex-col gap-4">
                    {/* mobile menu content here */}
                </div>
            </aside>
        </header>
    );
};

export default QuizHeader;
