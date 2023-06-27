import { 
    // BtnDanger, 
    BtnOutline 
} from "../Buttons/Buttons";
/* import SwitchStatusButton from "../SwitchStatusButton/Switch"; */
import { Cabecalho, CabecalhoInput, CabecalhoLabel, TableBody, TableCell, TableHeader, TableList, TableRow, TableWrapper } from "../TableListDefault/Style";
/* import api from "../../../../services/api"; */

function editarBanner(id /* number */)
{
    window.location.href = `/manager/banneredit/${id}`;
} 


export default CardListBanner;

function CardListBanner({ dados = {} }) {
/*     function toggleStatus(banner) {
        return () => {
            banner.status = !banner.status;
            api.patch(`/manager/banner/${banner.id}`, { status: banner.status }, {
                headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
            })
        };
    } */
    let list = dados.banners ?? [];
    return (
        <>
            <TableList>
                <Cabecalho>
                  {/*   <CabecalhoLabel>Exibir</CabecalhoLabel> */}
                    <CabecalhoInput></CabecalhoInput>
                    <CabecalhoLabel>Itens</CabecalhoLabel>
                </Cabecalho>
                <TableWrapper>
                    <TableHeader>
                        <TableRow>
                            <TableCell bgcolor="#d8e3f165" width="70px" minwidth="50px">
                                Id
                            </TableCell>
                        {/*     <TableCell minwidth="150px">Exibir</TableCell> */}
                            <TableCell minwidth="300px">Título</TableCell>
                            <TableCell minwidth="200px">Categoria</TableCell>
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
{/*                                 <TableCell>
                                    <SwitchStatusButton
                                        callback={toggleStatus(dado)}
                                        checked={dado.status}
                                    />
                                </TableCell> */}
                                <TableCell color="#3a3a3a" minwidth="300px">
                                    {dado.titulo}
                                </TableCell>
                                <TableCell color="#3a3a3a" minwidth="200px">
                                    {dado.categoria}
                                </TableCell>
                                <TableCell color="#3a3a3a" minwidth="100px">
                                    <BtnOutline onClick={event => editarBanner(dado.id)} width="70px">Editar</BtnOutline>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableWrapper>
            </TableList>
        </>
    );
}
