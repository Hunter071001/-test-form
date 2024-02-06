'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


// Componente MeuComponente (Link para a proxima pagina de votos)
function MeuComponente() {
  return (
    <div>
      <Link href="/about">
        <p className="text-white text-2xl mt-8 p-1 border rounded-md w-full">
          Próximo
        </p>
      </Link>
    </div>
  );
}

// Componente Home
export default function Home() {
  
  // Estados para armazenar as respostas do formulário
  const [nome, setNome] = useState("");
  const [diaSemana, setDiaSemana] = useState("");
  const [confirmacaoPresenca, setConfirmacaoPresenca] = useState("");

  // Função para salvar e armazenar as respostas
  const salvarRespostas = () => {
   
    console.log("Nome:", nome);
    console.log("Dia da Semana Disponível:", diaSemana);
    console.log("Confirmação de Presença:", confirmacaoPresenca);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Tarja no Topo da Página */}
    <div className="form-fields3  w-full h-10"></div>
      <div className="text-white text-2xl mt-8 p-1 border rounded-md ">
      <h1 className="text-white  text-2xl ">Formulário</h1>
      </div>

      {/* Perguntas do Formulário | / No trecho onde você renderiza os campos de pergunta e resposta*/}
      
      
  <div className="form-fields mt-4">  
  <label htmlFor="nome" className="block text-base font-bold text-white mt- -8 text-2xl">
    Qual é o seu nome:
  </label>
  <input
    type="text"
    id="nome"
    name="nome"
    value={nome}
    onChange={(e) => setNome(e.target.value)}
    className="mt-1 p-2 border rounded-md w-full"
  />

  <label htmlFor="nome" className="block text-base font-bold text-white mt-4 text-2xl">
    Itens que vai levar:
  </label>
  <input
    type="text"
    id="nome"
    name="nome"
    value={nome}
    onChange={(e) => setNome(e.target.value)}
    className="mt-1 p-2 border rounded-md w-full"
  />

  <label htmlFor="diaSemana" className="block text-base font-bold text-white mt-4  text-2xl">
    Dias da semana disponíveis:
  </label>
  <select
    id="diaSemana"
    name="diaSemana"
    value={diaSemana}
    onChange={(e) => setDiaSemana(e.target.value)}
    className="mt-1 p-2 border rounded-md w-full"
  >
       <option value="" disabled>Selecione um dia da semana</option>
    <option value="Segunda">Segunda</option>
    <option value="Terça">Terça</option>
    <option value="Quarta">Quarta</option>
    <option value="Quinta">Quinta</option>
    <option value="Sexta">Sexta</option>
    <option value="Sábado">Sábado</option>
    <option value="Domingo">Domingo</option>
  </select>
 

  <label htmlFor="confirmacaoPresenca" className="block text-base font-bold text-white mt-4  text-2xl">
        Confirma presença:
      </label>
      <div className="mt-1 p-2 border rounded-md w-full">
        <input
          type="checkbox"
          id="confirmacaoSim"
          name="confirmacaoPresenca"
          value="Sim"
          checked={confirmacaoPresenca === "Sim"}
          onChange={() => setConfirmacaoPresenca(confirmacaoPresenca === "Sim" ? "" : "Sim")}
          className="mr-2"
        />
        <label htmlFor="confirmacaoSim" className="text-white">Sim</label>
      
        <input
          type="checkbox"
          id="confirmacaoNao"
          name="confirmacaoPresenca"
          value="Não"
          checked={confirmacaoPresenca === "Não"}
          onChange={() => setConfirmacaoPresenca(confirmacaoPresenca === "Não" ? "" : "Não")}
          className="ml-28 mr-2"
        />
        <label htmlFor="confirmacaoNao" className="text-white">Não</label>
      </div>
    </div>

      {/* Botão para Salvar Respostas */}
      <button onClick={salvarRespostas} className="mt-8 bg-blue-500 text-white p-2 rounded-md">
        Salvar Respostas
      </button>

      {/* Renderizando MeuComponente */}
      <MeuComponente />
    </main>
  );
}

