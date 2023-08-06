import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  margin: 0 auto;
  padding-top: 32px;
`;

export const ContactsContaier = styled.div`
  margin-top: 32px;
`;

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  border-radius: 8px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const Button = styled.button`
  border-radius: 8px;
  background-color: orange;
  border: 2px solid black;
  min-height: 24px;
  min-width: 64px;
  color: white;
`;
