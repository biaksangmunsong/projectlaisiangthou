import { useEffect } from "react"
import { useParams, useHistory, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import BookPage from "../../styled-components/pages/BookPage"

const Book = ({ bookRef }) => {

    let bookId = Number(useParams().book)
    if (!bookId){
        bookId = 1
    }
    if (bookId > 66){
        bookId = 66
    }
    else if (bookId < 1){
        bookId = 1
    }
    const book = bookRef.find(b => b.id === bookId)

    let chapters = []
    for (let i = 0; i < book.chapters; i++){
        chapters = [ ...chapters, i + 1 ]
    }

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    return (
        <BookPage>
            <Helmet>
                <title>{ book.name } | Project Laisiangthou</title>
                <meta name="description" content={ `Project Laisiangthou, Chapter 1 to ${ book.chapters }` } />
            </Helmet>
            <div className="back" onClick={ useHistory().goBack }>
                <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="25,5 5,25 25,45 5,25 45,25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
            </div>
            <img src={ `/book-icons/${ book.id }.png` } alt={ book.name }/>
            <h1 className="title">{ book.name }<span>, chapter  1 to { book.chapters }</span></h1>
            <div className="chapters">
                {
                    chapters.map(chapter => <Link to={ `/${ bookId }/${ chapter }` } key={ chapter }></Link>)
                }
            </div>
        </BookPage>
    )

}

export default Book