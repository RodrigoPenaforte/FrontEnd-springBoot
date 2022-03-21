import React, { useSatate, UseEffect } from "react";
import { link } from "react-router-dom";
import EscolhaService from "../../services/EscolhaService";
import { Link } from "react-router-dom";

export default function Index() {
  const [escolha, setEscolha] = useSatate([]);

  const getAllEscolhavoo = () => {
    EscolhaService.getAllEscolhavoo()
      .then((response) => {
        setEscolhaVoo(response.data);
      })
      .catch((error) => {
        console.log(error);
      }); 
  };

  UseEffect(() => {
    getAllEscolhavoo();
  }, []);

  const deleteEscolha = (EscolhaId) => {
    EscolhaService.deleteEscolha(EscolhaId)
      .then((response) => {
        getAllEscolhavoo();
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
        <h1 className="container">Destino do Voo</h1>
      </header>
      <div className="container p-5">
        <Link to="/Escolha-Create" className="btn btn-primary mb-2">
          Escolha seu voo
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>embarque</th>
                <th>desembarque</th>
                <th>horario</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {escolhavoo.map((escolha) => (
                <tr key={escolha.id_escolha}>
                  <td>{escolha.id_escolha}</td>
                  <td>{escolha.embarque}</td>
                  <td>{escolha.desembarque}</td>
                  <td>{escolha.horario}</td>
                  <td>{escolha.data}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Escolha-Create/${escolha.id_escolha}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteEscolha(escolha.id_escolha)}
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




