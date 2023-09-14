import { useEffect, useState } from 'react';
import { hasCookie, setCookie } from 'cookies-next';
import Link from 'next/link';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie('CookieConsent'));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie('CookieConsent', 'true', {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-50">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-100">
        <span className="text-dark text-base mr-16">
          Este sitio web utiliza cookies para mejorar la experiencia de usuario. Al usarlo aceptas nuestra{' '}
          <Link passHref href="/cookies">
            <span className="underline cursor-pointer text-secondary">politica de cookies</span>
          </Link>
        </span>
        <button className="bg-primary py-2 px-8 rounded text-white" onClick={() => acceptCookie()}>
          Aceptar cookies
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
