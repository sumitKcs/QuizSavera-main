import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../../../../css/blogCard.css";


const BlogCard = ({ quizcards }) => {
    console.log("quizCards", quizcards)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Adjust this value as needed

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
        console.log("selected", selected + 1)
    };

    const [displayedItems, setDisplayedItems] = useState([])

    useEffect(() => {
        const items = quizcards.slice(
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
        <div div className="flex flex-col gap-4 p-2">
            {displayedItems.map((elem) => {
                return (
                    <article
                        key={elem.id}
                        itemscope=""
                        itemtype="http://schema.org/BlogPosting"
                        className="blog_card"
                        style={articleStyle}
                    >
                        <span>
                            <a
                                className="flex flex-col gap-0"
                                href="/blog/1"
                                style={{ width: "100%" }}
                            >
                                <h1
                                    itemprop="headline"
                                    className="text-left text-md md:text-xl font-bold cardHeader"
                                >
                                    {elem.CardHeader}
                                </h1>
                                <div
                                    className="flex items-left gap-1"
                                    style={{ paddingLeft: "5px" }}
                                >
                                    <img
                                        src="calendar.png"
                                        alt="published_date"
                                        width="15px"
                                        className="self-center"
                                    />
                                    <span className="published_date">
                                        <span>Published on </span>
                                        <time
                                            itemprop="datePublished"
                                            datetime="2023-11-03"
                                        >
                                            {elem.PublishedDate}
                                        </time>
                                    </span>
                                </div>
                            </a>
                        </span>

                        <div className="flex gap-4 h-32">
                            <div className="w-[25%]">
                                <a href="/blog" className="size-full">
                                    <img
                                        itemprop="image"
                                        src={`${elem.CardImg}`}
                                        alt={elem.CardImgDesc}
                                        className="size-full object-cover aspect-video"
                                    // style={{height:"100px"}}
                                    />
                                </a>
                            </div>
                            <div className="card_text_cont text-pretty lg:text-justify">
                                <p
                                    itemprop="articleBody"
                                    className="line-clamp-5 text-[15px]"
                                >
                                    {elem.CardContent}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:justify-between">
                            <p>
                                Categories:
                                <span
                                    itemprop="about"
                                    itemscope=""
                                    itemtype="http://schema.org/Thing"
                                >
                                    <a
                                        href="/category1"
                                        itemprop="name"
                                        className="text-base" // Fixed error: replaced 'style' with Tailwind CSS classes
                                    >
                                        Category 1
                                    </a>
                                </span>
                                ,
                                <span
                                    itemprop="about"
                                    itemscope=""
                                    itemtype="http://schema.org/Thing"
                                >
                                    <a
                                        href="/category2"
                                        itemprop="name"
                                        className="text-base" // Fixed error: replaced 'style' with Tailwind CSS classes
                                    >
                                        Category 2
                                    </a>
                                </span>
                            </p>
                            <p
                                itemprop="keywords"
                                className=" text-black" // Fixed error: replaced 'style' with Tailwind CSS classes
                            >
                                Keyword1, Keyword2, Keyword3
                            </p>
                        </div>
                        {/* <QuizIconGroup /> */}
                    </article>
                );
            })}


            <ReactPaginate
                pageCount={Math.ceil(quizcards.length / itemsPerPage)}
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
        </div>
    );
};
export default BlogCard;