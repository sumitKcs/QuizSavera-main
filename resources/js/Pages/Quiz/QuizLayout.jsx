import "../../../css/quizlayout.css";
import QuizCarousel from "./Partials/QuizCarousel";
import QuizLink from "./QuizLink";
import QuizCard from "./QuizCard";
import QuizFooter from "./QuizFooter";
import QuizQuestions from "./QuizQuestions";
import QuizQuickNav from './QuizQuickNav';

const QuizLayout = ({ quiz_Cards = [], children }) => {
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
    let rt_link = {
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
    let rb_link = {
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
        <main className="parent_container">
            <QuizCarousel />

            <div className="page_content_container">
                <div className="quiz_link" id="left_quiz_link">
                    <QuizLink props={lt_link} />
                    <QuizLink props={lb_link} />
                </div>
                <div className="page_content">{children}</div>
                <div className="quiz_link">
                    <QuizLink props={rt_link} />
                    <QuizLink props={rb_link} />
                </div>
            </div>

            <QuizFooter />
            <QuizQuickNav/>
        </main>
    );
};

export default QuizLayout;
