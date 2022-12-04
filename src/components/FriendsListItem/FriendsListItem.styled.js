import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 12px 26px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 3px;
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: black;
`;

export const Avatar = styled.img`
    width: 60;
    height: 60;
    margin: 0 13px;
`;

export const OnlineStatus = styled.span`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: ${({ online }) => (online ? 'green' : 'red')};
`;
