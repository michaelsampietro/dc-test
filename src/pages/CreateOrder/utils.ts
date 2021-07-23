import { Address } from '../../types/Address';
import { Payment } from '../../types/Payment';
import { reaisToCents } from '../../utils/reaisToCents';

type Form = {
  address_city: string;
  address_complement: string;
  address_neighborhood: string;
  address_number: string;
  address_state: string;
  address_street: string;
  payment_amount: string;
  payment_method: string;
};

export const parseAddress = (values: Form): Address => {
  return {
    city: values.address_city,
    complement: values.address_complement,
    neighborhood: values.address_neighborhood,
    number: values.address_number,
    state: values.address_state,
    street: values.address_street,
  };
};

export const parsePayments = (values: Form): Payment[] => {
  return [
    {
      amount: reaisToCents(Number.parseInt(values.payment_amount)),
      method: values.payment_method,
    },
  ];
};
