import React from 'react';
export const SalePage = () => {
  const saleItems = [{
    name: 'Summer Dresses',
    discount: '50% OFF',
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'Casual Wear',
    discount: '30% OFF',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'Accessories',
    discount: '40% OFF',
    image: 'https://images.unsplash.com/photo-1509941943102-10c232535736?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }];
  return <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1a2456] mb-4">
            Season Sale
          </h1>
          <p className="text-xl text-[#c76d4e]">
            Up to 50% off on selected items
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {saleItems.map((item, index) => <div key={index} className="group relative overflow-hidden rounded-lg">
              <img src={item.image} alt={item.name} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                <h2 className="text-white text-2xl font-bold mb-2">
                  {item.name}
                </h2>
                <p className="text-[#e6d2b5] text-xl font-bold">
                  {item.discount}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </main>;
};