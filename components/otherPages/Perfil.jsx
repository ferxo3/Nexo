export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto p-4 flex justify-between">
        <div className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Adnex
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-gray-600 dark:text-gray-300">Inicio</a>
          </li>
          <li>
            <a href="/quien-soy" className="text-gray-600 dark:text-gray-300">Quién Soy</a>
          </li>
          <li>
            <a href="#services" className="text-gray-600 dark:text-gray-300">Servicios</a>
          </li>
          <li>
            <a href="#about" className="text-gray-600 dark:text-gray-300">Nosotros</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 dark:text-gray-300">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}