import { Helmet } from "react-helmet-async"
import HomePage from "../../styled-components/pages/HomePage"
import Contents from "../partials/Contents"

const Home = ({ language, version, testament, setTestament, bookRef }) => {

    return (
        <HomePage>
            <Helmet>
                <title>Project Laisiangthou</title>
                <meta name="description" content={ `Project Laisiangthou, ${ version }, ${ language }` } />
            </Helmet>
            <h1 className="title"><i>Project</i>Laisiangthou<span> { version }</span></h1>
            <Contents
                testament={ testament }
                setTestament={ setTestament }
                bookRef={ bookRef }
            />
        </HomePage>
    )

}

export default Home