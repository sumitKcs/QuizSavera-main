import { useRef } from "react";

const QuizAlert = ({ items }) => {
    const marqueeRef = useRef(null);

    const handleMouseOver = () => {
        marqueeRef.current.style.animationPlayState = 'paused';
    };

    const handleMouseOut = () => {
        marqueeRef.current.style.animationPlayState = 'running';
    };

    return (
        <div className="bg-primary shadow-inner">
            <div
            className="marquee"
            ref={marqueeRef}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <div className="marquee_content">
                {items.map((item, index) => (
                    <a key={index} href={item?.link} className="text-blue-700 font-semibold">
                        {item?.name}
                    </a>
                ))}
            </div>
        </div>
        </div>
    );
};

export default QuizAlert;
