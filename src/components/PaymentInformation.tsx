import React, { Dispatch } from 'react';
import { Action, OrderState, OrderStep } from '../types';
import { setCardNumber } from '../order-state';

type Props = { dispatch: Dispatch<Action> } & OrderState;

const PaymentInformationComponent = ({ currentStep, dispatch, cardNumber }: Props) => {
  if (currentStep < OrderStep.paymentInformation) return null;

  return <div className="p-4 border-t border-gray">
    <h3 className="text-xl mb-4">Payment Information</h3>
    <div className="form-group">
      <label htmlFor="card-number">Card Number</label>
      <input type="number" onChange={(event) => dispatch(setCardNumber(event.target.value))} value={cardNumber}
             className="py-2 px-3 border rounded block w-full"/>
    </div>
  </div>;
};

export default PaymentInformationComponent;
