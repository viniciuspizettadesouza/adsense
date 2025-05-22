import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-gray-200 bg-white py-6 text-center text-sm text-gray-500">
      <div className="mx-auto max-w-4xl px-4">
        <p>
          &copy; {year} Portugal para Imigrantes. Todos os direitos reservados.
        </p>
        <p className="mt-2">
          <Link
            href="#"
            className="text-blue-600 hover:underline hover:underline-offset-4"
          >
            Voltar ao topo ↑
          </Link>
        </p>
      </div>
    </footer>
  );
}
