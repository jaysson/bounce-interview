import React, { Dispatch } from 'react';
import { Action, OrderState, OrderStep } from '../types';
import { setCurrentStep } from '../order-state';

type Props = OrderState & { dispatch: Dispatch<Action> };

const CheckoutComponent = ({ currentStep, dispatch }: Props) => {
  if (currentStep !== OrderStep.checkout) return null;

  return <div onClick={dispatch.bind(null, setCurrentStep(OrderStep.checkoutFailure))}
              className="w-screen h-screen fixed flex items-center justify-center top-0 left-0"
              style={{ background: 'rgba(0,0,0,0.75)' }}>
    <h3 className="text-white text-center text-xl font-bold">Placing Booking...</h3>
  </div>;
};

export default CheckoutComponent;
