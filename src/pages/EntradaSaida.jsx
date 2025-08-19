import React from "react";

export const EntradaSaida = () => {
    function handleSubmit(e) {
        e.preventDefault();
    
        const data = document.getElementById("data").value;
        const produto = document.getElementById("produto").value.trim();
        const descricao = document.getElementById("descricao").value.trim();
        const quantidade = parseInt(document.getElementById("quantidade").value);
        const tipo = document.getElementById("tipo").value;
      
        if (!data || !produto || !descricao || isNaN(quantidade) || quantidade <= 0) {
          alert("Preencha todos os campos corretamente com valores válidos.");
          return;
        }
      
        const estoqueAtual = JSON.parse(localStorage.getItem("estoque")) || [];
      
        const index = estoqueAtual.findIndex((item) => item.produto === produto);
      
        if (tipo === "saida") {
          if (index === -1) {
            alert("Este produto não está no estoque.");
            return;
          }
      
          if (estoqueAtual[index].quantidade < quantidade) {
            alert(
              `Quantidade insuficiente no estoque. Disponível: ${estoqueAtual[index].quantidade}`
            );
            return;
          }
      
          estoqueAtual[index].quantidade -= quantidade;
        }
      
        if (tipo === "entrada") {
          if (index !== -1) {
            estoqueAtual[index].quantidade += quantidade;
          } else {
            estoqueAtual.push({ produto, quantidade });
          }
        }

        const movimentacoes = JSON.parse(localStorage.getItem("movimentacoes")) || [];
      
        movimentacoes.push({
          data,
          produto,
          descricao,
          quantidade,
          tipo,
        });
      
        localStorage.setItem("estoque", JSON.stringify(estoqueAtual));
        localStorage.setItem("movimentacoes", JSON.stringify(movimentacoes));
      
        e.target.reset();
      
        alert("Movimentação registrada com sucesso!");
      }
      
      
  return (
    <>
    <div className="p-10">
    </div>
      <form onSubmit={handleSubmit} className="entrada-saida-form">
        <h1 className="flex items-center justify-center font-black text-xl">Entrada e saída</h1>

        <label className="font-black" htmlFor="data">Data:</label>
        <input className="inputForm" type="date" id="data" name="data" required />

        <label className="font-black" htmlFor="produto">Produto:</label>
        <input className="inputForm" type="text" id="produto" name="produto" required />

        <label className="font-black" htmlFor="descricao">Descrição:</label>
        <input className="inputForm" type="text" id="descricao" name="descricao" required />

        <label className="font-black" htmlFor="quantidade">Quantidade:</label>
        <input className="inputForm" type="number" id="quantidade" name="quantidade" required />

        <label className="font-black" htmlFor="tipo">Tipo:</label>
        <select className="inputForm" id="tipo" name="tipo">
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>

        <button className="botoesHome" type="submit">Registrar</button>
      </form>
    </>
  );
};
