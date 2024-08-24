import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../../../../css/blogCard.css";


const VerticalCard = ({ data }) => {
    console.log("quizCards", data)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // Adjust this value as needed

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
        console.log("selected", selected + 1)
    };

    const [displayedItems, setDisplayedItems] = useState([])

    useEffect(() => {
        const items = data.slice(
            currentPage * itemsPerPage,
            (currentPage + 1) * itemsPerPage
        );
        setDisplayedItems(items)
    }, [currentPage])

    let articleStyle = {
        width: "100%",
        padding: ".5rem",
        borderRadius: ".5rem",
    }; // Fixed error: changed 'border-radius' to 'borderRadius'
    return (
        <>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">
                {displayedItems.map((elem) => {
                    return (
                        <div className="flex flex-col justify-between items-center border h-fit w-full">
                            <div className="bg-[#10a19d] w-full text-center py-2 text-white font-bold">{elem.cat_name}</div>
                            <div className="flex flex-col justify-start items-start p-4 gap-8 size-full text-center">
                                {elem.sub_cat.length && elem.sub_cat.map((subcat) => (
                                    <a href={`#${subcat.cat_name}`} className="w-full border-b-2">{subcat.cat_name}</a>
                                ))}
                            </div>
                            <div className="bg-[#10a19d] w-full text-center py-2 text-white font-bold">View More</div>

                        </div>
                    );
                })}
            </div>


            <ReactPaginate
                pageCount={Math.ceil(data.length / itemsPerPage)}
                activeClassName={'item active '}
                breakClassName={'item break-me '}
                breakLabel={'...'}
                containerClassName={'pagination'}
                disabledClassName={'disabled-page'}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                nextClassName={"item next "}
                nextLabel="next >"
                onPageChange={handlePageChange}
                pageClassName={'item pagination-page '}
                previousClassName={"item previous"}
                previousLabel="< prev"
            />
        </>
    );
};
export default VerticalCard;