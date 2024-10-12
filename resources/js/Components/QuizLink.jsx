import "../../css/quizlink.css";
const QuizLink = ({ item = { name: '', contents: [] } }) => {
    console.log("quizlink", item);
    return (
        <div className="flex flex-col items-start w-full">
            {item.name ?
                <span className="quiz_link_header ">
                    {item.name}
                </span> :
                <h4 className="quiz_link_header w-full h-8 animate-pulse rounded-lg"></h4>
            }
            <nav className="navbar">
                {item.contents.length > 0 ?
                    item.contents.map((item, index) => {

                        return (
                            <span className="flex items-center gap-2 nav_items" key={index}>
                                <div>
                                    {/* <img
                                    className=""
                                    src="/point.png"
                                    alt="finger_point"
                                    width="14px"
                                /> */}

                                    <svg
                                        fill="#ffffff"
                                        version="1.1"
                                        id="Capa_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="14px"
                                        height="14px"
                                        viewBox="0 0 388.151 388.15"
                                        xmlSpace="preserve"
                                        className=" rotate-90"
                                    >
                                        <g>
                                            <g>
                                                <path
                                                    d="M294.442,388.15c1.393-4.576,2.918-9.344,3.938-11.8c24.241-58.511,21.491-120.33,20.417-140.134
			c-0.745-13.367-2.054-24.655-9.518-33.615c-11.025-13.153-27.935-17.248-35.158-18.452c-4.588-11.529-11.602-19.11-20.867-22.584
			c-3.621-1.36-7.572-2.048-11.715-2.048c-6.966,0-13.229,1.91-17.438,3.615c-5.566-10.104-12.994-16.369-22.098-18.651
			c-2.498-0.633-5.143-0.952-7.854-0.952c-8.67,0-16.603,3.27-21.995,6.197c-1.402-9.334-6.29-84.8-9.185-126.176
			C162.045,10.302,151.026,0,137.74,0h-0.018c-14.192,0-25.709,11.47-25.767,25.656c-0.435,89.7-2.765,178.297-3.312,191.718
			c-8.713,3.963-23.89,9.253-30.643,18.41c-15.444,20.945-8.725,37.362-1.068,50.177c17.285,28.967,47.384,80.74,60.204,102.189
			H294.442L294.442,388.15z"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <a href={item?.link} className="navbar_link">
                                {item?.name}
                                </a>
                            </span>
                        );
                    }) : (
                        Array(5).fill(0).map((item, index) => (
                            <span className="flex justify-start items-start w-full gap-2 nav_items" key={index}>
                            <div>
                                <svg
                                    fill="#000000"
                                    version="1.1"
                                    id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="14px"
                                    height="14px"
                                    viewBox="0 0 388.151 388.15"
                                    xmlSpace="preserve"
                                    className=" rotate-90"
                                >
                                    <g>
                                        <g>
                                            <path
                                                d="M294.442,388.15c1.393-4.576,2.918-9.344,3.938-11.8c24.241-58.511,21.491-120.33,20.417-140.134
        c-0.745-13.367-2.054-24.655-9.518-33.615c-11.025-13.153-27.935-17.248-35.158-18.452c-4.588-11.529-11.602-19.11-20.867-22.584
        c-3.621-1.36-7.572-2.048-11.715-2.048c-6.966,0-13.229,1.91-17.438,3.615c-5.566-10.104-12.994-16.369-22.098-18.651
        c-2.498-0.633-5.143-0.952-7.854-0.952c-8.67,0-16.603,3.27-21.995,6.197c-1.402-9.334-6.29-84.8-9.185-126.176
        C162.045,10.302,151.026,0,137.74,0h-0.018c-14.192,0-25.709,11.47-25.767,25.656c-0.435,89.7-2.765,178.297-3.312,191.718
        c-8.713,3.963-23.89,9.253-30.643,18.41c-15.444,20.945-8.725,37.362-1.068,50.177c17.285,28.967,47.384,80.74,60.204,102.189
        H294.442L294.442,388.15z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <a className="w-full h-3 bg-gray-300 animate-pulse rounded-lg"></a>
                        </span>
                        ))
                    )
                }
            </nav>
        </div>
    );
};

export default QuizLink;
