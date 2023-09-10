import {styled} from 'styled-components'

// The Button from the last section without the interpolations
export const Button = styled.button`
display: inline-block;
color: #BF4F74;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #BF4F74;
border-radius: 3px;
display: block;
`;

// A new component based on Button, but with some override styles
export const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;


// Create an Input component that'll render an <input> tag with some styles
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.$inputColor || "#BF4F74"};
  background: #f1f1f1;
  border: none;
  border-radius: 3px;
`;


export const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`

export const Select = styled.select`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.$inputColor || "#BF4F74"};
  background: white;
  border: none;
  border-radius: 3px;
`;

export const Text = styled.textarea`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.$inputColor || "#BF4F74"};
  background: #f1f1f1;
  border: 1px solid black;
  border-radius: 3px;
  width:200px;
  height:100px;
  display:block;
`;