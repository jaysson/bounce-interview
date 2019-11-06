import React from 'react';

type Props = {
  bagsCount: number;
  amount: number | string;
  buttonText: string;
  onClick?: () => any;
}

const BottomNavigationComponent = ({ bagsCount, amount, onClick, buttonText }: Props) => {
  return <footer className="flex justify-between p-4 items-center border-t">
    <p>{bagsCount} bag <br/><strong>${amount}</strong></p>
    <button className="py-2 px-8 bg-blue-400 text-white disabled:text-gray-400" onClick={onClick} disabled={!onClick}>{buttonText}</button>
  </footer>;
};

export default BottomNavigationComponent;
