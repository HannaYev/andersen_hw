import React, { useState } from "react";
import Form from "./components/Form/Form";
import ResultBlank from "./components/ResultBlank/ResultBlank";
import {
  isAreaLengthFixed,
  isCapitalizedLettersOnly,
  isCorrectWebsite,
  isYearBiggerThan2020,
  isCorrectPhone,
} from "./components/validationHelpers";

function App() {
  function getDefaultState() {
    return {
      name: "",
      surname: "",
      birthDate: "",
      phone: "",
      website: "",
      about: "",
      technology: "",
      lastProject: "",
      attemptingSubmit: false,
      type: "text",
    };
  }
  const [formData, setFormData] = useState({
    isNameValid: true,
    isSurnameValid: true,
    isBirthDateValid: true,
    isPhoneValid: true,
    isWebsiteValid: true,
    isAboutValid: true,
    isTechnologyValid: true,
    isLastProjectValid: true,
  });

  const [initialState, setValueState] = useState(getDefaultState());
  const [isFormValid, setIsFormValid] = useState(false);

  const changeFormValues = (newValueObjectState, newValueObjectFormData) => {
    setValueState((prevInitialState) => ({
      ...prevInitialState,
      ...newValueObjectState,
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...newValueObjectFormData,
    }));
  };

  const onChangeInput = (
    event,
    inputField,
    inputValidator,
    isInputValueValid
  ) => {
    const newValue = event.target.value;
    const isInputValueTrue = inputValidator(
      inputField === "birthDate" ? newValue.slice(0, 4) : newValue
    );
    inputField === "birthDate"
      ? changeFormValues(
          { type: "date", [inputField]: newValue },
          { [isInputValueValid]: isInputValueTrue }
        )
      : changeFormValues(
          { [inputField]: newValue },
          { [isInputValueValid]: isInputValueTrue }
        );
  };

  const onChangePhone = (event) => {
    let newValueState;
    setValueState((prevValueState) => {
      const newValue = event.target.value;
      if (prevValueState.phone.length > newValue.length) {
        newValueState = { ...prevValueState, phone: newValue };
      } else {
        if (
          newValue.length === 1 || newValue.length === 6 || newValue.length === 9) {
          newValueState = { ...prevValueState, phone: newValue + "-" };
        } else {
          newValueState = { ...prevValueState, phone: newValue };
        }
      }     

      const isPhoneValid = isCorrectPhone(newValueState.phone);
      setFormData({ ...formData, isPhoneValid });
      return { ...newValueState };
    });
  };

  const onClickSubmitBtn = (e) => {
    e.preventDefault();
    changeFormValues({ attemptingSubmit: true });
    const allValuesTrue = Object.values(formData).every((value) => value);
    const allStatesTrue = Object.values(initialState).every(
      (value) => String(value).length
    );
    const isFormValid = allStatesTrue && allValuesTrue;
    setIsFormValid(isFormValid);
  };

  return (
    <div>
      {!isFormValid ? (
        <Form
          stateValues={initialState}
          formData={formData}
          onChangeName = {(e)=> onChangeInput(e, "name", isCapitalizedLettersOnly, "isNameValid")}                
          onChangeSurname={(e)=> onChangeInput(e, "surname", isCapitalizedLettersOnly,"isSurnameValid")}          
          onChangeBirthDate={(e)=> onChangeInput(e, "birthDate", isYearBiggerThan2020, "isBirthDateValid")}
          onChangePhone={onChangePhone}   
          onChangeWebsite={(e)=> onChangeInput(e, "website", isCorrectWebsite, "isWebsiteValid")}         
          onChangeAbout={(e)=> onChangeInput(e, "about", isAreaLengthFixed, "isAboutValid")}          
          onChangeTechnology={(e)=> onChangeInput(e, "technology", isAreaLengthFixed, "isTechnologyValid")}          
          onChangeLastProject={(e)=> onChangeInput(e,"lastProject", isAreaLengthFixed,"isLastProjectValid")}
          onClickResetBtn={() => {
            changeFormValues(getDefaultState());
          }}
          onClickSubmitBtn={onClickSubmitBtn}
        />
      ) : (
        <ResultBlank stateValues={initialState} />
      )}
    </div>
  );
}

export default App;
