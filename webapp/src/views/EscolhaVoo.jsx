import React from 'react'
import { Link } from 'react-router-dom';

export default function EscolhaVoo() {
  return (
    <>


      <form>
        <hr />
        <div className="form-group">
          <div className="form-group col-md-8">
            <label htmlFor="validationServer03">Local atual</label>
            <input
              type="text"
              className="form-control is-invalid"
              id="validationServer03"
              placeholder="Embarque"
              required=""
            />
            <div className="invalid-feedback">
              Por favor, informe uma cidade válida.
            </div>
          </div>
          <div className="form-group">
            <div className="form-group col-md-8">
              <label htmlFor="validationServer03">Cidade Destino</label>
              <input
                type="text"
                className="form-control is-invalid"
                id="validationServer03"
                placeholder="Cidade"
                required=""
              />
              <div className="invalid-feedback">
                Por favor, informe uma cidade válida.
              </div>
            </div>
          </div>
          <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected="">Escolha o dia do seu Vôo</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
            <option value={14}>14</option>
            <option value={15}>15</option>
            <option value={16}>16</option>
            <option value={17}>17</option>
            <option value={18}>18</option>
            <option value={19}>19</option>
            <option value={20}>20</option>
            <option value={21}>21</option>
            <option value={22}>22</option>
            <option value={23}>23</option>
            <option value={24}>24</option>
            <option value={25}>25</option>
            <option value={26}>26</option>
            <option value={27}>27</option>
            <option value={28}>28</option>
            <option value={29}>29</option>
            <option value={30}>30</option>
            <option value={31}>31</option>
          </select>
          <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected="">Escolha o mês do seu Vôo</option>
            <option value="Janeiro">Janeiro</option>
            <option value="Fevereiro">Fevereiro</option>
            <option value="Março">Março</option>
            <option value="Abril">Abril</option>
            <option value="Maio">Maio</option>
            <option value="Junho">Junho</option>
            <option value="Julho">Julho</option>
            <option value="Agosto">Agosto</option>
            <option value="Outubro">Outubro</option>
            <option value="Setembro">Setembro</option>
            <option value="Novembro">Novembro</option>
            <option value="Dezembro">Dezembro</option>
          </select>
          <div className="form-group">
            <input type="datetime" className="form-control" placeholder="Horario" />
          </div>
        </div>
        <hr />
        <Link className="btn btn-outline-primary px-3" to="Pagamento">Pagamento</Link>
      </form>



    </>
  )
}
