import React, { ChangeEvent, Dispatch } from 'react';
import { Action, OrderState, OrderStep } from '../types';
import { setCurrentStep, setEmail, setName } from '../order-state';

const PersonalDetailsComponent = ({ currentStep, email, name, dispatch }: OrderState & { dispatch: Dispatch<Action> }) => {
  if (currentStep === OrderStep.bagsCount) return null;

  if (currentStep > OrderStep.personalDetails) {
    const expandPersonalDetails = () => dispatch(setCurrentStep(OrderStep.personalDetails));

    return <div className="bg-yellow-200 flex justify-between"><p className="p-4">Personal Details:</p> <button
      onClick={expandPersonalDetails} className="p-4">Change?</button></div>;
  }

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => dispatch(setName(event.target.value));
  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => dispatch(setEmail(event.target.value));

  return <div className="p-4">
    <h3 className="mb-4 text-xl">Personal Details:</h3>
    <div className="input-group mb-4">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={onNameChange} value={name} className="py-2 px-3 border rounded block w-full"/>
    </div>
    <div className="input-group mb-4">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" onChange={onEmailChange} value={email} className="py-2 px-3 border rounded block w-full"/>
    </div>
  </div>;
};

export default PersonalDetailsComponent;
