// import { Link } from "react-router-dom";

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import bannerImage from "../../assets/banner.png"

import { Container, TextContent, Title, TitleHighlight } from "./styles";

const Home = () => {
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
                    Domine as tecnologias utilizadas pelas empresas mais invoadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={() => null}></Button>
            </div>
            <div>
                <img src={bannerImage} alt="Imagem banner" />
            </div>
        </Container>
    </>)
}

export { Home }