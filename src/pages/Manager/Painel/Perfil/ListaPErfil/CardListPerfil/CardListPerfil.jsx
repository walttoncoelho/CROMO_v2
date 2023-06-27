
import { Cabecalho, TableBody, TableCell, TableHeader, TableList, TableRow, TableWrapper } from "../../../../components/TableListDefault/Style";


export default CardListPerfil;

function CardListPerfil({ dados = {} }) {


    // Mock de lista de banners
    const mockList = [
        { id: 1, empresa: "Cromo Construtora", responsavel: "Izabel", cnpj: "000-000-000-00", telefone: "98 98107-8886", email: "financeiro@cromoconstrutora.com.br", status: "Ativa", },

    ];

    return (
        <>
            <TableList>
                <Cabecalho>
                </Cabecalho>
                <TableWrapper>
                    <TableHeader>
                        <TableRow>
                            <TableCell minwidth="200px">Empresa</TableCell>
                            <TableCell minwidth="200px">Responsável</TableCell>
                            <TableCell minwidth="200px">Telefone</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockList.map((dado) => (
                            <TableRow key={dado.id}>
                                <TableCell
                                    color="#3a3a3a"
                                    minwidth="200px"
                                >
                                    {dado.empresa}
                                </TableCell>
                                <TableCell color="#3a3a3a" minwidth="200px">
                                    {dado.responsavel}
                                </TableCell>
                                <TableCell color="#3a3a3a" minwidth="200px">
                                    {dado.telefone}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableHeader>
                        <TableRow>
                            <TableCell minwidth="200px">E-mail</TableCell>
                            <TableCell minwidth="200px">Status</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockList.map((dado) => (
                            <TableRow key={dado.id}>
                                <TableCell color="#3a3a3a" minwidth="200px">
                                    {dado.email}
                                </TableCell>
                                <TableCell color="#3a3a3a" minwidth="200px">
                                    {dado.status}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableWrapper>
            </TableList>
        </>
    );
}
