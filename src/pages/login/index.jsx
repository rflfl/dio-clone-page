import { useNavigate } from "react-router-dom"
import { MdEmail, MdLock } from "react-icons/md"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from "../../services/api"

import { Column, Container, Wrapper, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin } from "./styles";

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3,'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required()

const Login = () => {
    const navigate = useNavigate()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode:'onChange',
    })

    const onSubmit = formData => {
        try {
            const { data } = api.get(`users?email=${formData.email}&password${formData.password}`)
            if( data.lenght && data[0].id){
                navigate('/feed')
                return
            }else{
                alert('E-mail ou senha inválidos.')
            }
        } catch (error) {
            alert('Houve um error, tente novamente')
        }
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email"  control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                        <Input name="password"  control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Entrar" variant="secondary"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }