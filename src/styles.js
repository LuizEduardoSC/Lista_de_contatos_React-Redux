import styled from 'styled-components'

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 25px;

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    transition: border 0.2s;

    &:focus {
      border-color: #0077ff;
      outline: none;
    }
  }
`

export const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  background: ${(props) =>
    props.variant === 'danger' ? '#e74c3c' : '#0077ff'};
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) =>
      props.variant === 'danger' ? '#c0392b' : '#005fcc'};
  }
`

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  border: 1px solid #eee;

  strong {
    color: #222;
  }

  span {
    color: #555;
    font-size: 14px;
  }
`

export const ContactActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`

export const IconButton = styled.button`
  background: ${(props) =>
    props.variant === 'danger' ? '#e74c3c' : '#3498db'};
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) =>
      props.variant === 'danger' ? '#c0392b' : '#2980b9'};
  }
`
