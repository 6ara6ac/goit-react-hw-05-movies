import styled from "styled-components";
import { Link } from "react-router-dom"

export const MovieContainer = styled.div`

padding: 0 50px;
`
export const MovieInfoContainer = styled.div`
display:flex;
gap: 20px;
padding: 20px 0;
`

export const BackLink = styled(Link)`
padding: 2px 16px;
border-radius: 4px;
text-decoration: none;
color: black;
font-weight: 500;

&:hover{
color: white;
  background-color: orangered;
}
`
