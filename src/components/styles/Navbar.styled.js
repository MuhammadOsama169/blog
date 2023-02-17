import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '50%' : '80px')};
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ExtendedWrapper = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '50%' : '300px')};
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media all and (min-width: 1086px) {
    display: none;
  }
`;
export const NavLink = styled(motion.a)`
  font-style: normal;
  font-size: 24px;
  color: white;
  color: #f5f5f5;
  text-decoration: none;
  padding-left: 20px;
  &:hover {
    color: #ffcd3d;
  }
  @media all and (max-width: 1086px) {
    display: none;
  }
`;
export const NavbarLinkExtended = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 29px;
  color: white;
  text-decoration: none;
  padding-top: 5px;
  &:hover {
    color: #ffcd3d;
    transform: scale(0.98);
  }
`;
export const InnerContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 8%;
  padding-right: 8%;

  @media all and (max-width: 1086px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;
export const HamburgerButton = styled.button`
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media all and (min-width: 1086px) {
    display: none;
  }
`;

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  @media screen and (min-width: 1086px) {
    display: none;
    padding: 10px;
  }
`;
export const NavbarLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-left: 50px;
  @media screen and (max-width: 1086px) {
    padding: 0px;
  }
`;
