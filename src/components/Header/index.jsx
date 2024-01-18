import React from "react"
import Logo from '../../assets/logo-full.svg'
import { Button } from '../Button'
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
} from './styles'

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={Logo} width="75px" height="auto" alt="Logo da DIO" />
                    <BuscarInputContainer>
                        <Input placeholder="Buscar ..." />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }