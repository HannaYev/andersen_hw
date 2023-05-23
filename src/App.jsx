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

  const onChangeName = (event) => {
    onChangeInput(event, "name", isCapitalizedLettersOnly, "isNameValid");
  };

  const onChangeSurname = (event) => {
    onChangeInput(event, "surname", isCapitalizedLettersOnly, "isSurnameValid");
  };

  const onChangeBirthDate = (event) => {
    onChangeInput(event, "birthDate", isYearBiggerThan2020, "isBirthDateValid");
  };

  const onChangeWebsite = (event) => {
    onChangeInput(event, "website", isCorrectWebsite, "isWebsiteValid");
  };

  const onChangeAbout = (event) => {
    onChangeInput(event, "about", isAreaLengthFixed, "isAboutValid");
  };

  const onChangeTechnology = (event) => {
    onChangeInput(event, "technology", isAreaLengthFixed, "isTechnologyValid");
  };

  const onChangeLastProject = (event) => {
    onChangeInput(
      event,
      "lastProject",
      isAreaLengthFixed,
      "isLastProjectValid"
    );
  };

  const onChangePhone = (event) => {
    let newValueState;
    setValueState((prevValueState) => {
      const newValue = event.target.value;
      if (prevValueState.phone.length > newValue.length) {
        newValueState = { ...prevValueState, phone: newValue };
      } else {
        if (newValue.length === 1) {
          newValueState = { ...prevValueState, phone: newValue + "-" };
        } else if (newValue.length === 6) {
          newValueState = { ...prevValueState, phone: newValue + "-" };
        } else if (newValue.length === 9) {
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

  const onClickResetBtn = () => {
    changeFormValues(getDefaultState());
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
          onChangeName={onChangeName}
          onChangeSurname={onChangeSurname}
          onChangeBirthDate={onChangeBirthDate}
          onChangePhone={onChangePhone}
          onChangeWebsite={onChangeWebsite}
          onChangeAbout={onChangeAbout}
          onChangeTechnology={onChangeTechnology}
          onChangeLastProject={onChangeLastProject}
          onClickResetBtn={onClickResetBtn}
          onClickSubmitBtn={onClickSubmitBtn}
        />
      ) : (
        <ResultBlank stateValues={initialState} />
      )}
    </div>
  );
}

export default App;
