import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  min-width: 400px;
  padding: 12px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  margin-bottom: 20px;

  &:focus {
    border-color: black;
    outline: transparent;
  }
`;
