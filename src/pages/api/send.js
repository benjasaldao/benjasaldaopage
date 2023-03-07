import nc from 'next-connect';
import axios from 'axios';

const URL = process.env.API_URL;

const handler = nc().post(async (req, res) => {
  const { body } = req;

  try {
    // eslint-disable-next-line no-unused-vars
    const rta = await axios.post(URL + '/send', body, {
      headers: {
        'Content-Type': 'application/json',
        api: process.env.API_KEY,
        Origin: process.env.THIS_DOMAIN,
      },
    });
    res.json({ mailSent: true });
  } catch (err) {
    res.send(err);
  }
});

export default handler;

// export default function (req, res) {
//   const { body } = req;
//   res.statusCode = 200;
//   res.json(body);
// }
