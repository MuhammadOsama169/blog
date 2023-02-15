import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.nav`
  background-color: #f2f2f2;
  width: 200px;
  height: 100vh;
  float: left;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 20px;
  color: black;
  text-decoration: none;
`;
