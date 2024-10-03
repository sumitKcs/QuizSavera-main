import "../../css/quizlayout.css";
import QuizCarousel from "@/Components/QuizCarousel";
import QuizLink from "@/Components/QuizLink";
import QuizFooter from "@/Components/QuizFooter";
import QuizQuickNav from "@/Components/QuizQuickNav";
import QuizNav from "@/Components/QuizNav";
import QuizAlert from "@/Components/QuizAlert";
import QuizHeader from "@/Components/QuizHeader";

const AppLayout = ({
    children,
    menu_items,
    leftBar = true,
    rightBar = true,
    carousel = true,
    alert = true,
    sidebars = [],
}) => {

    return (
        <>
            <QuizHeader menu_items={menu_items} />
            {alert && <QuizAlert />}
            <main className="overflow-x-hidden">
                {carousel && <QuizCarousel />}

                <div className="content_wrapper">
                    {leftBar && (
                        <aside
                            className="leftbar bg-slate-700 text-white flex flex-col gap-4">
                            <div className="w-full">
                                <input type="text" className="rounded w-full text-black p-1 px-2" placeholder="search.." />
                            </div>
                            {
                                sidebars?.left.map((item, index) => {
                                    return (
                                        <QuizLink key={index} props={item} />
                                    )
                                })
                            }
                        </aside>
                    )}
                    <div className={`w-full  content flex ${rightBar ? "md:col-span-2 lg:col-span-1" : "md:col-span-2"}`}>{children}</div>
                    {rightBar && (
                        <aside className={`rightbar bg-slate-700 text-white flex flex-col gap-4`}>
                            <div className="w-full">
                                <input type="text" className="rounded w-full text-black p-1 px-2" placeholder="search.." />
                            </div>
                            {
                                sidebars?.right.map((item, index) => {
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
            <QuizFooter />
        </>
    );
};

export default AppLayout;
