import "../../../../css/blogCard.css";
import { Link } from '@inertiajs/react';


const VerticalCard = ({ title='', items=[], limit=5, categoryId=null }) => {
    // console.log("items", items)
    // show only 5 items from props.items
    const filteredItems = items?.length ? items.slice(0, parseInt(limit)) : [];

    return (
        <>
             <div className="flex flex-col justify-between items-center h-fit w-full verticalcard_wrapper">
                        {
                            title ? <div className="bg-secondary w-full text-center py-2 text-white font-bold vaerticlcard_title">{title}</div> :
                            <div className="bg-secondary w-full h-10 text-center py-2 font-bold text-secondary"></div>
                        }
                        <div className="flex flex-col justify-center items-center p-4 gap-8 size-full text-center">
                            {
                              filteredItems.length ?  filteredItems.map((item) => {
                                    // console.log("item", item)
                                    const contentType = item.contentType ? item.contentType.toString().toLowerCase() : "";
                                    return (
                                        <Link href={`/${title.toLowerCase()}/${item?.sid}${contentType ? `/${contentType}` : ""}`} key={item.sid} className="w-full border-b-2 inline-flex justify-start items-center gap-2 hover:text-blue-600 hover:font-extrabold">
                                            <span>
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
                                            </span>

                                            <span>
                                                {item.text1st}
                                            </span>

                                        </Link>
                                    )
                                }) : (
                                    Array(limit).fill(0).map((item, index) => {
                                        return ( 
                                        <span key={index} className="w-full border-b-2 inline-flex justify-start items-center gap-2">
                                        <span>
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
                                        </span>

                                        <span className="w-full h-3 animate-pulse bg-gray-300 rounded-lg">
                                            
                                        </span>

                                    </span>)
                                    })
                                                
                                )
                            }
                        </div>
                        <div className={`bg-primary text-orange-400  w-full text-center ${items.length > limit ? "py-2" : "py-5"}  font-bold cursor-pointer flex justify-center items-center`}>
                            {
                                items.length > limit && (<a href={`/${title.toLowerCase()}/${categoryId}`}>View More &gt;&gt;</a>)
                            }
                        </div>

                    </div>
        </>

        // </div>


    );
};
export default VerticalCard;