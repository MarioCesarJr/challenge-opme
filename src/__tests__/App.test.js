import api from '~/services/api';

it('Api user', async function() {
    const response = await api.get('/users');
    const data = await response.data;
    expect(data);
});

it('Api user login', async function() {
    const response = await api.get('/users/defunkt');
    const data = await response.data;
    expect(data.login).toEqual('defunkt');
});

it('Api user repository', async function() {
    const response = await api.get('/users/defunkt/repos');
    const data = await response.data;
    expect(data);
});
