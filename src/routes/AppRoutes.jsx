import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
import FaleConosco from "../pages/FaleConosco/FaleConosco";
import Login from "../pages/Manager/Login/Login";
import Painel from "../pages/Manager/Painel/Painel/Painel";
import Templates from "../pages/Templates/Templates";
import Empreendimentos from "../pages/Empreendimentos/SectionEmpreend";
import Perfil from "../pages/Manager/Painel/Perfil/Perfil";
import Servicos from "../pages/Manager/Painel/Servicos/Servicos";
import Configuracoes from "../pages/Manager/Painel/Configuracoes/Configuracoes";
import Suporte from "../pages/Manager/Painel/Suporte/Suporte";
import EmpreendimentoInterna from "../pages/EmpreendimentosInterna/EmpreendimentoInterna";

import ListaBanners from "../pages/Manager/Conteudo/Banner/ListaBanner/ListaBanner";
import CriaBanner from "../pages/Manager/Conteudo/Banner/CriaBanner/CriaBanner";
import EditaBanner from "../pages/Manager/Conteudo/Banner/EditaBanner/EditaBanner";

import ListaEmpreendimentos from "../pages/Manager/Conteudo/Empreendimentos/ListaEmpreendimentos/ListaEmpreendimentos";
import CriaEmpreendimentos from "../pages/Manager/Conteudo/Empreendimentos/CriaEmpreendimentos/CriaEmpreendimentos";
import EditaEmpreendimento from "../pages/Manager/Conteudo/Empreendimentos/EditaEmpreendimento/EditaEmpreendimento";

import ListaInfraestruturas from "../pages/Manager/Conteudo/Infraestruturas/ListaInfraestruturas/ListaInfraestruturas";
import CriaInfraestruturas from "../pages/Manager/Conteudo/Infraestruturas/CriaInfraestruturas/CriaInfraestruturas";
import EditaInfraestrutura from "../pages/Manager/Conteudo/Infraestruturas/EditaInfraestrutura/EditaInfraestrutura";

import ListaUsuarios from "../pages/Manager/Conteudo/Usuarios/ListaUsuarios/ListaUsuarios";
import CriaUsuario from "../pages/Manager/Conteudo/Usuarios/CriaUsuario/CriaUsuario";
import EditaUsuario from "../pages/Manager/Conteudo/Usuarios/EditaUsuario/EditaUsuario";

import EditaNumeros from "../pages/Manager/Conteudo/Numeros/EditaNumeros/EditaNumeros";
import ListaContatos from "../pages/Manager/Conteudo/Contatos/ListaContatos/ListaContatos";
import ProtectedRoute from "./ProtectedRoute";


export function AppRoutes() {
  return (
    /* Páginas públicas */
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/empreendimentos" element={<Empreendimentos />} />
      <Route path="/empreendimentos/:id" element={<EmpreendimentoInterna />} />
                                  
      <Route path="/faleconosco" element={<FaleConosco />} />
      <Route path="/templates" element={<Templates />} />

      {/* Página Login */}
      <Route path="/manager" element={<Login />} />

      {/* Páginas privadas */}
      <Route path="/manager/painel" element={<Painel />} />
      <Route path="/manager/perfil" element={
        //<ProtectedRoute>
        <Perfil />
        //</ProtectedRoute>
      }/>
      <Route path="/manager/servicos" element={<ProtectedRoute><Servicos /></ProtectedRoute>} />
      <Route path="/manager/Configuracoes" element={<ProtectedRoute><Configuracoes /></ProtectedRoute>} />
      <Route path="/manager/Suporte" element={<ProtectedRoute><Suporte /></ProtectedRoute>} />

      {/* Conteúdos*/}
      <Route path="/manager/bannerlist" element={<ProtectedRoute><ListaBanners /></ProtectedRoute>} />
      <Route path="/manager/bannercreate" element={<ProtectedRoute><CriaBanner /></ProtectedRoute>} />
      <Route path="/manager/banneredit/:bannerId" element={<ProtectedRoute><EditaBanner /></ProtectedRoute>} />

      <Route path="/manager/empreendimentolist" element={<ProtectedRoute><ListaEmpreendimentos /></ProtectedRoute>} />   
      <Route path="/manager/empreendimentocreate" element={<ProtectedRoute><CriaEmpreendimentos /></ProtectedRoute>} />
      <Route path="/manager/empreendimentoedit/:empreendimentoId" element={<ProtectedRoute><EditaEmpreendimento /></ProtectedRoute>} />

      <Route path="/manager/infraestruturalist" element={<ProtectedRoute><ListaInfraestruturas /></ProtectedRoute>} />
      <Route path="/manager/infraestruturacreate" element={<ProtectedRoute><CriaInfraestruturas /></ProtectedRoute>} />
      <Route path="/manager/infraestruturaedit/:infraestruturaId" element={<ProtectedRoute><EditaInfraestrutura /></ProtectedRoute>} />

      <Route path="/manager/usuarios" element={<ProtectedRoute><ListaUsuarios /></ProtectedRoute>} />
      <Route path="/manager/usuario/novo" element={<ProtectedRoute><CriaUsuario /></ProtectedRoute>} />
      <Route path="/manager/usuario/edicao/:usuarioId" element={<ProtectedRoute><EditaUsuario /></ProtectedRoute>} />

      <Route path="/manager/numeroedit" element={<ProtectedRoute><EditaNumeros /></ProtectedRoute>} />
      <Route path="/manager/contatolist" element={
      //<ProtectedRoute>
        <ListaContatos />
        //</ProtectedRoute>
      } />

    </Routes>
  );
}
