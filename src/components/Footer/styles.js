import { Flex, colors } from '../../common/styles';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background: ${colors.backgroundGray};
    font-size: 14px;
    padding-bottom: 2rem;
    text-align: center;
`;

export const LinksContainer = styled.ul`
    background: ${colors.primaryBlue};
    padding: 1rem;
    list-style-type: none;
    > li {
        margin: 0.5rem;
    }
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`;

export const CopyrightContainer = styled(Flex)`
    flex-direction: column;
    width: 75%;
    margin: 0 auto;
    text-align: center;
    font-size: 14px;
    padding: 1rem 0;
    gap: 0.75rem;
`;

export const ImagesContainer = styled(Flex)`
    justify-content: space-around;
    @media (max-width: 768px) {
        display: none;
    }
`;
