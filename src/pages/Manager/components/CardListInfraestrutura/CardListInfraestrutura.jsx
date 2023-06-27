import { 
    // BtnDanger, 
    BtnOutline 
} from "../Buttons/Buttons";
// import SwitchStatusButton from "../SwitchStatusButton/Switch";
import { Cabecalho, CabecalhoInput, CabecalhoLabel, TableBody, TableCell, TableHeader, TableList, TableRow, TableWrapper } from "../TableListDefault/Style";
// import api from "../../../../services/api";

function editarInfraestrutura(id /* number */) {
    window.location.href = `/manager/infraestruturaedit/${id}`;
} 

export default CardListInfraestrutura;

function CardListInfraestrutura({ dados = {} }) {
    // Mock de lista de infraestruturas
    const mockList = [
        { id: 1, titulo: "Infraestrutura 1", status: true, categoria: "Categoria A" },
        { id: 2, titulo: "Infraestrutura 2", status: false, categoria: "Categoria B" },
        { id: 3, titulo: "Infraestrutura 3", status: true, categoria: "Categoria C" },
    ];
    let list = dados.infraestruturas ?? mockList;
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
                            <TableCell minwidth="300px">Título</TableCell>                 
                            <TableCell minwidth="100px">Ações</TableCell>
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
                                <TableCell color="#3a3a3a" minwidth="300px">
                                    {dado.titulo}
                                </TableCell>
                                <TableCell color="#3a3a3a" minwidth="100px">
                                    <BtnOutline onClick={event => editarInfraestrutura(dado.id)} width="70px">Editar</BtnOutline>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableWrapper>
            </TableList>
        </>
    );
}
