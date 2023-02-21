import nc from 'next-connect';
import cors from 'cors';
import axios from 'axios';

const URL = process.env.API_URL;

const handler = nc()
  .use(cors())
  .post(async (req, res) => {
    const { body } = req;

    try {
      const rta = await axios.post(URL + '/send', body, {
        headers: {
          'Content-Type': 'application/json',
          api: process.env.API_KEY,
        },
      });
      res.json({ mailSent: true });
    } catch (err) {
      res.json(err);
    }
  });

export default handler;

// export default function (req, res) {
//   const { body } = req;
//   res.statusCode = 200;
//   res.json(body);
// }