import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json({ sub: 'Jill Jones' });
  }),
];

export default handlers;
