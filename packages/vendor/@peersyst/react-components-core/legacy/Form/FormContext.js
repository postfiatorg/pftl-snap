import { createContext } from "react";
export var FormContext = /*#__PURE__*/createContext({
  valid: true,
  notifyForm: function notifyForm() {
    return undefined;
  },
  submitted: false,
  handleSubmit: function handleSubmit() {
    return undefined;
  }
});
export var FormProvider = FormContext.Provider;
export var FormConsumer = FormContext.Consumer;