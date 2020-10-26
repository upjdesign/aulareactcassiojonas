import { clientData, insertClient, listClients } from './src/services/clientes'



describe(`testar clients`, () => {

  var client_id = 0;
  var client_data = {name:'client test'}

  it('testar lista de clients', () => {
    const result = listClients()
    expect(result).toHaveProperty('length')
  })

  it('testar inserir novo client', () => {
    client_id = insertClient(client_data)
    expect(client_id).toHaveProperty('toString')
    const client = clientData(client_id)
    expect(client).toHaveProperty('id', client_id)
    expect(client).toHaveProperty('name', 'client test')
  })

})
