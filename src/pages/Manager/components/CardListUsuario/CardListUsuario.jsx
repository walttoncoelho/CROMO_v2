import { 
    // BtnDanger, 
    BtnOutline 
} from "../Buttons/Buttons";
import { Cabecalho, CabecalhoInput, CabecalhoLabel, TableBody, TableCell, TableHeader, TableList, TableRow, TableWrapper } from "../TableListDefault/Style";

function editarUsuario(id /* number */)
{
    window.location.href = `/manager/usuario/edicao/${id}`;
}

export default function CardListUsuario({ dados = {} }) {
    // Mock de lista de usuarios
    const mockList = [
        {
            id: 1,
            name: "Manager",
            email: "manager@cromo.com.br",
            status: true,
        }
    ];
    let list = dados.usuarios ?? mockList;
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
                            <TableCell bgcolor="#d8e3f165" width="70px" minwidth="50px">
                                Id
                            </TableCell>
                            <TableCell minwidth="150px">Status</TableCell>
                            <TableCell minwidth="300px">Email</TableCell>
                            <TableCell minwidth="200px">Nome</TableCell>
                            <TableCell minwidth="100px">Ações</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {list.map((usuario) => (
                            <TableRow key={usuario.id}>
                                <TableCell
                                    color="#3a3a3a"
                                    bgcolor="#d8e3f186"
                                    width="70px"
                                    minwidth="50px"
                                >
                                    {usuario.id}
                                </TableCell>
                                <TableCell color="#3a3a3a" minwidth="150px">
                                    {usuario.status ?"Ativo" :"Bloqueado"}
                                </TableCell>
                                <TableCell color="#3a3a3a" minwidth="300px">
                                    {usuario.email}
                                </TableCell>
                                <TableCell color="#3a3a3a" minwidth="200px">
                                    {usuario.name}
                                </TableCell>
                                <TableCell color="#3a3a3a" minwidth="100px">
                                    <BtnOutline onClick={event => editarUsuario(usuario.id)} width="70px">Editar</BtnOutline>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableWrapper>
            </TableList>
        </>
    );
}
