import styled from 'styled-components';

const SmallCardContainer = styled.div`
    color: white;
    width: 182px;
    margin-top: 18px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .popular-title {
        width: 152px;
        font-size: 18px;
        height: 88px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 8px;
    }
    img {
        width: 152px;
        height: 248px;
        border-radius: 12px;
    }
`;

export default SmallCardContainer;