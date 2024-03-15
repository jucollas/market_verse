import Order from "../ui/shop/order";

export default function ShopPage() {
  return (
    <div className="lg:flex lg:justify-between lg:items-start">
      {/* Componente a la izquierda en pantallas grandes */}
      <div className="lg:w-2/3 lg:mr-4 mb-4 lg:mb-0 bg-gray-200 flex justify-center items-center">
        Contenido del componente izquierdo
      </div>

      {/* Componente debajo en pantallas pequeñas */}
      <div className="lg:w-1/3 bg-gray-400 flex flex-col justify-center items-center">
        {/* Centra vertical y horizontalmente el componente Order */}
        <div className="flex flex-col items-center">
          <Order subtotal={10} shipping={10} taxes={10} />
          {/* Resumen del pedido */}
          <div className="mt-8 bg-white p-4 rounded-md shadow-md flex-grow flex-shrink">
            <h2 className="text-xl font-semibold mb-2">Resumen del Pedido</h2>
            {/* Aquí va el contenido del resumen del pedido */}
          </div>
        </div>
      </div>
    </div>
  );
}
