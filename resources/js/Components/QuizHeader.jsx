import "../../css/quizheader.css";
import { useEffect, useState } from "react";
import QuizLink from "./QuizLink";
import "../../css/quizlink.css";
const QuizHeader = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    useEffect(() => {
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

        // // Cleanup function to remove the event listener when component unmounts
        // return () => {
        //     menuIcon.removeEventListener("click", () => {
        //         dropdownMenu.classList.toggle("show");
        //     });
        //     window.addEventListener("resize", handleResize);
        // };
    }, []);

    let lt_link = {
        header: "Current Affairs Quiz (1280)",
        link_array: [
            "Current Affairs Quiz - November, 2023",
            "Current Affairs Quiz - November, 2023",
            "Current Affairs Quiz - November, 2023",
            "Current Affairs Quiz - November, 2023",
            "Current Affairs Quiz - November, 2023",
            "Current Affairs Quiz - November, 2023",
        ],
    };
    let lb_link = {
        header: "Current Affairs Quiz (1280)",
        link_array: [
            "Current Affairs Quiz - November, 2023",
            "Current Affairs Quiz - November, 2023",
            "Current Affairs Quiz - November, 2023",
            "Current Affairs Quiz - November, 2023",
            "Current Affairs Quiz - November, 2023",
            "Current Affairs Quiz - November, 2023",
        ],
    };

    return (
        <header className="bg-[#10a19d] flex flex-row-reverse justify-end lg:flex-row lg:justify-start px-4 py-2 gap-4 text-white">
            <a href="/" className=" w-full text-center lg:w-auto text-left"><span className="text-xl font-extrabold">QuizSavera</span></a>

            <nav className={`hidden lg:flex justify-end items-center gap-4 w-full`}>

                <a href="/">Home</a>
                <a href="#">GK quiz</a>
                <a href="#">History quiz</a>
                <a href="#">Reasoning</a>
                <a href="#">Current affairs</a>
                <a href="#">Current affairs quiz</a>
                <a href="#">E-books</a>
                <a href="#">Printed Books</a>
                <a href="#" className="flex justify-center items-center gap-2 border border-black bg-[#4d4c7d] p-1">
                    <img src="/google-play.png" alt="" width="20" height="30" />
                    <span
                        className="text-sm"
                    >
                        Get App
                    </span>
                </a>
            </nav>
            <div className={`${!toggleMenu ? "flex" : "hidden"} lg:hidden`} onClick={() => setToggleMenu(true)}>&#9776;</div>
            <aside className={`${toggleMenu ? "flex" : "hidden"} flex-col justify-start items-start lg:hidden overflow-y-auto`}>
                <div className=" self-end text-black p-1 sticky top-0 " onClick={() => setToggleMenu(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div>
                <div className="px-2">
                    <QuizLink props={lt_link} />
                    <QuizLink props={lb_link} />
                </div>
            </aside>
        </header>
    );
};

export default QuizHeader;
