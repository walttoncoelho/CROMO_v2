export default CardConfigutarion
import { SectionConfiguration,
         DivCabecalho,
         Form,
         DivEmail,
         DivInstagram,
         DivFacebook,
         LabelTitulo,
         Botoes,
         DivLogo,
         DivLogoFlex,
         InputLogo
} from "./style/CardConfigurationStyle"
import { InputTransparenteAtivo } from "../Forms/style/Forms"
import { BotaoNormal, BotaoTransparente } from "../Buttons/Buttons"

function CardConfigutarion() {
    return (
        <>
        <SectionConfiguration>
            <DivCabecalho>Contato e redes sociais</DivCabecalho>
            <Form>
                <DivEmail>
                        <LabelTitulo>E-mail</LabelTitulo>
                        <InputTransparenteAtivo placeholder="comerciarl@meudomio.com"></InputTransparenteAtivo>
                </DivEmail>
                <DivInstagram>
                        <LabelTitulo>Instagram</LabelTitulo>
                        <InputTransparenteAtivo placeholder="@perfi_instagram"></InputTransparenteAtivo>
                </DivInstagram>
                <DivFacebook>
                        <LabelTitulo>Facebook</LabelTitulo>
                        <InputTransparenteAtivo placeholder="@perfil_facebook"></InputTransparenteAtivo>
                </DivFacebook>
                <DivLogo>
                        <LabelTitulo>Logo do site</LabelTitulo>
                        <DivLogoFlex>
                            <InputLogo placeholder="Fazer upload do computador"></InputLogo>
                            <BotaoTransparente>Anexar</BotaoTransparente>
                        </DivLogoFlex>
                </DivLogo>
                <Botoes>
                    <BotaoTransparente>Editar</BotaoTransparente>
                    <BotaoNormal>Salvar</BotaoNormal>
                </Botoes>
            </Form>
        </SectionConfiguration>
        </>
    )
}