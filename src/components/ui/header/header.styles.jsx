import styled from 'styled-components'

export const PageHeader = styled.div`
    padding: 15px 35px;
    font-size: 1.25rem;
    line-height: 1.5;
    color: hsla(0,0%,100%,.7);
    background-color: #24292e;
    position: relative;
    a{
        color: hsla(0,0%,100%,.7);
        &hover{
            color: hsla(0, 100%, 99%, 0.9);
        }
    }
    .header-logo{
        position: relative;
        svg,
        a{
            vertical-align: middle;
        }
        a{
            margin-left: 10px
        }
    }
`;