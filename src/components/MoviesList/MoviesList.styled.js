import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  list-style: none;
  padding: 15px;
  margin: 0;
`;

export const LinkEl = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: red;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  text-align: center;
  width: 200px;
  height: 355px;
`;
