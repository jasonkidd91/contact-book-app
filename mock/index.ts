import MockAdapter from 'axios-mock-adapter';

function enableMock(axios: any) {
  const mock = new MockAdapter(axios);

  mock.onGet('/api/contacts').reply(200, require('./data/contacts.json'));

  mock.onGet(/\/api\/contacts\/\d+/).reply(config => {
    const contactId = parseInt(config.url!.split('/').pop()!);
    return [200, require('./data/contactDetails.json')[contactId.toString()]];
  });
}

export default enableMock;
