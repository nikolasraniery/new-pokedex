export function Navbar() {
  return (
    <div className="w-full flex justify-center items-center bg-red-primary h-16 p-8">
      <h1 className="font-pokemon text-3xl text-yellow-main bg-blue-main p-2 pb-0 rounded-md border-2 border-black">
        Pokédex
      </h1>
      <ul className="flex gap-12 w-full justify-center text-cream font-pressStart">
        <li className="cursor-pointer relative group hover:after:w-full text-12 font-normal">
          Pokémons
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-main opacity-0 transition-all duration-400 group-hover:opacity-100 group-hover:w-full"></span>
        </li>

        <li className="cursor-pointer relative group hover:after:w-full text-12 font-normal">
          Itens
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-main opacity-0 transition-all duration-400 group-hover:opacity-100 group-hover:w-full"></span>
        </li>
        <li className="cursor-pointer relative group hover:after:w-full text-12 font-normal">
          Localizações
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-main opacity-0 transition-all duration-400 group-hover:opacity-100 group-hover:w-full"></span>
        </li>
      </ul>
    </div>
  );
}
