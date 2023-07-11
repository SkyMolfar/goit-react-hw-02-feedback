import styled from 'styled-components';


export const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #e6e6e6;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;


