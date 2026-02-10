import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PosicionamientoSeoFintech = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-24 h-24 mx-auto text-[#c9f21d]"
          >
            <rect x="8" y="32" width="48" height="24" rx="2" />
            <path d="M16 32V20a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v12" />
            <path d="M32 8v8" />
            <circle cx="20" cy="44" r="3" />
            <circle cx="32" cy="44" r="3" />
            <circle cx="44" cy="44" r="3" />
            <path d="M4 56h56" />
            <path d="M24 4h16" />
          </svg>
          <h1 className="text-4xl md:text-5xl font-bold">En construcción</h1>
          <p className="text-gray-400 text-lg">Esta página estará disponible pronto.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PosicionamientoSeoFintech;
