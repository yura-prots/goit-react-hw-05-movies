import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  margin-right: 10px;
  color: black;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px 25px;
  background: transparent;
  max-width: 190px;
`;

export const SearchButton = styled.button`
  cursor: pointer;
  color: black;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 10px 15px;
  background: transparent;

  &:hover {
    color: white;
    background-color: orangered;
  }
`;
