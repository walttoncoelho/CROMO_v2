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

export default CardListContato
function CardListContato({ dados = {} }) {
    let list = dados.leads ?? [];
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
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Telefone</TableHead>
                        <TableHead>Mensagem</TableHead>
                        <TableHead>Newsletter</TableHead>
                    </THead>
                    <TBody>
                        {list.map(lead => (
                        <TableRow key={lead.id}>
                            <TableData>{lead.nome}</TableData>
                            <TableData>{lead.email}</TableData>
                            <TableData>{lead.telefone}</TableData>
                            <TableData>{lead.mensagem}</TableData>
                            <TableData>{lead.newsletter ? "Assinou" : "Recusou"}</TableData>
                        </TableRow>
                        ))} 
                    </TBody>
                </TableConfig>
            </TableOverflow>
        </TableList>
        </>
    )
}