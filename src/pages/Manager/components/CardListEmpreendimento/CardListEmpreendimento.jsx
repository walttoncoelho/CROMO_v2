import {
    TableList,
    Cabecalho,
    CabecalhoLabel,
    CabecalhoInput,

    TableWrapper,
    TableCell,
    TableHeader,
    TableBody,

    TableRow
} from '../TableListDefault/Style'
import SwitchStatusButton from '../SwitchStatusButton/Switch'
import api from "../../../../services/api"
import empreendimentos from "../../../../data/api/empreendimentos";
import { 
    // BtnDanger, 
    BtnOutline 
} from '../Buttons/Buttons';

function editarEmpreendimento(id /* number */) {
    window.location.href = `/manager/empreendimentoedit/${id}`;
} 

export default CardListEmpreendimento
function CardListEmpreendimento({ dados = {} }) {
    let list = dados.empreendimentos ?? empreendimentos
    function toggleStatus(id) {
        return () => api.patch(`/manager/empreendimento/${id}/toggle-status`, {}, {
            headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
        });
    }
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
                            <TableCell bgcolor="#d8e3f165" width="70px" minwidth="50px" >Id</TableCell>
                            <TableCell minwidth="150px" >Exibir</TableCell>
                            <TableCell minwidth="300px">Título</TableCell>
                            <TableCell minwidth="200px" >Tipo de Empreendimento</TableCell>

                            <TableCell minwidth="100px" >Ações</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {list.map(dado => (
                            <TableRow key={dado.id}>
                                <TableCell color="#3a3a3a" bgcolor="#d8e3f186" width="70px" minwidth="50px" >{dado.id}</TableCell>
                                <TableCell ><SwitchStatusButton callback={toggleStatus(dado.id)} checked={dado.status} /></TableCell>

                                <TableCell color="#3a3a3a" minwidth="300px" >{dado.titulo}</TableCell>
                                <TableCell color="#3a3a3a" minwidth="200px" >{dado.tipoEmpreendimento}</TableCell>

                                <TableCell color="#3a3a3a" minwidth="100px">
                                    <BtnOutline onClick={event => editarEmpreendimento(dado.id)} width="70px">Editar</BtnOutline> 
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableWrapper>

            </TableList>
        </>
    )
}