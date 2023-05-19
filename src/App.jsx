import React from "react";
import Form from "./components/Form/Form";
import ResultBlank from "./components/ResultBlank/ResultBlank";
import {
  isAreaLengthFixed,
  isCapitalizedLettersOnly,
  isCorrectWebsite,
  isYearBiggerThan2020,
} from "./components/validationHelpers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
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
      },      
      isFormValid: false,
    };
  }

  changeFormValues = (newValueObject) => {
    this.setState((prev) => ({
      ...prev,
      formData: { ...prev.formData, ...newValueObject },
    }));
  };

    onChangeName = (event) => {
    const newValue = event.target.value;
    const isNameValid = isCapitalizedLettersOnly(newValue);
    this.changeFormValues({ name: newValue, isNameValid });
  };

  onChangeSurname = (event) => {
    const newValue = event.target.value;
    const isSurnameValid = isCapitalizedLettersOnly(newValue);
    this.changeFormValues({ surname: newValue, isSurnameValid });
  };

  onChangeBirthDate = (event) => {
    const newValue = event.target.value;
    const year = event.target.value.slice(0, 4);
    const isBirthDateValid = isYearBiggerThan2020(year);
    this.changeFormValues({
      birthDate: newValue,
      isBirthDateValid,
      type: "date",
    });
  };

  onChangePhone = (e) => {
    const correctPhone = /[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}/;

    this.setState((prev) => {
      let newState;
      if (prev.formData.phone.length > e.target.value.length) {
        newState = {
          ...prev,
          formData: { ...prev.formData, phone: e.target.value },
        };
      } else {
        if (e.target.value.length === 1) {
          newState = {
            ...prev,
            formData: { ...prev.formData, phone: e.target.value + "-" },
          };
        } else if (e.target.value.length === 6) {
          newState = {
            ...prev,
            formData: { ...prev.formData, phone: e.target.value + "-" },
          };
        } else if (e.target.value.length === 9) {
          newState = {
            ...prev,
            formData: { ...prev.formData, phone: e.target.value + "-" },
          };
        } else {
          newState = {
            ...prev,
            formData: { ...prev.formData, phone: e.target.value },
          };
        }
      }

      const isPhoneValid = newState.formData.phone.match(correctPhone);
      return {
        ...newState,
        formData: { ...newState.formData, isPhoneValid },
      };
    });
  };

  onChangeWebsite = (event) => {
    const newValue = event.target.value;
    const isWebsiteValid = isCorrectWebsite(newValue);
    this.changeFormValues({ website: newValue, isWebsiteValid });
  };

  onChangeAbout = (event) => {
    const newValue = event.target.value;
    const isAboutValid = isAreaLengthFixed(newValue);
    this.changeFormValues({ about: newValue, isAboutValid });
  };

  onChangeTechnology = (event) => {
    const newValue = event.target.value;
    const isTechnologyValid = isAreaLengthFixed(newValue);
    this.changeFormValues({ technology: newValue, isTechnologyValid });
  };

  onChangeLastProject = (event) => {
    const newValue = event.target.value;
    const isLastProjectValid = isAreaLengthFixed(newValue);
    this.changeFormValues({ lastProject: newValue, isLastProjectValid });
  };

  onClickResetBtn = () => {
    this.changeFormValues({
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
    console.log(this.state);
  };

  onClickSubmitBtn = (e) => {
    e.preventDefault();
    const isFormValid =
      this.state.formData.isNameValid &&
      this.state.formData.name &&
      this.state.formData.isSurnameValid &&
      this.state.formData.surname &&
      this.state.formData.isBirthDateValid &&
      this.state.formData.birthDate &&
      this.state.formData.isPhoneValid &&
      this.state.formData.phone &&
      this.state.formData.isWebsiteValid &&
      this.state.formData.website &&
      this.state.formData.isAboutValid &&
      this.state.formData.about &&
      this.state.formData.isTechnologyValid &&
      this.state.formData.technology &&
      this.state.formData.isLastProjectValid &&
      this.state.formData.lastProject;

    this.changeFormValues({ attemptingSubmit: true, isFormValid });
  };

  render() {
    return (
      <div>
        {!this.state.formData.isFormValid ? (
          <Form
            formData={this.state.formData}            
            onChangeName={this.onChangeName}
            onChangeSurname={this.onChangeSurname}
            onChangeBirthDate={this.onChangeBirthDate}
            onChangePhone={this.onChangePhone}
            onChangeWebsite={this.onChangeWebsite}
            onChangeAbout={this.onChangeAbout}
            onChangeTechnology={this.onChangeTechnology}
            onChangeLastProject={this.onChangeLastProject}
            onClickResetBtn={this.onClickResetBtn}
            onClickSubmitBtn={this.onClickSubmitBtn}
          />
        ) : (
          <ResultBlank formData={this.state.formData} />
        )}
      </div>
    );
  }
}

export default App;
