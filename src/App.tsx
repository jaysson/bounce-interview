import React, { useMemo, useReducer } from 'react';
import StoragePlace from './components/StoragePlace';
import { OrderStep, PRICE_PER_BAG } from './types';
import PersonalDetailsComponent from './components/PersonalDetailsComponent';
import BottomNavigationComponent from './components/BottomNavigation';
import { initialOrderState, orderStateReducer, setBagsCount, setCurrentStep } from './order-state';
import PaymentInformationComponent from './components/PaymentInformation';
import CheckoutComponent from './components/Checkout';

const App: React.FC = () => {
  const [orderState, orderStateDispatch] = useReducer(orderStateReducer, initialOrderState);

  const { buttonText, onClick, amount } = useMemo(() => {
    const amount = (PRICE_PER_BAG * orderState.bagsCount).toFixed(2);
    if (orderState.currentStep === OrderStep.bagsCount) {
      return { amount, onClick: () => orderStateDispatch(setCurrentStep(OrderStep.personalDetails)), buttonText: 'Next' };
    }
    if (orderState.currentStep === OrderStep.personalDetails && orderState.name.trim() && orderState.email.trim()) {
      return { amount, onClick: () => orderStateDispatch(setCurrentStep(OrderStep.paymentInformation)), buttonText: 'Next' };
    }
    if (orderState.currentStep === OrderStep.paymentInformation && orderState.cardNumber.trim()) {
      return { amount, onClick: () => orderStateDispatch(setCurrentStep(OrderStep.checkout)), buttonText: 'Next' };
    }
    if (orderState.currentStep === OrderStep.checkoutFailure) {
      return { amount, onClick: () => orderStateDispatch(setCurrentStep(OrderStep.checkout)), buttonText: 'Retry' };
    }
    return { buttonText: 'Next', amount };
  }, [orderState]);

  return (
    <div className="h-screen w-screen flex flex-col">
      <StoragePlace storeName="Cody's Cookie Store" bagCount={orderState.bagsCount}
                    onBagCountChange={(value) => orderStateDispatch(setBagsCount(value))}/>
      <div className="flex-1">
        <PersonalDetailsComponent dispatch={orderStateDispatch} {...orderState}/>
        <PaymentInformationComponent dispatch={orderStateDispatch} {...orderState}/>
        <CheckoutComponent {...orderState} dispatch={orderStateDispatch}/>
      </div>
      <BottomNavigationComponent bagsCount={orderState.bagsCount} amount={amount} onClick={onClick}
                                 buttonText={buttonText}/>
    </div>
  );
};

export default App;
