import { useNavigate  } from "react-router-dom";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Link } from '../../components/Layout/Link';

import { api } from '../../services/api';

import { useForm } from "react-hook-form";

import { Container, Title, Column, TitleSignup, SubtitleSignup, Row, Wrapper} from './styles';
import { IFormData } from "./types";

const SignUp = () => {

    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/login')
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
                <TitleSignup>Comece agora grátis</TitleSignup>
                <SubtitleSignup>Crie sua conta e make the change._</SubtitleSignup>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="name" control={control} type={"name"} placeholder={"Nome completo"} />
                    {errors.name && <span>Nome completo</span>}

                    <Input name="email" control={control} type={"email"} placeholder={"E-mail"} />
                    {errors.email && <span>E-mail é obrigatório</span>}

                    <Input name="cellphone" control={control} type={"cellphone"} placeholder={"Celular ex: (11) 99999-9999"} />
                    {errors.email && <span>Celular</span>}

                    <Input name="password" control={control} type="password" placeholder="Senha" />
                    {errors.password && <span>Senha é obrigatório</span>}

                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <SubtitleSignup>Ao clicar em "criar minha conta", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO. Já tem uma conta?<Link href="#" color="#23dd7a" onClick={handleClickSignIn}>Faça login</Link></SubtitleSignup>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { SignUp }