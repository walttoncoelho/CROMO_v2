import api from "../../../../services/api";
import { BtnDanger } from "../Buttons/Buttons";
import { Cabecalho, CabecalhoInput, CabecalhoLabel, TableBody, TableCell, TableHeader, TableList, TableRow, TableWrapper } from "../TableListDefault/Style";
export default CardListContato

function excluirContato(id /* number */) {
    api.delete(`/manager/leads/${id}`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
    .then(() => { window.location.href = "/manager/contatolist"});
} 

function CardListContato({ dados = {} }) {
    const mockList = [
        { id: 1, nome: "Waltton Coelho ", email: "Waltton@olamundo.tec", telefone: "98 9999-0000", mensagem: "Mensagem aleatória de teste", newsletter: "Assinou" },
        { id: 2, nome: "Waltton Coelho ", email: "Waltton@olamundo.tec", telefone: "98 9999-0000", mensagem: "Mensagem aleatória de teste", newsletter: "Assinou" },
        { id: 3, nome: "Waltton Coelho ", email: "Waltton@olamundo.tec", telefone: "98 9999-0000", mensagem: "Mensagem aleatória de teste", newsletter: "Assinou" },
        { id: 4, nome: "Waltton Coelho ", email: "Waltton@olamundo.tec", telefone: "98 9999-0000", mensagem: "Mensagem aleatória de teste", newsletter: "Assinou" },
        { id: 5, nome: "Waltton Coelho ", email: "Waltton@olamundo.tec", telefone: "98 9999-0000", mensagem: "Mensagem aleatória de teste", newsletter: "Assinou" },
        { id: 6, nome: "Waltton Coelho ", email: "Waltton@olamundo.tec", telefone: "98 9999-0000", mensagem: "Mensagem aleatória de teste", newsletter: "Assinou" },
        { id: 7, nome: "Waltton Coelho ", email: "Waltton@olamundo.tec", telefone: "98 9999-0000", mensagem: "Mensagem aleatória de teste", newsletter: "Assinou" },
        { id: 8, nome: "Waltton Coelho ", email: "Waltton@olamundo.tec", telefone: "98 9999-0000", mensagem: "Mensagem aleatória de teste", newsletter: "Assinou" },
    ];
    let list = dados.leads ?? mockList;
    return (
        <>
            <TableList>
                <Cabecalho>
                    <CabecalhoLabel>Exibir</CabecalhoLabel>
                    <CabecalhoInput></CabecalhoInput>
                    <CabecalhoLabel>Itens</CabecalhoLabel>
                </Cabecalho>
                <TableWrapper>
                    <TableHeader>
                        <TableRow>
                            <TableCell bgcolor="#d8e3f165" minwidth="50px"> Id</TableCell>
                            <TableCell minwidth="220px">Nome</TableCell>
                            <TableCell bgcolor="#d8e3f186" minwidth="300px">E-mail</TableCell>
                            <TableCell minwidth="150px">Telefone</TableCell>
                            <TableCell minwidth="250px">Mensagem</TableCell>
                            <TableCell minwidth="100px">Newsletter</TableCell>
                            <TableCell bgcolor="#d8e3f186" minwidth="200px">Ações</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {list.map((dado) => (
                            <TableRow key={dado.id}>
                                <TableCell
                                    color="#3a3a3a"
                                    bgcolor="#d8e3f186"
                                    width="70px"
                                    minwidth="50px"
                                >
                                    {dado.id}
                                </TableCell>
                                <TableCell>
                                </TableCell>
                                <TableCell color="#3a3a3a" minwidth="200px">
                                    {dado.nome}
                                </TableCell>
                                <TableCell bgcolor="#d8e3f186" color="#3a3a3a" minwidth="300px">
                                    {dado.email}
                                </TableCell>
                                <TableCell color="#3a3a3a" minwidth="150px">
                                    {dado.telefone}
                                </TableCell>

                                <TableCell color="#3a3a3a" minwidth="250px">
                                    {dado.mensagem}
                                </TableCell>
                                <TableCell color="#3a3a3a" minwidth="100px">
                                    {dado.newsletter}
                                </TableCell>

                                <TableCell bgcolor="#d8e3f186" color="#3a3a3a" minwidth="200px">
                                    <BtnDanger onClick={event => excluirContato(dado.id)} width="70px">Excluir</BtnDanger>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableWrapper>
            </TableList>


        </>
    )
}