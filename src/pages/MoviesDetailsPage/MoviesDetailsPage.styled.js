import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    color: white;
    background-color: orangered;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: left;
`;

export const Img = styled.img`
  width: 250px;
  margin-right: 30px;
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
  list-style: none;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
  color: black;
`;

export const LinkEl = styled(Link)`
  text-decoration: none;
  color: black;
  outline: 2px solid black;
  border-radius: 5px;
  padding: 5px;

  &:hover {
    color: white;
    background-color: orangered;
  }
`;
