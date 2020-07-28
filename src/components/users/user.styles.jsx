import styled from 'styled-components'

export const CardsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 35px;
    @media (max-width: 800px) {
        .cards {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      
      @media (max-width: 500px) {
        .cards {
          grid-template-columns: 1fr;
        }
      }
    `;
export const CardsContentIn = styled.div`
        cursor: pointer;
        background-color: transparent;
        height: 300px;
        perspective: 1000px;
        h1 {
            font-size: 19px;
            font-weight: 200
        }
        a{
            right: 10px;
            position: absolute;
            color: #d6d6d6;
            text-decoration: underline;
            &:hover{
                color:#a6b2d6
            }
        }
        img {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }
        li {
            list-style: none;
            padding-bottom: 10px;
        }
        .card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.8s;
            transform-style: preserve-3d;
            .card-front,
            .card-back {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
            }
            .card-back {
                background-color: #333333ad;
                color: white;
                padding: 6px;
                height: initial;
                bottom: 0;
                display: flex;
            }
        }
    
`;