import { useState, useEffect } from "react"
import { useParams, useHistory, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import axios from "axios"
import ChapterPage from "../../styled-components/pages/ChapterPage"

const Chapter = ({ bookRef, language, version }) => {
    
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

    let chapterId = Number(useParams().chapter)
    if (!chapterId){
        chapterId = 1
    }
    if (chapterId > book.chapters){
        chapterId = book.chapters
    }
    else if (chapterId < 1){
        chapterId = 1
    }

    const [ verses, setVerses ] = useState([])
    const [ error, setError ] = useState([])
    useEffect(() => {
        const getVerses = async () => {
            setVerses([])
            setError(null)

            try {
                const verses = await axios.get(`https://projectlaisiangthou-api.herokuapp.com/verses?language=${ language }&version=${ version }&book=${ bookId }&chapter=${ chapterId }`)
                setVerses(verses.data)
            }
            catch (err){
                if (err.response && err.response.data){
                    setError(err.response.data)
                }
                else {
                    setError({
                        code: "unexpected",
                        message: err.message
                    })
                }
            }

            // get previous chapter
            if (chapterId > 1){
                try {
                    await axios.get(`https://projectlaisiangthou-api.herokuapp.com/verses?language=${ language }&version=${ version }&book=${ bookId }&chapter=${ chapterId - 1 }`)
                }
                catch {
                    console.log("cannot get previous chapter!")
                }
            }
            
            // get next chapter
            if (chapterId < book.chapters){
                try {
                    await axios.get(`https://projectlaisiangthou-api.herokuapp.com/verses?language=${ language }&version=${ version }&book=${ bookId }&chapter=${ chapterId + 1 }`)
                }
                catch {
                    console.log("cannot get next chapter!")
                }
            }
        }

        getVerses()
    }, [ bookId, chapterId, language, version, book.chapters ])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const verseText = verse => {
        verse.verse_text = verse.verse_text.split("<br>").join("\n").split(".").join(". ").split(".  ").join(". ").split("-").join(" - ").split("- ").join("- ").split(" -").join(" -")

        if (verse.verse_text.includes("\n\n")){
            const text = verse.verse_text.split("\n\n")

            return (
                <div className="verse" key={ verse._id }>
                    <div className="heading">{ text[0] }</div>
                    <div className="text">{ text[1] }</div>
                </div>
            )
        }
        else {
            return (
                <div className="verse" key={ verse._id }>
                    <div className="text">{ verse.verse_text }</div>
                </div>
            )
        }
    }

    return (
        <ChapterPage>
            <Helmet>
                <title>{ `${ book.name } Chapter ${ chapterId } | Project Laisiangthou` }</title>
                <meta name="description" content={ verses.length ? verses[0].verse_text : `${ book.name } ${ chapterId }` } />
            </Helmet>
            <div className="back" onClick={ useHistory().goBack }>
                <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="25,5 5,25 25,45 5,25 45,25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
            </div>
            {
                (chapterId + 1) < book.chapters &&
                <Link to={ `/${ bookId }/${ chapterId + 1 }` } className="top-next">
                    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="15,5 35,25 15,45" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                </Link>
            }
            <h1 className="title">{ book.name } <span>{ bookId === 19 ? "number" : "chapter" }</span>{ chapterId }</h1>
            {
                (verses.length && !error) ?
                <div className="verses">
                    {
                        verses.map(verse => verseText(verse))
                    }
                </div> : ""
            }
            {
                (!error && verses.length < 1) ?
                <div className="message loading">Loading verses...</div> : ""
            }
            {
                (error && verses.length < 1) ?
                <div className="message error">{ error.message }</div> : ""
            }
            {
                (verses.length && !error) ?
                <nav>
                    {
                        (chapterId - 1) > 0 &&
                        <Link to={ `/${ bookId }/${ chapterId - 1 }` } className="prev">
                            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <polyline points="35,5 15,25 35,45" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </Link>
                    }
                    {
                        (chapterId + 1) < book.chapters &&
                        <Link to={ `/${ bookId }/${ chapterId + 1 }` } className="next">
                            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <polyline points="15,5 35,25 15,45" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </Link>
                    }
                </nav> : ""
            }
        </ChapterPage>
    )

}

export default Chapter