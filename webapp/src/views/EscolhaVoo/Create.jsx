import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EscolhaService from "../../services/EscolhaService";

export default function Create() {
  const [embarque, setEmbarque] = useState("");
  const [desembarque, setDesembarque] = useState("");
  const [horario, setHorario] = useState("");
  const [data, setData] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarEscolha = (e) => {
    e.preventDefault();

    const escolha = { embarque, desembarque,horario, data};

    if (id) {
        EscolhaService.updateEscolha(id, escolha)
        .then((response) => {
            navigate("/EscolhaVoo")
        })

    } else {
        EscolhaService.createEscolha(escolha)
        .then((response) => {
            navigate("/EscolhaVoo")
        })
    }
  }

  useEffect(() => {
      function getEscolhaById() {
        if (id) {
            EscolhaService.getEscolhaById(id)
            .then((response) => {
                setEmbarque(response.data.embarque);
                setDesembarque(response.data.desembarque);
                setHorario(response.data.horario);
                setData(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getEscolhaById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Embarque" className="form-label">
              Embarque
            </label>
            <input
              type="text"
              id="Embarque"
              className="form-control"
              placeholder="Embarque"
              value={embarque}
              onChange={(e) => setEmbarque(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Desembarque" className="form-label">
              Desembarque
            </label>
            <input
              type="text"
              id="Desembarque"
              className="form-control"
              placeholder="Desembarque"
              value={desembarque}
              onChange={(e) => setDesembarque(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Horario" className="form-label">
              Horario
            </label>
            <input
              type="text"
              id="Horario"
              className="form-control"
              placeholder="Horario"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Data" className="form-label">
              Data
            </label>
            <input
              type="Data"
              id="Data"
              className="form-control"
              placeholder="Data"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarEscolha(e)}>
            Enviar
          </button>
          <Link
            to="/EscolhaVoo"
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
