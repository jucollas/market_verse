import React from 'react';

interface OrderProps {
  subtotal: number;
  shipping: number;
  taxes: number;
}

function Order({ subtotal, shipping, taxes }: OrderProps) {
  const total = subtotal + shipping + taxes;

  return (
    <div className="order-container flex justify-end items-start h-screen pt-12">
      <div className="border border-gray-200 p-4 rounded-md shadow-md text-center">
        <h2 className="text-lg font-semibold mb-4">Resumen del pedido</h2>
        <div className="flex flex-col-reverse mb-4">
          <div className="flex justify-between">
            <span className="font-semibold">Total:</span>
            <span>${total}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Impuestos:</span>
            <span>${taxes}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Envío:</span>
            <span>${shipping}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Subtotal:</span>
            <span>${subtotal}</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Continuar con el pago
        </button>
      </div>
    </div>
  );
}

export default Order;
