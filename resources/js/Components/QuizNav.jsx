import "../../css/header.css";

const QuizNav = () => {
    return (
        <div className="header2 shadow">
            <nav className="flex justify-start items-center gap-4">
                <a href="/"><span className="text-xl font-extrabold">QuizSavera</span></a>
                <a href="/">Home</a>
                <a href="#">GK quiz</a>
                <a href="#">History quiz</a>
                <a href="#">Reasoning</a>
                <a href="#">Current affairs</a>
                <a href="#">Current affairs quiz</a>
                <a href="#">E-books</a>
                <a href="#">Printed Books</a>
                <a href="#" className="flex justify-center items-center gap-2 border border-black bg-[#4d4c7d] ml-5">
                    <img src="/google-play.webp" alt="" width="20" height="30" />
                    <span
                        className=""
                    >
                        Get App
                    </span>
                </a>
            </nav>

        </div>
    );
};

export default QuizNav;
