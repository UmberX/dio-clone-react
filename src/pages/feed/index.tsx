import { Card } from '../../components/Card';
import { Header } from "../../components/Header";
import { UserInfo } from '../../components/UserInfo';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
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
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo percentual={90} nome="Katiana X." image="https://avatars.githubusercontent.com/u/111511975?v=4" />
                <UserInfo percentual={73} nome="Katiana X." image="https://avatars.githubusercontent.com/u/111511975?v=4" />
                <UserInfo percentual={61} nome="Katiana X." image="https://avatars.githubusercontent.com/u/111511975?v=4" />
                <UserInfo percentual={50} nome="Katiana X." image="https://avatars.githubusercontent.com/u/111511975?v=4" />
                <UserInfo percentual={33} nome="Katiana X." image="https://avatars.githubusercontent.com/u/111511975?v=4" />
            </Column>
        </Container>
    </>)
}

export { Feed }