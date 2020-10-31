import styled from "styled-components"

const HomePage = styled.div`
    display: block;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 70px 0;

    @media screen and (max-width: 900px){
        padding: 50px 0;
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
        }

        @media screen and (max-width: 600px){
            line-height: 35px;
            font-size: 30px;
            margin-bottom: 50px;
        }

        @media screen and (max-width: 400px){
            font-size: 28px;
        }

        i {
            display: block;
            width: 100%;
            line-height: 25px;
            font-family: LoraItalic, serif;
            font-size: 20px;
            font-weight: lighter;

            @media screen and (max-width: 900px){
                line-height: 24px;
                font-size: 18px;
            }

            @media screen and (max-width: 600px){
                line-height: 20px;
                font-size: 16px;
            }

            @media screen and (max-width: 400px){
                font-size: 15px;
            }
        }

        span {
            width: 0;
            overflow: visible;
            font-size: 50%;
            color: orange;
            text-transform: uppercase;
        }
    }
`

export default HomePage