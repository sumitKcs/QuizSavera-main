import "../../../css/quizblog.css";
import QuizIconGroup from "./QuizIconGroup";
const QuizBlog = () => {
    return (
        <div className="blog_wrapper main_content border">
            <article
                itemscope=""
                itemtype="http://schema.org/BlogPosting"
                style={{ width: "100%" }}
                className="blog flex-col "
            >
                <h1 itemprop="headline" className="text-center qq_header">
                    Example Blog Post Title
                </h1>

                <QuizIconGroup />

                <span className="quizblog_datePublished">
                    <img
                        src="calendar.png"
                        alt="publised_date"
                        width="15px"
                        className="self-center"
                    />
                    <time itemprop="datePublished" datetime="2023-11-03">
                        November 3, 2023
                    </time>
                </span>
                <div className="blog_intro">
                    <div>
                        <img
                            itemprop="image"
                            src="https://i0.wp.com/www.gktoday.in/wp-content/uploads/2015/07/Safe-and-Hygienic-food.jpg?w=180&amp;ssl=1"
                            alt="Blog Post Image"
                            width="500px"
                            height="500px"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div>
                        <p itemprop="description">
                            <i>
                                This is the introduction of the blog post. Lorem
                                ipsum, dolor sit amet consectetur adipisicing
                                elit. Expedita distinctio id rerum
                                exercitationem ea consectetur, unde ipsa
                                quisquam, porro velit, eius voluptatem!{" "}
                            </i>
                        </p>
                    </div>
                </div>
                <div itemprop="articleBody" className="blog_section_container">
                    <section className="table_of_contents_section">
                        <h2 className="black_header">Table of Contents</h2>
                        <ol style={{ listStyle: "none", color: "blue" }}>
                            <li>
                                <a href="#section-1" itemprop="url">
                                    Section 1 Title
                                </a>
                            </li>
                            <li>
                                <a href="#section-2" itemprop="url">
                                    Section 2 Title
                                </a>
                            </li>
                            <li>
                                <a href="#section-3" itemprop="url">
                                    Section 3 Title
                                </a>
                            </li>
                        </ol>
                    </section>
                    <section id="section-1">
                        <h2 itemprop="name" className="subsection_header">
                            Section 1 Title
                        </h2>
                        <p itemprop="description">
                            This is the content of section 1. Lorem ipsum dolor
                            sit amet consectetur, adipisicing elit. Voluptates
                            nulla ducimus cupiditate repudiandae, voluptatem
                            recusandae quis dicta eligendi, dignissimos commodi
                            natus, debitis sunt. Molestias cupiditate
                            consequuntur architecto unde aperiam aliquid. Quis
                            aliquid corrupti dolores architecto provident vero
                            recusandae sint aperiam laborum autem sed, voluptate
                            accusamus magnam ipsum quos explicabo in earum.
                            Facilis nesciunt animi neque necessitatibus,
                            aspernatur expedita aliquam in unde ut quas illum,
                            voluptatem ab. Quas consequuntur quia fugiat?
                            Facere, aperiam doloribus, eius ea incidunt deleniti
                            asperiores quas laudantium voluptatem officiis sed
                            nulla dolores dignissimos totam eveniet obcaecati
                            impedit illo. Illum aperiam eaque aut sint vel in ex
                            qui rerum ipsum amet! Nulla quod eos veniam
                            aspernatur nemo dolor molestiae, quibusdam enim
                            magni et modi dolores hic maiores! Reprehenderit
                            veritatis accusamus nam numquam. Placeat aliquam
                            corporis fugit! Impedit exercitationem minus
                            perferendis voluptas dolorem culpa totam illum.
                            Maxime explicabo dicta itaque nisi ex earum numquam,
                            magnam corporis illum sint animi?
                        </p>
                    </section>
                    <section id="section-2">
                        <h2 itemprop="name" className="subsection_header">
                            Section 2 Title
                        </h2>
                        <p itemprop="description">
                            This is the content of section 2. Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Alias unde,
                            facere ipsum dicta omnis aliquid, harum non
                            laudantium inventore quidem vitae. Vel odio quae,
                            repellendus accusantium sapiente unde repellat
                            laborum provident similique deleniti nam vero
                            incidunt veniam consequatur nihil excepturi, esse
                            dolorem. Eos illo sint in facere cupiditate pariatur
                            dicta, perferendis perspiciatis, tempora repudiandae
                            ipsam voluptatem, numquam obcaecati! Nesciunt modi
                            vitae architecto totam tempora, aspernatur incidunt
                            ratione? Iure repellendus cumque dignissimos,
                            tempore, nesciunt aliquam facere molestiae
                            architecto reprehenderit distinctio, recusandae
                            voluptatum pariatur? Architecto tempora repellat
                            exercitationem! Error eos ut iste harum dolores
                            laboriosam quod distinctio corporis corrupti!
                            Laborum, magnam placeat!
                        </p>
                    </section>
                    <section id="section-3">
                        <h2 itemprop="name" className="subsection_header">
                            Section 3 Title
                        </h2>
                        <p itemprop="description">
                            This is the content of section 3. Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Consectetur
                            nemo voluptatibus ipsam aliquam, temporibus, dolorem
                            deleniti dignissimos molestias odio iste tenetur
                            ullam, maiores saepe. Architecto ea sunt odit fugit
                            nulla est similique neque! Assumenda neque, qui id
                            accusamus impedit asperiores molestiae inventore
                            voluptatibus? Consequuntur aliquid numquam dolorem
                            perspiciatis fugit. Qui incidunt, earum molestiae
                            labore facere rem eveniet consequuntur id animi!
                            Quos accusamus accusantium vitae praesentium
                            commodi, aperiam facilis delectus aut quia veritatis
                            ab illum. Ab repellendus eaque soluta commodi sunt
                            quasi eveniet dolor sit? Minus eius possimus
                            excepturi ipsam aut eligendi repellat, tempora
                            minima, tenetur in et sequi quidem? Iste doloribus
                            optio deleniti aut molestiae dignissimos nesciunt
                            impedit? Commodi aliquam enim similique amet autem,
                            facere quo asperiores ipsa quae, sunt fugit
                            reprehenderit laborum esse laudantium tenetur
                            incidunt mollitia officia explicabo. Suscipit
                            molestias, impedit fugiat voluptates consectetur
                            fuga quae libero accusamus obcaecati quaerat, iste
                            amet sit illo eius quis temporibus consequatur.
                        </p>
                    </section>
                </div>
            </article>
            <section
                className="flex-col gap-sm related_posts_parent_container"
                style={{
                    width: "100%",
                    fontFamily: "'Times New Roman', Times, serif",
                }}
            >
                <h3
                    style={{
                        color: "var(--blog-heading-color)",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        marginBottom: "0.75rem",
                    }}
                >
                    Related Posts
                </h3>
                <div className="related_posts_container">
                    <div className="flex items-left gap-3 w-full">
                        <div>
                            <img
                                src="https://i0.wp.com/www.gktoday.in/wp-content/uploads/2022/02/Green-financing.jpg?resize=400%2C225&amp;ssl=1"
                                alt="related posts"
                                width="50px"
                            />
                        </div>
                        <div className="w-full">
                            <p className="w-full font-bold">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Inventore, optio?
                            </p>
                        </div>
                    </div>
                    <div className="flex items-left gap-3 w-full">
                        <div>
                            <img
                                src="https://i0.wp.com/www.gktoday.in/wp-content/uploads/2022/02/Green-financing.jpg?resize=400%2C225&amp;ssl=1"
                                alt="related posts"
                                width="50px"
                            />
                        </div>
                        <div className="w-full">
                            <p className="w-full font-bold">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Inventore, optio?
                            </p>
                        </div>
                    </div>
                    <div className="flex items-left gap-3 w-full">
                        <div>
                            <img
                                src="https://i0.wp.com/www.gktoday.in/wp-content/uploads/2022/02/Green-financing.jpg?resize=400%2C225&amp;ssl=1"
                                alt="related posts"
                                width="50px"
                            />
                        </div>
                        <div className="w-full">
                            <p className="w-full font-bold">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Inventore, optio?
                            </p>
                        </div>
                    </div>
                    <div className="flex items-left gap-3 w-full">
                        <div>
                            <img
                                src="https://i0.wp.com/www.gktoday.in/wp-content/uploads/2022/02/Green-financing.jpg?resize=400%2C225&amp;ssl=1"
                                alt="related posts"
                                width="50px"
                            />
                        </div>
                        <div className="w-full">
                            <p className="w-full font-bold">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Inventore, optio?
                            </p>
                        </div>
                    </div>
                    <div className="flex items-left gap-3 w-full">
                        <div>
                            <img
                                src="https://i0.wp.com/www.gktoday.in/wp-content/uploads/2022/02/Green-financing.jpg?resize=400%2C225&amp;ssl=1"
                                alt="related posts"
                                width="50px"
                            />
                        </div>
                        <div className="w-full">
                            <p className="w-full font-bold">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Inventore, optio?
                            </p>
                        </div>
                    </div>
                    <div className="flex items-left gap-3 w-full">
                        <div>
                            <img
                                src="https://i0.wp.com/www.gktoday.in/wp-content/uploads/2022/02/Green-financing.jpg?resize=400%2C225&amp;ssl=1"
                                alt="related posts"
                                width="50px"
                            />
                        </div>
                        <div className="w-full">
                            <p className="w-full font-bold">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Inventore, optio?
                            </p>
                        </div>
                    </div>
                </div>
                {/* Other related posts sections */}
                <div
                    className="flex-col gap-sm mt-xs mb-md"
                    style={{ width: "100%" }}
                >
                    <p className="flex items-center justify-start gap-2">
                        <strong>Month:</strong>
                        <span className="text-blue-500">
                            Cureent Affairs - November 2023
                        </span>
                    </p>
                    <p className="flex items-center justify-start gap-2">
                        <strong>Category:</strong>
                        <span className="text-blue-500">
                            International / World Current Affairs
                        </span>
                    </p>
                </div>
            </section>
            <section className="last_section_container">
                <h4
                    className="text-center"
                    style={{
                        color: "var(--blog-heading-color)",
                        fontSize: "17px",
                        fontWeight: "900",
                    }}
                >
                    Leave a reply
                </h4>
                <p className="mt-xs">
                    Your email address will not be published. Required fields
                    are marked *{" "}
                </p>
                <form action="#">
                    <div className="mt-xs">
                        <label htmlFor="comment">Comment * </label>
                        <br />
                        <textarea
                            name="comment"
                            id="comment"
                            cols="30"
                            rows="15"
                            required=""
                            className="w-full overflow-auto p-4 rounded-lg border border-gray-500 focus:ring-0 focus:outline-0 "
                        ></textarea>
                    </div>
                    <div className="mt-xs">
                        <label htmlFor="comment">Name * </label> <br />
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required=""
                            className="w-full overflow-auto p-4 rounded-lg border border-gray-500 focus:ring-0 focus:outline-0  "
                        />
                    </div>
                    <div className="mt-xs">
                        <label htmlFor="comment">Email * </label> <br />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required=""
                            className="w-full overflow-auto p-4 rounded-lg border border-gray-500 focus:ring-0 focus:outline-0   "
                        />
                    </div>

                    <div className="mt-sm">
                        <button
                            type="submit"
                            className="p-2 rounded-lg border bg-gray-200 text-sm"
                        >
                            Post Comment
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default QuizBlog;
