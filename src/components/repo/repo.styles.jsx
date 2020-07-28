import styled from 'styled-components'

export const ProfileContent = styled.div`
    width: 69%;
    display: inline-block;
`;

export const ContentList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    li{
        align-content: stretch;
        display: flex;
        width: 50%;
        padding: 8px;
        .git-list{
            background-color: #fff;
            border-radius: 6px;
            width: 100%;
            padding: 15px;
            position: relative;
            box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
        }
        h1{
            font-weight: 400;
            font-size: 15px;
            text-transform: uppercase;
            a{
                color: #0366d6;
            }
        }
        p{
            font-size: 13px;
            color: #767879;
            margin: 15px 0;
        }
        .icon div{
            margin-right: 5px
        }
        .icon div,
        .icon{
            display: flex;
        }
        span{
            color: #586069;
            font-size: 12px;
            display: block;
        }
    }
`;