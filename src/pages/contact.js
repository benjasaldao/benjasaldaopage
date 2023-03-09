import React, { useRef, useState } from 'react';
import Container from '../common/Container';
import Image from 'next/image';
import Alert from '../common/Alert';
import useAlert from '../hooks/useAlert';
import hablando from './../../public/hablando.png';

const Contact = () => {
  const formRef = useRef(null);
  const { alert, setAlert, toggleAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    const errorInForm = validateData(data);

    if (errorInForm) {
      setAlert({
        active: true,
        message: errorInForm,
        type: 'error',
        autoClose: true,
      });
    } else {
      const options = {
        method: 'POST',
        headers: {
          // eslint-disable-next-line prettier/prettier
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      fetch('/api/send', options)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.accepted) {
            setAlert({
              active: true,
              message: 'Gracias por tu mensaje! pronto me pondre en contacto contigo',
              type: 'success',
              autoClose: true,
            });
          } else {
            throw new Error('Hubo un error inesperado al enviar el mail, intentalo de nuevo mas tarde o comunicate por mis redes sociales!');
          }
        })
        .catch((err) => {
          setAlert({
            active: true,
            message: err.message,
            type: 'error',
            autoClose: true,
          });
        })
        .finally(() => setLoading(false));
    }
  };

  const validateData = (data) => {
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
      return 'Debes completar todos los campos!';
    }
    if (data.message.length < 10) {
      return 'Tu mensaje debe tener al menos 10 caracteres!';
    }
    return false;
  };

  return (
    <>
      <Container>
        <form ref={formRef} onSubmit={handleSubmit} className="border border-black rounded-md p-4 my-10">
          <div className="md:flex justify-between">
            <div className="flex flex-col mx-6">
              <h4 className="text-4xl font-bold mb-8 -mt-10 bg-white">Ponte en contacto </h4>
              <Alert alert={alert} handleClose={toggleAlert} />
              <label htmlFor="name" className="text-gray-500">
                Nombre: <br />
                <input name="name" id="name" type="text" className="w-full text-black p-2 border-gray-500 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500" />
              </label>
              <label htmlFor="email" className="text-gray-500">
                Email: <br />
                <input name="email" type="email" className="w-full text-black p-2 border-gray-500 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500" />
              </label>
              <label htmlFor="message" className="text-gray-500">
                Tu mensaje: <br />
                <textarea name="message" type="text" className="w-full text-black p-2 border-gray-500 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500" />
              </label>
              <button className="text-center w-32 hover:bg-indigo-600 py-1 rounded-md text-white bg-indigo-500 mt-4">{loading ? 'Enviando...' : 'Enviar'}</button>
            </div>
            <div className="flex items-center justify-center md:w-1/2">
              <Image className="" alt="desarrollador" src={hablando} />
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Contact;
