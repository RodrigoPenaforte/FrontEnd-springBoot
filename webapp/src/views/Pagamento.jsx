import React from 'react'



export default function Pagamento() {
  return (
    <>

<form>
        <hr />


        <div class="form-group row">
          <label for="Cartao" class="col-sm-2 col-form-label">Cartão</label>
          <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" value="" />
          </div>
        </div>
        <div className="form-group">
          <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected="">Pagar no cartão</option>
            <option value={1}>1x</option>
            <option value={2}>2x</option>
            <option value={3}>3x</option>
            <option value={4}>4x</option>
            <option value={5}>5x</option>
            <option value={6}>6x</option>
            <option value={7}>7x</option>
            <option value={8}>8x</option>
            <option value={9}>9x</option>
            <option value={10}>10x</option>
            <option value={11}>11x</option>
            <option value={12}>12x</option>
          </select>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Digite seu email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Senha do cartão</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Senha" />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Número do cartão </label>
            <input type="text" class="form-control" id="inputAddress" placeholder="(Número do cartão) " />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Códico de segurança</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="(CVV)" />
          </div>

          <div class="form-group row">
            <label for="Pix" class="col-sm-2 col-form-label"> Pix</label>
            <div class="col-sm-10">
              <input type="text" readonly class="form-control-plaintext" value="" />
            </div>
          </div>
          <select class="form-control form-control-lg">
            <option>Veja nossa chave pix</option>
            <option>Não quero pagar no pix</option>
            <option>CPNJ: 213121-1212131-12</option>
          </select>

          <hr />

        </div>
        <hr />
      </form>







    </>




  )
}
