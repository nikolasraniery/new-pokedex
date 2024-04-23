export function Navbar() {
  return (
    <div className="w-full flex justify-center items-center bg-red-primary h-16">
      <ul className="flex gap-6 w-full justify-center text-cream">
        <li className=":hover::after-w-full ::after-content-['']">Pokemons</li>
        <li className="cursor-pointer">Itens</li>
        <li className="cursor-pointer">Localizações</li>
      </ul>
    </div>
  );
}
