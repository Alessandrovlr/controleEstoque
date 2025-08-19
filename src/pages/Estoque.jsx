export const Estoque = () => {
  const dados = JSON.parse(localStorage.getItem("estoque")) || [];
  const movimentacoes = JSON.parse(localStorage.getItem("movimentacoes")) || [];

  if (dados.length === 0) {
    return <h2>Nenhum produto cadastrado no estoque.</h2>;
  }

  const calcularEntradasSaidas = (produto) => {
    let entrada = 0;
    let saida = 0;

    movimentacoes.forEach((mov) => {
      if (mov.produto === produto) {
        if (mov.tipo === "entrada") {
          entrada += mov.quantidade;
        } else if (mov.tipo === "saida") {
          saida += mov.quantidade;
        }
      }
    });

    return { entrada, saida };
  };

  return (
    <>
        <div className="p-10"></div>
        <div className="divEstoque">
            <h1 className="flex items-center justify-center font-black text-xl">Estoque</h1>
            <table border="1" cellPadding="8" cellSpacing="0" className="tabelaEstoque">
              <thead className="theadEstoque">
                <tr>
                  <th>Produto</th>
                  <th>Entradas</th>
                  <th>Saídas</th>
                  <th>Saldo</th>
                  <th>Situação</th>
                  <th>Alarme</th>
                </tr>
              </thead>
              <tbody>
                {dados.map((item) => {
                  const { entrada, saida } = calcularEntradasSaidas(item.produto);
                  const saldo = item.quantidade;
                  const situacao = saldo <= 5 ? "Comprar" : "OK"
                  const alarme = saldo <= 5 ? "vermelho" : "verde"
                  var cor = saldo <= 5 ? "var(--cor-vermelha)" : "var(--cor-verde)"
                
                  return (
                    <tr key={item.produto} className="linhaEstoque">
                      <td>{item.produto}</td>
                      <td>{entrada}</td>
                      <td>{saida}</td>
                      <td>{saldo}</td>
                      <td>{situacao}</td>
                      <td  style={{ color: cor }} className="bold font-black">{alarme}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
        </div>
    </>
  );
};
