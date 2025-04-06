import { useState } from "react";

interface ReturnForm<T extends Record<string, unknown>> {
  values: T;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetValues: () => void;
}

export const useForm = <T extends Record<string, unknown>>(data: T): ReturnForm<T> => {
  const [values, setValues] = useState<T>(data);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getValue: Record<typeof e.target.type, string | boolean> = {
      text: e.target.value,
      checkbox: e.target.checked,
    };

    setValues({
      ...values,
      [e.target.name]: getValue[e.target.type],
    });
  };

  const resetValues = () => {
    setValues(data);
  };

  return { values, changeHandler, resetValues };
};
