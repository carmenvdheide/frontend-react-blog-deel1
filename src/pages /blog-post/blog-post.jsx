import {Link, useParams} from "react-router-dom";
import posts from "../../constants/data.json";
import "./blog-post.css"

function BlogPost() {
    const { id } = useParams()
    const idNumber = Number(id)

    const specificBlogPost = posts.find((post) => {
        return post.id === idNumber
    })
    console.log(specificBlogPost)


    const amountPosts = posts.length
    console.log(amountPosts)
    const idCurrent = Number(specificBlogPost['id'])
    const previousPost = idCurrent - 1
    const nextPost = idCurrent + 1


    const datePost = specificBlogPost['created']

    const blogPostDate = new Date(datePost).toLocaleDateString("nl", {day: "numeric",month: "long", year: "numeric"})

    console.log(blogPostDate)

    return (

        <article className="blogpost-article">

            <div className="previous-next">
                {idCurrent > 1 ? <Link to={"/post/" + previousPost} className="link previous"> Vorige </Link> : ""}

                {idCurrent < amountPosts ? <Link to={"/post/" + nextPost} className="link next"
                > Volgende </Link> : ""}
            </div>

            <div className="title-time">
                <h2>{specificBlogPost['title']}</h2>
                <p>({specificBlogPost['readTime']} minuten)</p>
            </div>

            <h4>{specificBlogPost['subtitle']}</h4>
            <p className="smaller">Geschreven door {specificBlogPost['author']} op {blogPostDate}</p>
            <p>{specificBlogPost['content']}</p>
            <p className="smaller">{specificBlogPost['comments']} reacties - {specificBlogPost['shares']} keer gedeeld</p>
            <Link to="/allposts" className="link">Terug naar overzichtspagina</Link>

        </article>


    )
}

export default BlogPost