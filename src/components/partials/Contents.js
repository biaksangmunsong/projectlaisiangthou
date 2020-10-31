import ContentsDiv from "../../styled-components/partials/ContentsDiv"
import { Link } from "react-router-dom"

const Contents = ({ testament, setTestament, bookRef }) => {

    const bookName = name => {
        if (name.includes("1st")){
            name = name.split("1st").join("")
            return <div className="name">1<span>st</span>{ name }</div>
        }
        else if (name.includes("2nd")){
            name = name.split("2nd").join("")
            return <div className="name">2<span>nd</span>{ name }</div>
        }
        else if (name.includes("3rd")){
            name = name.split("3rd").join("")
            return <div className="name">3<span>rd</span>{ name }</div>
        }
        else {
            return <div className="name">{ name }</div>
        }
    }

    let books = []
    const start = testament === "old" ? 0 : 39
    const end = testament === "old" ? 39 : 66
    for (let i = start; i < end; i++){
        books = [
            ...books,
            bookRef[i]
        ]
    }
    bookRef = books

    return (
        <ContentsDiv>
            <nav>
                <button type="button" className={ testament === "old" ? "active" : "" } onClick={ () => setTestament("old") }>Old<span>testament</span></button>
                <button type="button" className={ testament === "new" ? "active" : "" } onClick={ () => setTestament("new") }>New<span>testament</span></button>
            </nav>
            <div className="books">
                {
                    bookRef &&
                    bookRef.map(book => {
                        return (
                            <Link
                                to={ `/${ book.id }` }
                                className="book"
                                key={ book.id }
                            >
                                <img src={ `/book-icons/${ book.id }.png` } alt={ book.name } />
                                { bookName(book.name) }
                            </Link>
                        )
                    })
                }
            </div>
        </ContentsDiv>
    )

}

export default Contents