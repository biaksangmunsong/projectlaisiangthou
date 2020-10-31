import { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import Home from "./components/pages/Home"
import Book from "./components/pages/Book"
import Chapter from "./components/pages/Chapter"
import bookRefs from "./bookRefs"

const App = () => {

  const [ language, setLanguage ] = useState("")
  const [ version, setVersion ] = useState("")
  const [ bookRef, setBookRef ] = useState(null)
  const [ testament, setTestament ] = useState("old")

  useEffect(() => {
    setLanguage("english")
    setVersion("nlt")
  }, [])

  useEffect(() => {
    if (language && version && testament){
      setBookRef(bookRefs[`${ language }_${ version }`])
    }
  }, [ language, version, testament ])
  
  return (
    <HelmetProvider>
      <div className="__app">
        {
          (version && bookRef && testament) &&
          <Switch>
            <Route exact path="/">
              <Home
                language={ language }
                version={ version }
                testament={ testament }
                setTestament={ setTestament }
                bookRef={ bookRef }
              />
            </Route>
            <Route path="/:book/:chapter">
              <Chapter bookRef={ bookRef } language={ language } version={ version } />
            </Route>
            <Route path="/:book">
              <Book bookRef={ bookRef } />
            </Route>
            <Route exact path="/">
              <Home
                language={ language }
                version={ version }
                testament={ testament }
                setTestament={ setTestament }
                bookRef={ bookRef }
              />
            </Route>
          </Switch>
        }
      </div>
    </HelmetProvider>
  )

}

export default App