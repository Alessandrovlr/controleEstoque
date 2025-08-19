import React from "react";
import { useNavigate } from "react-router-dom";


export const Home = () => {
    const navigation = useNavigate();
    const movimentacoes = JSON.parse(localStorage.getItem("movimentacoes")) || [];
    
    movimentacoes.forEach((mov) => {
        const data = new Date(mov.data);
        const hoje = new Date();
        const diffTime = Math.abs(hoje - data);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

        if (diffDays > 30) {
            alert(`Atenção! A movimentação do produto ${mov.produto} foi realizada há mais de 30 dias.`);
        }
      });

    function handclick (id){
        if(id == "estoque"){
            navigation('/estoque');

        }else{
            navigation('/controle');
        }
    }


    return(
        <>
            <div className="p-10">
                <h1 className="flex items-center justify-center font-black text-2xl">Ultimas Movimentações</h1>
                {/* tabela das movimentações */}
                <table border="1" cellPadding="8" cellSpacing="0" className="tabelaHome">
                    <thead className="theadHome">
                        <tr>
                            <th>Data</th>
                            <th>Produto</th>
                            <th>Descrição</th>
                            <th>Quantidade</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody className="tbodyHome">
                        {movimentacoes.slice(-10).map((mov, index) => (
                            <tr key={index} className="linhaHome">
                                <td>{new Date(mov.data).toLocaleDateString()}</td>
                                <td>{mov.produto}</td>
                                <td>{mov.descricao}</td>
                                <td>{mov.quantidade}</td>
                                <td>{mov.tipo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-center gap-10">
                <button className="botoesHome" onClick={() => handclick("controle")}>Adicionar entrada ou saida </button>
                <button className="botoesHome" onClick={() => handclick("estoque")}>Ver estoque</button>
            </div>
        </>
    )
}