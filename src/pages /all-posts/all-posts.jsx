import {Link, useParams} from "react-router-dom";
import posts from "../../constants/data.json";
import "./all-posts.css"

function AllPosts() {
    const { id } = useParams()
    console.log(posts)

    return (
        <>
            <p className="numberOfPosts">Bekijk alle {posts.length} posts op het platform</p>
            <ul className="listBlogPosts">
                {posts.map((post) => {
                    return(
                        <li className={post['id']}>
                            <div className="blogPostTitle">

                                <Link to={"/post/" + post['id']}
                                      className="link"
                                >{post['title']}</Link>
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