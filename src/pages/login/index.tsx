import { useNavigate  } from "react-router-dom";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Link } from "../../components/Layout/Link";
import { api } from '../../services/api';

import { useForm } from "react-hook-form";

import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, Row, Wrapper } from './styles';
import { IFormData } from "./types";

const Login = () => {

    const navigate = useNavigate()
    
    const handleClickSignUp = () => {
        navigate('/signup')
    }

    const { control, handleSubmit, formState: { errors  } } = useForm<IFormData>({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData: IFormData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" control={control} type={"email"} placeholder={"email"} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input name="password" control={control} type="password" placeholder="senha" />
                    {errors.password && <span>Senha é obrigatório</span>}
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <Link href="#" color="#23dd7a" onClick={handleClickSignUp}>Criar conta</Link>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }