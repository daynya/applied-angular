import { delay, http, HttpResponse } from 'msw';

const handlers = [
  http.get('/api/user', async () => {
    await delay(4000);
    return HttpResponse.json({ sub: 'Charlie Brown' });
  }),
];

export default handlers;
