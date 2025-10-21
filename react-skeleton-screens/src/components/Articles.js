import { useState, useEffect } from "react";
import SkeletonElement from "../skeletons/SkeletonElement";

const Articles = () => {

    const [articles, setArticles] = useState(null)

    useEffect(() => {
        const timer = setTimeout(async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();
                setArticles(data);
            } catch (err) {
                console.error("Failed to fetch posts:", err);
            }
            }, 5000);
    
            return () => clearTimeout(timer);
        }, []);

    return ( 
        <div className="articles">
            <h2>Articles</h2>

            <SkeletonElement type="title"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="thumbnail"/>
            <SkeletonElement type="avatar"/>

            {articles && articles.map(article =>
                <div className="article" key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                </div>
            )}
            {!articles && (
                <div>Loading ...</div>
            )}
        </div>
     );
}

export default Articles;