import axios from "axios";


const Escolha_API_URL = "*";

class PagamentoService {
  getAllEscolhaVoo() {
    return axios.get(Escolha_API_URL);
  }

  createEscolhaVoo(pagamento) {
    return axios.post(Pagamento_API_URL, pagamento);
  }

  getEscolhaVooById(pagamentoId) {
    return axios.get(Pagamento_API_URL + "/" + pagamentoId);
  }

  updateEditora(pagamentoId, pagamento) {
    return axios.put(Pagamento_API_URL + "/" + pagamentoId, pagamento);
  }

  deleteEditora(pagamentoId) {
    return axios.delete(Pagamento_API_URL + "/" + pagamentoId);
  }
}

export default new PagamentoService();