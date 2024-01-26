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
    UserPicture,
    Wrapper
} from './styles'
import { IHeader } from "./types"

const Header = ({ autenticado }: IHeader) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={Logo} width="75px" height="auto" alt="Logo da DIO" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar ..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ?
                        <UserPicture src="https://avatars.githubusercontent.com/u/40215566?v=4" />
                        : (
                            <>
                                <MenuRight href="#">Home</MenuRight>
                                <Button title="Entrar" />
                                <Button title="Cadastrar" />
                            </>
                        )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }