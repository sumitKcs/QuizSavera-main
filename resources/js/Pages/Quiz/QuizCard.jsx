import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "../../../css/quizcard.css";
import QuizIconGroup from "./QuizIconGroup";

const QuizCard = ({ quiz_Cards }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; // Adjust this value as needed

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const displayedItems = quiz_Cards.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    let articleStyle = {
        width: "100%",
        padding: ".5rem",
        borderRadius: ".5rem",
    }; // Fixed error: changed 'border-radius' to 'borderRadius'
    return (
        <>
            {displayedItems.map((elem) => {
                return (
                    <article
                        // key={elem.id}
                        itemscope=""
                        itemtype="http://schema.org/BlogPosting"
                        className="border flex flex-col gap-4 sm:gap-6 material_shadow blog_card" // Fixed error: replaced 'class' with 'className' and added Tailwind CSS classes
                        style={articleStyle} // Fixed error: added articleStyle variable to style attribute
                    >
                        <a
                            className="flex flex-col gap-2"
                            href="/blog"
                            style={{ width: "100%" }}
                        >
                            <h1
                                itemprop="headline"
                                className="text-left text-md md:text-xl font-bold cardHeader"
                            >
                                {elem.CardHeader}
                            </h1>
                            <div
                                className="flex items-left gap-4"
                                style={{ paddingLeft: "5px" }}
                            >
                                <img
                                    src="calendar.png"
                                    alt="published_date"
                                    width="15px"
                                    className="self-center" // Fixed error: replaced 'class' with 'className'
                                />
                                <span className="published_date">
                                    <span>Published on</span>
                                    <time
                                        itemprop="datePublished"
                                        datetime="2023-11-03"
                                    >
                                        {elem.PublishedDate}
                                    </time>
                                </span>
                            </div>
                        </a>

                        <div className="flex gap-4 items">
                            <div className="card_img_cont">
                                <a href="/blog">
                                    <img
                                        itemprop="image"
                                        src={`${elem.CardImg}`}
                                        alt={elem.CardImgDesc}
                                        className="card_img"
                                    />
                                </a>
                            </div>
                            <div className="card_text_cont border">
                                <p
                                    itemprop="articleBody"
                                    className="line-clamp-5"
                                >
                                    {elem.CardContent}
                                </p>
                            </div>
                        </div>
                        <div className="category_and_keywords">
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
                        <QuizIconGroup />
                    </article>
                );
            })}
            <ReactPaginate
                pageCount={Math.ceil(quiz_Cards.length / itemsPerPage)}
                pageRangeDisplayed={5} // Adjust as needed
                marginPagesDisplayed={2} // Adjust as needed
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                activeClassName={"active"}
                previousLabel="< previous"
                nextLabel="next >"
                breakLabel="..."
            />
        </>
    );
};
export default QuizCard;
