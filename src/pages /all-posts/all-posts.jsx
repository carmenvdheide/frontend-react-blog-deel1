import {useParams} from "react-router-dom";
import posts from "../../constants/data.json";
import "./all-posts.css"

function AllPosts() {
    const { id } = useParams()
    console.log(posts)

    return (
        <>
            <p className="numberOfPosts">{posts.length} posts gevonden</p>
            <ul className="listBlogPosts">
                {posts.map((post) => {
                    return(
                        <li className="blogPost">
                            <div className="blogPostTitle">
                                <h2>{post['title']}</h2>
                                <p>({post['author']})</p>
                            </div>
                            <p>{post['comments']} reacties - {post['shares']} keer gedeeld</p>
                        </li>


                    )
                })}
            </ul>
        </>

    )
}

export default AllPosts