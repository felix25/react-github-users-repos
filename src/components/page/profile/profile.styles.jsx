import styled from 'styled-components'

export const ProfileUser = styled.div`
    display: block;
    width: 100%;
    padding: 35px;
`;
export const Aside = styled.div`
    width: 27%;
    display: inline-block;
    vertical-align: top;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    background: #ffffff;
    border-radius: 4px;
    padding: 15px;
    margin: 0 29px;
    box-sizing: border-box;
    margin-left: 0;
`;
export const AsideAvatar = styled.div`
    width: 278px;
    height: 278px;
    margin: 0 auto;
    img{
        width: 100%;
        border-radius: 50%;
    }
`;
export const AsideInfo = styled.div`
    width: 248px;
    margin: 0 auto;
    h2{
        color:#24292e;
        font-size: 26px;
        line-height: 1.25;
    }
    h3{
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 24px;
        color: #666;
    }
    p{
        font-size: 0.875rem;
        margin: 16px 0;
        font-family: unset;
        color: #545353;
    }
`;
export const AsideList = styled.ul`
    li{
        font-size: 14px;
        padding: 4px 0;
        list-style: none;
    }
`;
export const LinkProfile = styled.a`
    color: #24292e;
    background-color: #fafbfc;
    width: 100%;
    text-align: center;
    display: inline-block;
    padding: 5px 16px;
    line-height: 20px;
    white-space: nowrap;
    -webkit-user-select: none;
    border: 1px solid;
    border-radius: 6px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 16px 0;
    font-size: 0.8125rem;
    text-transform: uppercase;
`;