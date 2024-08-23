import "../../css/quizlayout.css";
import QuizCarousel from "@/Components/QuizCarousel";
import QuizLink from "@/Components/QuizLink";
import QuizFooter from "@/Components/QuizFooter";
import QuizQuickNav from '@/Components/QuizQuickNav';
import QuizNav from "@/Components/QuizNav";
import QuizAlert from "@/Components/QuizAlert";

const AppLayout = ({ children }) => {
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
        <>
            {/* <QuizHeader /> */}
            <QuizNav />
            <QuizAlert />
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
                <QuizQuickNav />
            </main>
        </>
    );
};

export default AppLayout;
