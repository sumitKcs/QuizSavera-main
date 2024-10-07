

const QuizAlert = ({ items }) => {
    console.log("notificaions", items)
    if(!items) return <></>;

    return (
        <div className="bg-primary shadow-inner">
            <div
            className="marquee"
        >
            <div className="marquee_content">
                {items.map((item, index) => (
                    item?.link && <a key={index} href={item?.link} className="text-blue-700 font-semibold cursor-pointer">
                        {item?.name}
                    </a>
                ))}
            </div>
        </div>
        </div>
    );
};

export default QuizAlert;
