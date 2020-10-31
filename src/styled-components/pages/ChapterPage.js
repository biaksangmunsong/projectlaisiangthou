import styled from "styled-components"

const ChapterPage = styled.div`
    display: block;
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    padding: 50px 0;
    position: relative;

    @media screen and (max-width: 900px){
        padding: 35px 0;
    }

    .back,
    .top-next {
        display: block;
        width: 45px;
        height: 45px;
        padding: 7px;
        position: absolute;
        top: 50px;
        z-index: 2;

        svg {
            display: block;
            width: 100%;
            height: 100%;

            polyline {
                stroke: #444;
            }
        }

        @media screen and (max-width: 900px){
            top: 32px;
        }
    }

    .back {
        left: 0;
    }

    .top-next {
        right: 0;
    }

    .title {
        display: block;
        width: 100%;
        line-height: 45px;
        font-size: 40px;
        font-family: PoppinsThin, sans-serif;
        color: #444;
        text-align: left;
        margin-bottom: 50px;
        padding: 0 60px;
        position: relative;
        z-index: 1;

        @media screen and (max-width: 900px){
            line-height: 40px;
            font-size: 35px;
        }

        @media screen and (max-width: 600px){
            line-height: 35px;
            font-size: 30px;
        }

        @media screen and (max-width: 400px){
            font-size: 28px;
        }

        span {
            vertical-align: middle;
            font-size: 0;
        }
    }

    .verses {
        display: block;
        width: 100%;
        counter-reset: verse;
        margin-bottom: 50px;

        @media screen and (max-width: 900px){
            margin-bottom: 35px;
        }

        @media screen and (max-width: 600px){
            margin-bottom: 20px;
        }

        .verse {
            display: block;
            width: 100%;
            margin-bottom: 35px;

            &:last-child {
                margin-bottom: 0;
            }

            .heading {
                display: block;
                width: 100%;
                line-height: 30px;
                font-size: 25px;
                font-family: LoraItalic, serif;
                font-weight: bold;
                text-align: left;
                color: #444;
                margin-bottom: 35px;

                @media screen and (max-width: 600px){
                    line-height: 27px;
                    font-size: 22px;
                }
            }

            .text {
                display: block;
                width: 100%;
                line-height: 30px;
                font-size: 20px;
                font-family: Lora, serif;
                font-weight: normal;
                text-align: left;
                color: #444;

                &::before {
                    counter-increment: verse;
                    content: counter(verse);
                    font-size: 140%;
                    vertical-align: middle;
                    font-weight: bold;
                    margin-right: 10px;
                    color: #aaa;
                }

                @media screen and (max-width: 600px){
                    line-height: 27px;
                    font-size: 17px;
                }
            }
        }
    }

    .message {
        display: block;
        width: 100%;
        line-height: 25px;
        font-size: 16px;
        font-family: LoraItalic, serif;
        font-weight: bold;
        color: #444;
        text-align: center;

        &.error {
            color: #cd5c5c;
        }
    }

    nav {
        display: block;
        width: 100%;
        height: 40px;
        position: relative;

        a {
            display: block;
            width: 40px;
            height: 40px;
            border: 0;
            outline: 0;
            background: transparent;
            padding: 5px;

            &.next {
                position: absolute;
                top: 0;
                right: 0;
            }

            svg {
                display: block;
                width: 100%;
                height: 100%;

                polyline {
                    stroke: #444;
                }
            }
        }
    }
`

export default ChapterPage