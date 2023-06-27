import { 
    TableList,
    Cabecalho,
    CabecalhoLabel,
    CabecalhoInput,
    TableConfig,
    TableOverflow,
    TBody,
    THead,
    TableHead,
    TableData,
    TableRow 
} from './style/CardListing'

export default CardListing
function CardListing({ dados = [] }) {
    return(
        <>
        <TableList>
            <Cabecalho>
                <CabecalhoLabel>Exibir</CabecalhoLabel>
                <CabecalhoInput></CabecalhoInput>
                <CabecalhoLabel>Itens</CabecalhoLabel>
            </Cabecalho>
            <TableOverflow>
                <TableConfig>
                    <THead>
                        <TableHead>Ticket</TableHead>
                        <TableHead>Assunto</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Última interação</TableHead>
                    </THead>
                    <TBody>
                        {dados.map(({Ticket, Assunto, Status, UltimaInteracao }) => (
                            <TableRow key={Ticket}>
                                <TableData>{Ticket}</TableData>
                                <TableData>{Assunto}</TableData>
                                <TableData>{Status}</TableData>
                                <TableData>{UltimaInteracao}</TableData>
                            </TableRow>
                        ))} 
                    </TBody>
                </TableConfig>
            </TableOverflow>
        </TableList>
        </>
    )
}