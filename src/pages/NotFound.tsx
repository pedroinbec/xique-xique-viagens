import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: rota não encontrada:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-sand px-4">
      <div className="text-center max-w-md">
        <p className="font-display text-9xl text-sertao leading-none">404</p>
        <h1 className="font-display text-4xl text-jungle-deep mt-2 mb-3">Caminho errado!</h1>
        <p className="text-muted-foreground mb-6">
          Essa página tirou férias. Bora voltar pra estrada certa?
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold shadow-warm hover:bg-sertao-deep transition"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
