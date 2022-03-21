import axios from "axios";


const Escolha_API_URL = "*";

class EscolhaService {
  getAllEscolhaVoo() {
    return axios.get(Escolha_API_URL);
  }

  createEscolhaVoo(escolha) {
    return axios.post(Escolha_API_URL, escolha);
  }

  getEscolhaVooById(escolhaId) {
    return axios.get(Escolha_API_URL + "/" + escolhaId);
  }

  updateEditora(escolhaId, escolha) {
    return axios.put(Escolha_API_URL + "/" + escolhaId, escolha);
  }

  deleteEditora(escolhaId) {
    return axios.delete(Escolha_API_URL + "/" + escolhaId);
  }
}

export default new EscolhaService();