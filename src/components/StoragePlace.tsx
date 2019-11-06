import React from 'react';
import QuantityInput from './QuantityInput';

type Props = {
  storeName: string;
  bagCount: number;
  onBagCountChange: (value: number) => any;
};

const StoragePlace = ({ storeName, bagCount, onBagCountChange }: Props) => {
  return <div className="flex-shrink-0 border-b border-gray p-4">
    <p>Booking storage at:</p>
    <h3 className="text-xl font-bold mb-8">{storeName}</h3>
    <div className="flex">
      <p className="flex-1">Number of bags</p>
      <QuantityInput value={bagCount} onChange={onBagCountChange} min={1}/>
    </div>
  </div>;
};

export default StoragePlace;
