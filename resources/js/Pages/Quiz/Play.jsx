import { Head } from "@inertiajs/react";
import PlayQuizQuestions from "./Partials/PlayQuizQuestions";
import { useEffect } from "react";

export default function Index({ questions, minutes }) {
    // load the page in full screen window mode
    useEffect(() => {
        const fullscreen = () => {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.warn(`Error attempting to enable full-screen mode: ${err.message}`);
                });
            } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
                document.documentElement.msRequestFullscreen();
            }
            console.log("Attempting fullscreen");
        };
    
        fullscreen();
    }, []);
    
    return (
        <>
            <Head title="Play | Quiz" />
            <PlayQuizQuestions questions={questions} minutes={minutes} />
        </>
    );
}
