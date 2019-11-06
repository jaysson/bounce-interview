export const SET_BAGS_COUNT = 'SET_BAGS_COUNT';
export const SET_CURRENT_STEP = 'SET_CURRENT_STEP';
export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_CARD_NUMBER = 'SET_CARD_NUMBER';
export const PRICE_PER_BAG = 5.99;

export enum OrderStep {
  bagsCount,
  personalDetails,
  paymentInformation,
  checkout,
  checkoutFailure,
}

export type OrderState = {
  currentStep: OrderStep,
  bagsCount: number,
  name: string;
  email: string;
  cardNumber: string;
};

export type SetCurrentStepAction = {
  type: typeof SET_CURRENT_STEP,
  payload: OrderStep
};

export type SetBagsCountAction = {
  type: typeof SET_BAGS_COUNT,
  payload: number
};

export type SetNameAction = {
  type: typeof SET_NAME,
  payload: string
};

export type SetEmailAction = {
  type: typeof SET_EMAIL;
  payload: string;
}

export type SetCardNumberAction = {
  type: typeof SET_CARD_NUMBER;
  payload: string;
}

export type Action = SetCardNumberAction | SetNameAction | SetEmailAction | SetBagsCountAction | SetCurrentStepAction;
