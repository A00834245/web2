import Image from "next/image";


export default function Home() {
  return (
    <div>
      <header className="p-4">
    <nav>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a className="flex items-center">
                <img src="https://www.creativefabrica.com/wp-content/uploads/2020/07/17/Penguin-Logo-Graphics-4649571-1-1-580x386.jpg" className="mr-3 h-20 sm:h-9"/>
                <span className="text-x1 font-bold whitespace-nowrap dark:text-white">Animalio</span>
            </a>
            <div className="flex items-center lg:order-2">
                <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Home</a>
                <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Page 1</a>
                <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Page 2</a>
            </div>
        </div>
    </nav>
</header>
    <div className = "flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-800">Bienvenido a Animalio</h1>
      
      <p className="text-lg text-gray-600 mt-2">Descubre el mundo de los animales!</p>
      
      <button className="mt-4 px-6 py-3 bg-yellow-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300">
        Empezar
      </button>
    </div>
    

    </div>
  );
}
