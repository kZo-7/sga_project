import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const urlAPI = 'https://content.guardianapis.com/search?page=2&q=debate&api-key=test';

const fetchingGuardianData = () => {
    return axios.get(urlAPI)
        .then(({ data }) => {
            console.log("distructuring results: ", data);
            //return JSON.stringify(data, null, 2); //είναι για να εμφανίζονται τα αποτελέσματα σαν JSON string
            return data;
        })
        .catch(err => {
            console.error(err);
        });
}

const ArticleMenu = () => {
    const [article, setArticle] = useState([]);
    const [articleInfos, setArticleInfos] = useState([]);
    const [toggleButton, setToggleButton] = useState(false);

    const dataThroughLink = {//object with some info inside
        from: "ArticleMenu component",
        message: "At last..",
        info: article
    };

    const passData = (d) => {
        dataThroughLink.info = JSON.parse(d);
        //info -> object
        console.log("Inside PassData - dataThroughLink.info: ", dataThroughLink.info);//object
        console.log("Inside PassData - TypeOf(dataThroughLink.info): ", typeof (dataThroughLink.info));//object
        //info -> string
        // console.log("Inside PassData - JSON.stringify(dataThroughLink.info): ", JSON.stringify(dataThroughLink.info));//string
    }

    useEffect(() => {
        fetchingGuardianData()
            .then((dataAPI) => {
                console.log("dataAPI.response.results: ", dataAPI.response.results);
                setArticleInfos(dataAPI.response.results);
            });
    }, []);

    const print = (e) => {
        console.log("All info from the chosen article: ", e.target.value);
        //κανουμε Parse γιατι αλλιως εμφανιζει undefined epeidi einai string -- "string".id den yparxei
        console.log("JSON.parse(e.target.value).id: ", JSON.parse(e.target.value).id);
        console.log("(e.target.value).id: ", e.target.value.id);//Why undefined - epeidi einai string to e.target.value
    }


    const handleArticle = (e) => {
        setArticle([e.target.value]);//asynchronisity - pairnei timi ston epomeno kyklo ki etsi an exoyme ta consolelog mesa sthn handleArticle Den pairnoume apotelesma
        passData(e.target.value);    //we input chosen article data into object "dataThroughLink" because
        print(e);                    //we want to pass it through Link in another component
        setToggleButton(true);
    }

    return (
        <div className="gsa__articleMenu section__padding">
            <h2>Choose an article from the menu</h2>
            <div className="gsa__articleMenu-container">
                <div className="gsa__articleMenu-container_DDMenu">
                    <div className="gsa__custom-select">
                        <select value={article} onChange={handleArticle}>
                            <option value="">Please press me!</option>
                            {articleInfos.map(article => (
                                <option value={JSON.stringify(article)}> {article.webTitle} </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="gsa__articleMenu-container_buttonLink">
                    {toggleButton
                        ? <Link to={"/articleInfo"} state={dataThroughLink}>
                            <button onClick={() => {
                                setToggleButton(false);
                            }}>
                                Show article's info
                            </button>
                        </Link>
                        : <button onClick={() => {
                            window.alert("Please, choose an option from the above menu")
                        }}>
                            Show article's info
                        </button>
                    }
                </div>
            </div>
        </div>
    );
}

export default ArticleMenu;
