import styled from 'styled-components';

const HeaderContainer = styled.div`
    width: 100vw;
    background-image: attr(url);
    mask-image: linear-gradient(to bottom, rgba(2, 0, 6, 1) 60%, transparent 90%);
    .header-background {
        height: 628px;
        width: 100vw;
    }
`;

export default HeaderContainer;