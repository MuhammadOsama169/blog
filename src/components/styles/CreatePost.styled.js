import styled from 'styled-components';

export const MainContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;
export const InnerContainer = styled.div`
  margin: auto;
  width: 100vw;
  max-width: 800px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  margin-top: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 900px) {
    padding: 0px;
    display: flex;
    flex-direction: column;
  }
`;
export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;
export const Input = styled.input`
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
  @media screen and (max-width: 900px) {
    width: 50%;
  }
`;
export const Button = styled.button`
  background: #24a0ed;
  border-radius: 3px;
  border: 2px solid lightblue;
  color: white;
  margin: 0 1em;
  padding: 20px;
`;

export const PostContainer = styled.div`
  marging: 50px 0 0 50px;
`;
export const StyledTextarea = styled.textarea`
  margin-top: 20px;
  width: 500px;
  font-size: 16px;
  line-height: 1.5;
  @media screen and (max-width: 900px) {
    padding: 0px;
    width: 80vw;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  background-color: black;
  border-radius: 12px;
  color: white;
  display: flex;
  flex-direction: column;
  place-items: center;
  @media screen and (max-width: 900px) {
    height: 20vh;
    padding: 0px;
  }
`;
