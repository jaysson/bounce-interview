import {
  Action,
  OrderState,
  OrderStep,
  SET_BAGS_COUNT,
  SET_CARD_NUMBER,
  SET_CURRENT_STEP,
  SET_EMAIL,
  SET_NAME,
  SetBagsCountAction,
  SetCardNumberAction,
  SetCurrentStepAction,
  SetEmailAction,
  SetNameAction
} from './types';

export const orderStateReducer = (state: OrderState, action: Action): OrderState => {
  switch (action.type) {
    case 'SET_CARD_NUMBER':
      return { ...state, cardNumber: action.payload };
    case 'SET_BAGS_COUNT':
      return { ...state, bagsCount: action.payload };
    case 'SET_CURRENT_STEP':
      return { ...state, currentStep: action.payload };
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
  }
};

export const initialOrderState = {
  currentStep: OrderStep.bagsCount,
  bagsCount: 1,
  name: '',
  email: '',
  cardNumber: ''
};

export const setCurrentStep = (currentStep: OrderStep): SetCurrentStepAction => ({
  type: SET_CURRENT_STEP,
  payload: currentStep
});

export const setName = (name: string): SetNameAction => ({
  type: SET_NAME,
  payload: name
});

export const setEmail = (email: string): SetEmailAction => ({
  type: SET_EMAIL,
  payload: email
});

export const setCardNumber = (cardNumber: string): SetCardNumberAction => ({
  type: SET_CARD_NUMBER,
  payload: cardNumber
});

export const setBagsCount = (bagsCount: number): SetBagsCountAction => ({
  type: SET_BAGS_COUNT,
  payload: bagsCount
});
