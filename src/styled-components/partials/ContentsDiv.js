import styled from "styled-components"

const ContentsDiv = styled.div`
    display: block;
    width: 100%;
    font-size: 0;

    nav {
        display: block;
        width: 100%;
        text-align: center;
        font-size: 0;
        margin-bottom: 50px;

        @media screen and (max-width: 600px){
            margin-bottom: 30px;
        }

        button {
            display: inline-block;
            vertical-align: middle;
            border: 0;
            outline: 0;
            background: transparent;
            line-height: 25px;
            font-size: 20px;
            font-family: LoraItalic, serif;
            font-style: italic;
            font-weight: normal;
            color: #ddd;

            span {
                font-size: 0;
            }

            &.active {
                color: #444;
                font-weight: bold;
            }

            &:first-child {
                margin-right: 20px;
            }

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
    }

    .books {
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        @media screen and (max-width: 900px){
            grid-template-columns: repeat(3, 1fr);
        }
        
        .book {
            display: block;
            width: 100%;
            padding: 20px 0;
            outline: 0;
            transition: .2s linear;

            &:hover,
            &:focus {
                background: #eee;
            }

            img {
                display: block;
                width: 70px;
                height: 70px;
                object-fit: contain;
                margin: 0 auto;

                @media screen and (max-width: 600px){
                    width: 50px;
                    height: 50px;
                }

                @media screen and (max-width: 400px){
                    width: 40px;
                    height: 40px;
                }
            }

            .name {
                display: block;
                width: 100%;
                line-height: 30px;
                font-family: LoraItalic, serif;
                font-style: italic;
                font-size: 20px;
                text-align: center;
                color: #444;
                font-weight: normal;
                margin-top: 10px;

                span {
                    font-size: 0;
                    vertical-align: middle;
                }

                @media screen and (max-width: 600px){
                    line-height: 25px;
                    font-size: 18px;
                }

                @media screen and (max-width: 400px){
                    font-size: 15px;
                }
            }
        }
    }
`

export default ContentsDiv