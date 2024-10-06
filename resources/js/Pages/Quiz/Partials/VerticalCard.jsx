import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../../../../css/blogCard.css";


const VerticalCard = ({ title, items, limit }) => {
    // console.log("items", items)
     // show only 5 items from props.items
     items = items.slice(0, parseInt(limit));

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Adjust this value as needed

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
        console.log("selected", selected + 1)
    };

    const [displayedItems, setDisplayedItems] = useState([])

    // useEffect(() => {
    //     const items = items.slice(
    //         currentPage * itemsPerPage,
    //         (currentPage + 1) * itemsPerPage
    //     );
    //     setDisplayedItems(items)
    // }, [currentPage])

   

    let articleStyle = {
        width: "100%",
        padding: ".5rem",
        borderRadius: ".5rem",
    };
    return (
        // <div div className="flex flex-col justify-start items-start w-full gap-4">
           <>
             {
                    items?.length == 0 ? '' : (
                        <div className="flex flex-col justify-between items-center border h-fit w-full">
                            <div className="bg-[#10a19d] w-full text-center py-2 text-white font-bold">{title}</div>
                            <div className="flex flex-col justify-start items-start p-4 gap-8 size-full text-center">
                               {
                                items.map((item) => (
                                    <a href={`/quiz/${item?.sid}`} className="w-full border-b-2">{item?.text1st}</a>
                                ))
                               }
                            </div>
                            <div className="bg-[#10a19d] w-full text-center py-2 text-white font-bold cursor-pointer">View More</div>

                        </div>
                    )
                }
           </>

        // </div>


    );
};
export default VerticalCard;