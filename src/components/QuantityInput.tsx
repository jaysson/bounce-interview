import React from 'react';

type Props = {
  value: number | undefined;
  step?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => any;
};

export default function QuantityInput({
  value = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  onChange = () => {}
}: Props) {
  const increment = () => {
    if (value + step < max) {
      return onChange(value + step);
    }
    onChange(max);
  };

  const decrement = () => {
    if (value - step > min) {
      return onChange(value - step);
    }
    onChange(min);
  };

  return (
    <div className="border rounded flex justify-around items-center h-full">
      <button className="px-2 pb-1" onClick={decrement}>
        -
      </button>
      <span>{value}</span>
      <button className="px-2 pb-1" onClick={increment}>
        +
      </button>
    </div>
  );
}
