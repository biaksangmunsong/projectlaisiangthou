import styled from "styled-components"

const BookPage = styled.div`
    display: block;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 50px 0;

    @media screen and (max-width: 900px){
        padding: 35px 0;
    }

    @media screen and (max-width: 600px){
        padding: 20px 0;
    }

    .back {
        display: block;
        width: 45px;
        height: 45px;
        padding: 7px;
        margin-left: 20px;

        svg {
            display: block;
            width: 100%;
            height: 100%;

            polyline {
                stroke: #444;
            }
        }
    }

    img {
        display: block;
        width: 150px;
        margin: 0 auto 50px auto;

        @media screen and (max-width: 900px){
            width: 125px;
            margin-bottom: 40px;
        }

        @media screen and (max-width: 600px){
            width: 100px;
            margin-bottom: 30px;
        }
    }

    .title {
        display: block;
        width: 100%;
        line-height: 45px;
        font-size: 40px;
        font-family: PoppinsThin, sans-serif;
        color: #444;
        text-align: center;
        margin-bottom: 70px;

        @media screen and (max-width: 900px){
            line-height: 40px;
            font-size: 35px;
            margin-bottom: 35px;
        }

        @media screen and (max-width: 600px){
            line-height: 35px;
            font-size: 30px;
            margin-bottom: 20px;
        }

        @media screen and (max-width: 400px){
            font-size: 28px;
        }

        span {
            vertical-align: middle;
            font-size: 0;
        }
    }

    .chapters {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        width: 90%;
        max-width: 500px;
        margin: 0 auto;
        counter-reset: chapter;

        @media screen and (max-width: 600px){
            grid-template-columns: repeat(4, 1fr);
        }

        @media screen and (max-width: 350px){
            grid-template-columns: repeat(3, 1fr);
        }

        a {
            display: block;
            width: 100%;
            transition: .2s linear;
            border: 1px solid transparent;
            outline: 0;

            &::before {
                counter-increment: chapter;
                content: counter(chapter);
                display: block;
                width: 100%;
                line-height: 70px;
                font-family: PoppinsThin, sans-serif;
                color: #444;
                font-size: 20px;
                font-weight: bolder;
                text-align: center;
            }

            &:hover,
            &:only-child {
                border-color: #aaa;
            }
        }
    }
`

export default BookPage