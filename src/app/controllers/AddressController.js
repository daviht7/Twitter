import Address from '../models/Address'

class AddressController {

  /* retorna todos endereços */
  async index(req, res) {
    const addresses = await Address.findAll();
    return res.json(addresses)
  }

}

export default new AddressController()