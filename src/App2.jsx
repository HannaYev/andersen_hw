import React, { useState } from "react";
import Form2 from "./components/Form/Form2";
import ResultBlank2 from "./components/ResultBlank/ResultBlank2";
import {
  isAreaLengthFixed,
  isCapitalizedLettersOnly,
  isCorrectWebsite,
  isYearBiggerThan2020,
} from "./components/validationHelpers";

function App2() {
  const [formData, setFormData] = useState({
    name: "",
    isNameValid: true,
    surname: "",
    isSurnameValid: true,
    birthDate: "",
    isBirthDateValid: true,
    phone: "",
    isPhoneValid: true,
    type: "text",
    website: "",
    isWebsiteValid: true,
    about: "",
    isAboutValid: true,
    technology: "",
    isTechnologyValid: true,
    lastProject: "",
    isLastProjectValid: true,
    attemptingSubmit: false,
    isFormValid:false
  });

//   const [isFormValid, setIsFormValid] = useState(false);

  const changeFormValues = (newValueObject) => {
    setFormData({ ...formData, ...newValueObject });
  };

  const onChangeName = (event) => {
    const newValue = event.target.value;
    const isNameValid = isCapitalizedLettersOnly(newValue);
    changeFormValues({ name: newValue, isNameValid });
  };

  const onChangeSurname = (event) => {
    const newValue = event.target.value;
    const isSurnameValid = isCapitalizedLettersOnly(newValue);
    changeFormValues({ surname: newValue, isSurnameValid });
  };

  const onChangeBirthDate = (event) => {
    const newValue = event.target.value;
    const year = event.target.value.slice(0, 4);
    const isBirthDateValid = isYearBiggerThan2020(year);
    changeFormValues({
      birthDate: newValue,
      isBirthDateValid,
      type: "date",
    });
  };

  // вынести в отд файл?

  const onChangePhone = (e) => {
    const correctPhone = /[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}/;

  setFormData((prevFormData)=>{
    let newFormData
    if(prevFormData.phone.length > e.target.value.length){
        newFormData={...prevFormData,  phone: e.target.value}
    }
    else{
        if (e.target.value.length === 1){
            newFormData={...prevFormData,  phone: e.target.value+ "-"}
        }
        else if (e.target.value.length === 6){
            newFormData={...prevFormData,  phone: e.target.value+ "-"}
        }
        else if (e.target.value.length === 9){
            newFormData={...prevFormData,  phone: e.target.value+ "-"}
        }
        else{
            newFormData={...prevFormData,  phone: e.target.value}
        }
    }
    const isPhoneValid = newFormData.phone.match(correctPhone);
    return {...newFormData, isPhoneValid}
  })}


  const onChangeWebsite = (event) => {
    const newValue = event.target.value;
    const isWebsiteValid = isCorrectWebsite(newValue);
    changeFormValues({ website: newValue, isWebsiteValid });
  };

  const onChangeAbout = (event) => {
    const newValue = event.target.value;
    const isAboutValid = isAreaLengthFixed(newValue);
    changeFormValues({ about: newValue, isAboutValid });
  };

  const onChangeTechnology = (event) => {
    const newValue = event.target.value;
    const isTechnologyValid = isAreaLengthFixed(newValue);
    changeFormValues({ technology: newValue, isTechnologyValid });
  };

  const onChangeLastProject = (event) => {
    const newValue = event.target.value;
    const isLastProjectValid = isAreaLengthFixed(newValue);
    changeFormValues({ lastProject: newValue, isLastProjectValid });
  };

  const onClickResetBtn = () => {
    changeFormValues({
      name: "",
      surname: "",
      birthDate: "",
      phone: "",
      website: "",
      about: "",
      technology: "",
      lastProject: "",
      attemptingSubmit: false,
    });
    console.log(formData);
  };

  const onClickSubmitBtn = (e) => {
    e.preventDefault();
    const isFormValid =
      formData.isNameValid &&
      formData.name &&
      formData.isSurnameValid &&
      formData.surname &&
      formData.isBirthDateValid &&
      formData.birthDate &&
      formData.isPhoneValid &&
      formData.phone &&
      formData.isWebsiteValid &&
      formData.website &&
      formData.isAboutValid &&
      formData.about &&
      formData.isTechnologyValid &&
      formData.technology &&
      formData.isLastProjectValid &&
      formData.lastProject;

    changeFormValues({ attemptingSubmit: true, isFormValid});
    // changeFormValues({ attemptingSubmit: true });
    //???
    // const isFormValidHandler = () => {
    //   setIsFormValid(true);
    // };
    // isFormValidHandler();
  };

  return (
    <div>
      {!formData.isFormValid ? (
        <Form2
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
        <ResultBlank2 formData={formData} />
      )}
    </div>
  );
}

export default App2

