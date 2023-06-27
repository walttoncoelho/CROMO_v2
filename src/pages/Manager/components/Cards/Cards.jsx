import './Cards.css'
import {ContainerCard, 
        InfoCard, 
        TituloDeAcessos,
        UltimosDias,
        NumeroAcessos,
        Acessos
} from './Style/Card'
export default Cards

function Cards()  {
    return (
        <>
        <ContainerCard>
            <TituloDeAcessos>Acessos</TituloDeAcessos>
            <InfoCard>
                <UltimosDias>Ultimos 30 Dias</UltimosDias>
                <div>
                    <NumeroAcessos>1369</NumeroAcessos>
                    <Acessos>Acessos</Acessos>
                </div>
            </InfoCard>
        </ContainerCard>
    </>
    )
}