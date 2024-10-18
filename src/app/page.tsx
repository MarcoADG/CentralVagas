"use client";
import { useEffect, useState } from "react";
import { getVagas, addVaga, deleteVaga } from "./db/indexedDB";
import Link from "next/link";

type Vaga = {
  id: string;
  titulo: string;
  empresa: string;
  link: string;
};

export default function Home() {
  const [titulo, setTitulo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [link, setLink] = useState("");
  const [vagas, setVagas] = useState<Vaga[]>([]);

  const inputStyle =
    "lg:w-96 w-full bg-gray-200 p-1 text-gray-950 placeholder-slate-950 focus:outline-none focus:ring focus:ring-slate-500 rounded-sm focus:placeholder-opacity-0";
  const linkInput =
    "w-full bg-gray-200 p-1 text-gray-950 placeholder-slate-950 focus:outline-none focus:ring focus:ring-slate-500 rounded-sm focus:placeholder-opacity-0";

  // Carrega as vagas do IndexedDB ao carregar a página
  useEffect(() => {
    async function fetchVagas() {
      const vagasData = await getVagas();
      setVagas(vagasData as Vaga[]);
    }
    fetchVagas();
  }, []);

  // Função para salvar novas vagas no IndexedDB
  const handleAddVaga = async () => {
    if (titulo && empresa && link) {
      const newVaga: Vaga = {
        id: new Date().toISOString(),
        titulo,
        empresa,
        link,
      };

      await addVaga(newVaga);

      setTitulo("");
      setEmpresa("");
      setLink("");

      // Atualiza a lista de vagas
      const vagasAtualizadas = await getVagas();
      setVagas(vagasAtualizadas as Vaga[]);
    }
  };

  // Função para deletar uma vaga
  const handleDeleteVaga = async (id: string) => {
    await deleteVaga(id);
    const vagasAtualizadas = await getVagas();
    setVagas(vagasAtualizadas as Vaga[]);
  };

  return (
    <main className="mt-28 mx-40 flex flex-col text-center items-center">
      <div className="flex flex-col mb-4 p-6 gap-2 bg-slate-400 rounded-3xl text-left lg:w-[900px] w-80">
        <div className="flex flex-col justify-between lg:flex-row gap-2 lg:gap-10">
          <div>
            <h2>Título</h2>
            <input
              className={inputStyle}
              type="text"
              placeholder="Título da Vaga"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div>
            <h2>Empresa</h2>
            <input
              className={inputStyle}
              type="text"
              placeholder="Empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
            />
          </div>
        </div>
        <div>
          <h2>Link</h2>
          <input
            className={linkInput}
            type="text"
            placeholder="Link da Vaga"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="flex justify-center mt-2">
          <button
            className="rounded-lg p-1 bg-slate-800 text-slate-300"
            onClick={handleAddVaga}
          >
            Adicionar Vaga
          </button>
        </div>
      </div>
      <div className="flex flex-col p-2 gap-2 bg-slate-400 rounded-3xl text-center lg:w-[900px] w-80">
        <h1>Minhas Vagas</h1>
        <ul className="flex flex-col items-center">
          {vagas.map((vaga) => (
            <li className="flex flex-row mb-3 text-left" key={vaga.id}>
              <div className="bg-slate-50 rounded w-64">
                <h3 className="mb-1 border-b-2 border-black p-1">
                  {vaga.titulo} - {vaga.empresa}
                </h3>
                <Link href={vaga.link} target="_blank">
                  <h3 className="text-blue-600 underline p-1">{vaga.link}</h3>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="bg-red-600 px-2 py-1 rounded-xl ml-2"
                  onClick={() => handleDeleteVaga(vaga.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-trash-2"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
