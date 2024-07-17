import { delay, http, HttpResponse } from 'msw';

const handlers = [
  http.get('/api/user', async () => {
    return HttpResponse.json({ sub: 'Charlie Brown' });
  }),
];

export default handlers;
