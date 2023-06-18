import styled from 'styled-components'

export const Container = styled.View`
margin-top: 18px;
`

export const Description = styled.Text.attrs({
numberOfLines:1
})`
font-size:18px;
flex-shrink:1;
color:#676767;
`

export const Title = styled.Text.attrs({
    numberOfLines:1
    })`
    font-size:24px;
    font-weight:500;
    flex-shrink:1;
    color:#FFFFFF;
    `