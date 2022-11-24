import styled from '@emotion/styled';

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 200px;
  border: 2px solid black;
  transition: border-color 250ms ease;
  :active,
  :hover,
  :focus {
    border-color: #6a6aec;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
