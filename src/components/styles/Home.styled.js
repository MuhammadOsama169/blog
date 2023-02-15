import styled from 'styled-components';

export const MainContainer = styled.section`
  width: 100%;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const InnerContainer = styled.div`
  margin: auto;
  max-width: 1088px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 900px) {
    padding-top: 0.1%;
    padding-bottom: 0.1%;
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
  }
`;
export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Body = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const Author = styled.p`
  font-size: 14px;
  color: gray;
  text-align: right;
`;
export const DeletePost = styled.button`
  font-size: 14px;
  background-color: red;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  float: right;
  cursor: pointer;
`;
