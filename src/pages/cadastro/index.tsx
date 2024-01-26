import { useNavigate } from "react-router-dom"
import { MdEmail, MdLock } from "react-icons/md"
import { FaUser } from "react-icons/fa6"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from "../../services/api"

import { Column, Container, Wrapper, JaTenhoText, Row, SubtitleCadastro, Title, TitleCadastro, TermosUsoText } from "./styles";

const schema = yup.object({
    nome: yup.string().required('Campo obrigatório'),
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3,'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required()

const Cadastro = () => {
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
            console.log(formData)
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
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                    <form>
                        <Input name="nome"  control={control} placeholder="Nome completo" leftIcon={<FaUser />} />
                        <Input name="email"  control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                        <Input name="password"  control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Criar minha conta" variant="secondary" type="button" onClick={handleSubmit(onSubmit)}/>
                    </form>
                    <TermosUsoText>Ao clicar em "Criar minha conta", declaro que aceito que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermosUsoText>
                    <Row>
                        <JaTenhoText>
                            Já tenho conta.  
                            <a href="/login">Fazer login</a>
                        </JaTenhoText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }