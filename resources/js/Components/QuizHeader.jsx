import "../../css/quizheader.css";
import { useEffect } from "react";
import QuizLink from "QuizLink";
import "../../css/quizlink.css";
const QuizHeader = () => {
    useEffect(() => {
        const menuIcon = document.querySelector(".menu-icon");
        const dropdownMenu = document.querySelector(".dropdown-menu");

        const handleResize = () => {
            const dropdownMenu = document.querySelector(".dropdown-menu");
            if (window.innerWidth >= "769px") {
                // Remove the show class if present
                dropdownMenu.classList.remove("show");
            }
        };

        menuIcon.addEventListener("click", () => {
            console.log("Clicked");
            dropdownMenu.classList.toggle("show");
        });

        window.addEventListener("resize", handleResize);

        // Cleanup function to remove the event listener when component unmounts
        return () => {
            menuIcon.removeEventListener("click", () => {
                dropdownMenu.classList.toggle("show");
            });
            window.addEventListener("resize", handleResize);
        };
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
        <header className="header">
            <div className="logo">QuizSavera</div>

            <nav className="nav">
                <a key="Star" href="#" className="link">
                    <img src="star.png" alt="" width="30" height="30" />
                </a>
                <a key="Share" href="#" className="link">
                    <img src="share.png" alt="" width="30" height="30" />
                </a>
                <a key="Google Play" href="#" className="link">
                    <img src="google-play.png" alt="" width="30" height="30" />
                    <span
                        className="self_center"
                        style={{ color: "rgba(0, 0, 0, 0.8)" }}
                    >
                        Get App
                    </span>
                </a>
                <div className="menu-icon">&#9776;</div>
                <div className="dropdown-menu">
                    <div className="quiz_link">
                        <QuizLink props={lt_link} />
                        <QuizLink props={lb_link} />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default QuizHeader;
