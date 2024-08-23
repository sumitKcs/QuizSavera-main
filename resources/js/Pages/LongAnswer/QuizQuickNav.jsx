import "../../../css/quizquicknav.css";
const QuizQuickNav = () => {
    return (
        <bottom_menu class="bottom_menu ">
            <div
                class="bottom_menu_items icon_lg"
                style={{ borderRadius: "2rem", }}
                id="bottom_menu_items"
            >
                <a href="/">
                    <img src="home.png" alt="" height="30px" width="30px" />
                </a>
                <a href="/">
                    <img src="chain.png" alt="" height="30px" width="30px" />
                </a>
                <a href="/">
                    <img src="notes.png" alt="" height="30px" width="30px" />
                </a>
            </div>
        </bottom_menu>
    );
};

export default QuizQuickNav;
