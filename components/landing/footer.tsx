export default function Footer() {
    return (
      <footer className="border-t border-white/10 bg-black text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="text-lg font-semibold">Nu Team</p>
            <p className="mt-1 text-sm text-white/35">
              AI para operaciones.
            </p>
          </div>
  
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="transition hover:text-white">
              Privacidad
            </a>
  
            <a href="#" className="transition hover:text-white">
              Términos
            </a>
          </div>
  
          <p className="text-sm text-white/25">
            © {new Date().getFullYear()} Nu Team
          </p>
        </div>
      </footer>
    );
  }