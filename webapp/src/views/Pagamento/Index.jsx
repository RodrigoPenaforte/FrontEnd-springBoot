import React, { useSatate, UseEffect } from "react";
import { link } from "react-router-dom";
import PagamentoService from "../../services/PagamentoService";
import { Link } from "react-router-dom";

export default function Index() {
  const [pagamentos, setPagamentos] = useSatate([]);

  const getAllPagamento = () => {
    EscolhaService.getAllPagamento()
      .then((response) => {
        setPagamentos(response.data);
      })
      .catch((error) => {
        console.log(error);
      }); 
  };

  UseEffect(() => {
    getAllPagamento();
  }, []);

  const deletePagamento = (PagamentoId) => {
    EscolhaService.deletePagamento(PagamentoId)
      .then((response) => {
        getAllPagamento();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro na API");
        }
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Pagamento</h1>
      </header>
      <div className="container p-5">
        <Link to="/Pagamento-Create" className="btn btn-primary mb-2">
          Escolha a forma de pagamento
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Cartao</th>
                <th>Parcela</th>
                <th>Pix</th>
                <th>Preço da viagem</th>
              </tr>
            </thead>
            <tbody>
              {pagamentos.map((pagamento) => (
                <tr key={pagamento.id_pagamento}>
                  <td>{pagamento.id_pagamento}</td>
                  <td>{pagamento.cartao}</td>
                  <td>{pagamento.parcela}</td>
                  <td>{pagamento.pix}</td>
                  <td>{pagamento.preco_viagem}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Pagamento-Create/${pagamento.id_pagamento}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deletePagamento(pagamento.id_pagamento)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}