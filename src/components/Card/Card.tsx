export function Card() {
  return (
    <div className="card w-56 h-auto transition-all duration-300 relative rounded-md md:rounded-lg shadow-lg hover:scale-103">
      <div className="img-container grid rounded-md md:rounded-lg h-72 overflow-hidden">
        <div className="img transition-all duration-300 bg-gradient-to-r from-purple-900 to-pink-500 w-full hover:scale-130"></div>
        <div className="description absolute bottom-2 left-2 text-start p-2 w-11/12 transition-all duration-500 ease-in-out text-white truncate whitespace-nowrap backdrop-filter backdrop-blur border-2 border-gray-200 rounded-md md:rounded-lg bg-opacity-50 hover:transform hover:rotate-x-3 hover:rotate-y-3 hover:scale-100">
          <span className="title">Card</span>
        </div>
      </div>
    </div>
  );
}
