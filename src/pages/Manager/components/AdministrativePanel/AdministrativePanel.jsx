import React from "react";
import { useState } from 'react';

import { PainelConteudo, BannerMenuItem, BannerMenuLink, DropdownContent, DropdownLink, PainelAdministrativo, PainelMenu, PainelListaMenu, NavLinkStyled, PainelListaConteudo } from './style/Style'



export default AdministrativePanel

function AdministrativePanel() {
    const [isBannerOpen, setIsBannerOpen] = useState(false);
    const [isEmpreendimentosOpen, setIsEmpreendimentosOpen] = useState(false);
    const [isInfraestruturasOpen, setIsInfraestruturasOpen] = useState(false);
    const [isNumerosOpen, setIsNumerosOpen] = useState(false);
    const [isUsuariosOpen, setIsUsuariosOpen] = useState(false);
    const [isContatosOpen, setIsContatosOpen] = useState(false);

    let resetAllStates = () => [
        setIsBannerOpen,
        setIsEmpreendimentosOpen,
        setIsInfraestruturasOpen,
        setIsNumerosOpen,
        setIsUsuariosOpen,
        setIsContatosOpen
    ].forEach(setState => setState(false));

    const handleBannerClick = () => {
        resetAllStates();
        setIsBannerOpen(!isBannerOpen);
    };
    const handleEmpreendimentosClick = () => {
        resetAllStates();
        setIsEmpreendimentosOpen(!isEmpreendimentosOpen);
    };
    const handleInfraestruturasClick = () => {
        resetAllStates();
        setIsInfraestruturasOpen(!isInfraestruturasOpen);
    };
    const handleNumerosClick = () => {
        resetAllStates();
        setIsNumerosOpen(!isNumerosOpen);
    };
    const handleUsuariosClick = () => {
        resetAllStates();
        setIsUsuariosOpen(!isUsuariosOpen);
    };
    const handleContatosClick = () => {
        resetAllStates();
        setIsContatosOpen(!isContatosOpen);
    };
    return (
        <>
            <PainelAdministrativo>
                <div>
                    <PainelMenu>Painel</PainelMenu>
                    <ol>

                    <PainelListaMenu>
                        <NavLinkStyled to="/manager/perfil" activeClassName="active">
                            <p>Perfil</p>
                        </NavLinkStyled >
{/*                         <NavLinkStyled to="/manager/servicos" activeClassName="active">
                            <p>Serviços</p>
                        </NavLinkStyled> */}

 {/*                        <NavLinkStyled to="/manager/configuracoes" activeClassName="active">
                            <p>Configurações</p>
                        </NavLinkStyled> */}
{/*                         <NavLinkStyled to="/manager/suporte" activeClassName="active">
                            <p>Suporte</p>
                        </NavLinkStyled> */}

                    </PainelListaMenu>

                    </ol>
                </div>
                <div>
                    <PainelConteudo>Conteúdo</PainelConteudo>
                    <PainelListaConteudo>

                    <ol>
                        <BannerMenuItem>
                            <BannerMenuLink onClick={handleBannerClick}><p>Banner</p></BannerMenuLink>
                            <DropdownContent isOpen={isBannerOpen}>
                                <DropdownLink> <li className='styleList'><a href="/manager/bannerlist">Listar</a></li></DropdownLink>
                                <DropdownLink> <li className='styleList'><a href="/manager/bannercreate">Adicionar</a></li></DropdownLink>
                            </DropdownContent>
                        </BannerMenuItem>
                        <BannerMenuItem>
                            <BannerMenuLink onClick={handleEmpreendimentosClick}><p>Empreendimentos</p></BannerMenuLink>
                            <DropdownContent isOpen={isEmpreendimentosOpen}>
                                <DropdownLink> <li className='styleList'><a href="/manager/empreendimentolist">Listar</a></li></DropdownLink>
                                <DropdownLink> <li className='styleList'><a href="/manager/empreendimentocreate">Adicionar</a></li></DropdownLink>
                            </DropdownContent>
                        </BannerMenuItem>
                        <BannerMenuItem>

                            <BannerMenuLink onClick={handleInfraestruturasClick}><p>Infraestruturas</p></BannerMenuLink>

                            <DropdownContent isOpen={isInfraestruturasOpen}>
                                <DropdownLink> <li className='styleList'><a href="/manager/infraestruturalist">Listar</a></li></DropdownLink>
                                <DropdownLink> <li className='styleList'><a href="/manager/infraestruturacreate">Adicionar</a></li></DropdownLink>
                            </DropdownContent>
                        </BannerMenuItem>
                        <BannerMenuItem>

                            <BannerMenuLink onClick={handleNumerosClick}><p>Números</p></BannerMenuLink>

                            <DropdownContent isOpen={isNumerosOpen}>
                                <DropdownLink> <li className='styleList'><a href="/manager/numeroedit">Editar</a></li></DropdownLink>
                            </DropdownContent>
                        </BannerMenuItem>
                        <BannerMenuItem>

                            <BannerMenuLink onClick={handleUsuariosClick}><p>Usuários</p></BannerMenuLink>

                            <DropdownContent isOpen={isUsuariosOpen}>
                                <DropdownLink> <li className='styleList'><a href="/manager/usuarios">Listar</a></li></DropdownLink>
                                <DropdownLink> <li className='styleList'><a href="/manager/usuario/novo">Adicionar</a></li></DropdownLink>
                            </DropdownContent>
                        </BannerMenuItem>
                        <BannerMenuItem>

                            <BannerMenuLink onClick={handleContatosClick}><p>Contatos</p></BannerMenuLink>

                            <DropdownContent isOpen={isContatosOpen}>
                                <DropdownLink> <li className='styleList'><a href="/manager/contatolist">Listar</a></li></DropdownLink>
                            </DropdownContent>
                        </BannerMenuItem>
                    </ol>
                    </PainelListaConteudo>
                </div>
            </PainelAdministrativo>
        </>
    )
}