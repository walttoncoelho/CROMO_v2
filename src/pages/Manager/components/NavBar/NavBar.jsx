import {
    ContainerNavBar,
    DivLogo,
    DivSaudacao,
    NomePessoa,
    ContainerBotoes
} from './style/NavBar';
import { BotaoNormal, BotaoTransparente } from '../Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../../../components/Navbar/img/logo.png';

export default function NavBar() {
    let navigate = useNavigate();

    let logout = function (event) {
        event.preventDefault();
        localStorage.clear('token');
        navigate('/manager');
    };

    let redirectToSite = function (event) {
        event.preventDefault();
        window.open('/', '_blank');
    };

    let { nome } = {
        nome: 'Cromo Construtora',
    };

    return (
        <>
            <ContainerNavBar>
                <DivLogo>
                    <a href="/manager/painel">
                        <img src={logoImg} alt="logo" />
                    </a>
                </DivLogo>
                <DivSaudacao>
                    <NomePessoa>
                        Olá, <strong>{nome}</strong>
                    </NomePessoa>
                </DivSaudacao>
                <ContainerBotoes>
                    <BotaoTransparente onClick={logout}>Sair</BotaoTransparente>
                    <BotaoNormal onClick={redirectToSite}>Ir para o site</BotaoNormal>
                </ContainerBotoes>
            </ContainerNavBar>
        </>
    );
}
