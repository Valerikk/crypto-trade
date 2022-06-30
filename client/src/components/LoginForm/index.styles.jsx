import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Title = styled.span`
  color: #4000ff;
  font-weight: bold;
  font-size: 65px;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  border: 2px solid #4000ff;
  background-color: inherit;
  border-radius: 5px;
  padding: 10px;
  color: white;
`;

export const Label = styled.label`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  border: 2px solid #4000ff;
  background-color: inherit;
  border-radius: 5px;
  color: #4000ff;
  font-weight: bold;
  font-size: 25px;
`;

export const Link = styled.a`
  color: white;
  margin-top: 5px;
  font-size: 15px;
`;
