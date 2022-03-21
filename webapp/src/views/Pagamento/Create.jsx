import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PagamentoService from "../../services/PagamentoService";

export default function Create() {
  const [cartao, setCartao] = useState("");
  const [parcela, setParcela] = useState("");
  const [pix, setPix] = useState("");
  const [preco_viagem, setPreco_viagem] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarPagamento = (e) => {
    e.preventDefault();

    const pagamento = { cartao, parcela,pix, preco_viagem};

    if (id) {
        PagamentoService.updatePagamento(id, pagamento)
        .then((response) => {
            navigate("/Pagamento")
        })

    } else {
        PagamentoService.createPagamento(pagamento)
        .then((response) => {
            navigate("/Pagamento")
        })
    }
  }

  useEffect(() => {
      function getPagamentoById() {
        if (id) {
            PagamentoService.getPagamentoById(id)
            .then((response) => {
                setCartao(response.data.cartao);
                setParcela(response.data.parcela);
                setPix(response.data.pix);
                setPreco_viagem(response.data.preco_viagem);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getPagamentoById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Cartao" className="form-label">
              Cartão
            </label>
            <input
              Parcela
              id="Cartao"
              className="form-control"
              placeholder="Cartao"
              value={cartao}
              onChange={(e) => setCartao(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Parcela" className="form-label">
              Parcela
            </label>
            <input
              type="text"
              id="Parcela"
              className="form-control"
              placeholder="Parcela"
              value={parcela}
              onChange={(e) => setParcela(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Pix" className="form-label">
              Pix
            </label>
            <input
              type="Pix"
              id="Pix"
              className="form-control"
              placeholder="Pix"
              value={Pix}
              onChange={(e) => setPix(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Preco_viagem" className="form-label">
              Preco_viagem
            </label>
            <input
              type="Preco_viagem"
              id="Preco_viagem"
              className="form-control"
              placeholder="Preco_viagem"
              value={preco_viagem}
              onChange={(e) => setPreco_viagem(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarPagamento(e)}>
            Enviar
          </button>
          <Link
            to="/Pagamento"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
