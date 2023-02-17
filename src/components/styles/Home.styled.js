import styled from 'styled-components';
import ImgCover from '../../assets/cover.jpg';

export const MainContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const InnerContainer = styled.div`
  margin: auto;
  width: 100%;
  max-width: 500px;
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
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url(${ImgCover});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 370px;

  @media screen and (max-width: 900px) {
    height: 250px;
    background-size: fill;
  }
  @media screen and (max-width: 700px) {
    height: 300px;
    background-size: fill;
  }
  @media screen and (max-width: 500px) {
    height: 200px;
    background-size: fill;
  }
`;
