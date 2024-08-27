import React, { useState, useEffect } from "react";

const CountdownTimer = ({ minutes, onTimerComplete }) => {
    // final time to be countdown in minutes
    const [seconds, setSeconds] = useState(minutes * 60);

    // in every second :
    // decrease the countdown number by 1 and
    // rerender the remaining time
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
            if (seconds === 0) {
                onTimerComplete();
            }
        };
    }, []);

    const formattedMinutes = Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0");
    const formattedSeconds = (seconds % 60).toString().padStart(2, "0");

    return (
        <div className="flex gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>
            <span>
                {seconds > 0 ? (
                    <p>
                        {formattedMinutes}:{formattedSeconds}
                    </p>
                ) : (
                    <p>Time's up!</p>
                )}
            </span>
        </div>
    );
};

export default CountdownTimer;
