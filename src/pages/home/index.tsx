import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import bannerImage from "../../assets/banner.png"

import { Container, TextContent, Title, TitleHighlight } from "./styles";

const Home = () => {
    const navigate = useNavigate()

    const handleClickSignin = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente
                        <br />
                    </TitleHighlight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignin}></Button>
            </div>
            <div>
                <img src={bannerImage} width="500px" height="auto" alt="Imagem banner" />
            </div>
        </Container>
    </>)
}

export { Home }