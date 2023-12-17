import "./new-post.css"
import {useState} from "react";
import error from "../error/error.jsx";

function NewPost() {

    const [formState, setFormState] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',
    })
    const [errorState, setErrorState] = useState('noShow')

    const [submittedState, setSubmittedState] = useState('noShow')

    function handleChange(e) {
        const changedFieldName = e.target.name
        setFormState({
            ...formState,
            [changedFieldName]: e.target.value
        })
    }

    // console.log(formState)

    function handleSubmit(e) {
        e.preventDefault()
        const textarea = document.getElementById("content")

        {textarea.value.length > 300 && textarea.value.length < 2000
            ? (console.log(formState), setErrorState('noShow'), setSubmittedState('show'))
            : (setErrorState('show'), setSubmittedState('noShow'))}

    }

    return (
        <div className="new-post-page">
            <h1>Post toevoegen</h1>
            <form className="new-post-form" onSubmit={handleSubmit}>
                <label for="title">Titel: </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formState.title}
                    onChange={handleChange}
                />
                <label htmlFor="subtitle">Subtitel: </label>
                <input
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    value={formState.subtitle}
                    onChange={handleChange}
                />
                <label htmlFor="author">Auteur: </label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={formState.author}
                    onChange={handleChange}
                />
                <label htmlFor="content">Content: </label>
                <textarea
                    id="content"
                    name="content"
                    value={formState.content}
                    onChange={handleChange}
                    rows="10"
                />
                <button
                    type="submit"
                    value={formState.content}
                >Verstuur</button>
                <div className="error">
                    <p className={errorState}>De content moet tussen de 300 en 2000 karakters zijn.</p>
                    <p className={submittedState}>Verstuurd!</p>
                </div>
            </form>
        </div>

    )
}

export default NewPost