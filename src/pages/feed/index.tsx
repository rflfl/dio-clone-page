import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"
import bannerImage from "../../assets/banner.png"

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={82} nome="Rafael Lemes" image="https://avatars.githubusercontent.com/u/40215566?v=4" />
                <UserInfo percentual={75} nome="Rafael Lemes" image="https://avatars.githubusercontent.com/u/40215566?v=4" />
                <UserInfo percentual={70} nome="Rafael Lemes" image="https://avatars.githubusercontent.com/u/40215566?v=4" />
                <UserInfo percentual={50} nome="Rafael Lemes" image="https://avatars.githubusercontent.com/u/40215566?v=4" />
            </Column>
        </Container>
    </>)
}

export { Feed }