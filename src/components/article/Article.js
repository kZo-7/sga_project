import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Body, Footer } from "../../containers";
// import Navbar from "../navbar/Navbar";
import { Navbar, ScrollToTop } from "../../components"


const Article = () => {
    const location = useLocation();
    const { from, message, info } = location.state;//kanoume distracturing gia na einai pio katanohtos o kwdikas se allous
    console.log("From: ", from);
    console.log("Message: ", message);
    console.log("Info: ", info);

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'})
      }, []);

    return (
        <div className="article">
            <ScrollToTop />
            <Navbar />
            <div className="gsa__article section__padding">
                <h2>Article Info</h2>
                {info && (
                    <div className="gsa__article-container">
                        <hr className="hrz-line"></hr>
                        <table class="gsa__article-container_table">
                            <tr>
                                <th className="table_head">
                                    Title
                                </th>
                                <td>
                                    {JSON.parse(info).webTitle}
                                </td>
                            </tr>
                            <tr>
                                <th className="table_head">
                                    Refers to
                                </th>
                                <td>
                                    {JSON.parse(info).sectionName}
                                </td>
                            </tr>
                            <tr>
                                <th className="table_head">
                                    Published at
                                </th>
                                <td>
                                    {JSON.parse(info).webPublicationDate}
                                </td>
                            </tr>
                            <tr>
                                <th className="table_head">
                                    URL
                                </th>
                                <td>
                                    <a href="https://www.theguardian.com/us-news/2022/sep/18/the-end-of-the-debate-republicans-midterms">{JSON.parse(info).webUrl}</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                )}
                <div className="gsa__article-button">
                    <Link to="/">
                        <button>
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
            <Body />
            <Footer />
        </div>
    );
}
export default Article;
// na to omorfynw me CSS