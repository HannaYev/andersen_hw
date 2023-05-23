import React from "react";
import styles from "./Form.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";

function Form(props) {
  const {
    onChangeName,
    onChangeSurname,
    onChangeBirthDate,
    onChangePhone,
    onChangeWebsite,
    onChangeAbout,
    onChangeTechnology,
    onChangeLastProject,
    onClickResetBtn,
    onClickSubmitBtn,
  } = props;
  const { formData } = props;
  const { stateValues } = props;

  const {
    type,
    name,
    surname,
    birthDate,
    phone,
    website,
    about,
    technology,
    lastProject,
    attemptingSubmit,
  } = stateValues;

  const {    
    isNameValid,
    isSurnameValid,
    isBirthDateValid,
    isPhoneValid,
    isWebsiteValid,
    isAboutValid,
    isTechnologyValid,
    isLastProjectValid,
  } = formData;
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Создание анкеты</h1>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <Input
            name="name"
            placeholder="Имя"
            onChange={onChangeName}
            value={name}
            isValid={isNameValid}
            attemptingSubmit={attemptingSubmit}
            errorMessage="Имя должно начинаться с большой буквы"
          >
            Имя:
          </Input>

          <Input
            name="surname"
            placeholder="Фамилия"
            onChange={onChangeSurname}
            value={surname}
            isValid={isSurnameValid && surname.length}
            attemptingSubmit={attemptingSubmit}
            errorMessage="Фамилия должна начинаться с большой буквы"
          >
            Фамилия:
          </Input>

          <Input
            name="birthDate"
            type={type}
            placeholder="Дата рождения"
            onChange={onChangeBirthDate}
            value={birthDate}
            isValid={isBirthDateValid && birthDate.length}
            attemptingSubmit={attemptingSubmit}
            errorMessage="Введите корректную дату рождения (не младше 2020 года)"
          >
            Дата рождения:
          </Input>

          <Input
            type="tel"
            name="phoneNumber"
            placeholder="Телефон"
            maxLength="12"
            value={phone}            
            onChange={onChangePhone}                    
            isValid={isPhoneValid && phone.length}
            attemptingSubmit={attemptingSubmit}
            errorMessage="Введите корректный телефон"
          >
            Телефон:
          </Input>

          <Input
            name="website"
            placeholder="Сайт"
            value={website}
            onChange={onChangeWebsite}
            isValid={isWebsiteValid && website.length}
            attemptingSubmit={attemptingSubmit}
            errorMessage="Введите корректный вебсайт"
          >
            Сайт:
          </Input>

          <Textarea
            name="about"
            placeholder="О себе"
            value={about}
            onChange={onChangeAbout}
            isValid={isAboutValid && about.length}
            attemptingSubmit={attemptingSubmit}
          >
            О себе:
          </Textarea>

          <Textarea
            name="technology"
            placeholder="Стек технологий"
            value={technology}
            onChange={onChangeTechnology}
            isValid={isTechnologyValid && technology.length}
            attemptingSubmit={attemptingSubmit}
          >
            Стек технологий:
          </Textarea>

          <Textarea
            name="lastProject"
            placeholder="Описание последнего проекта"
            value={lastProject}
            onChange={onChangeLastProject}
            isValid={isLastProjectValid && lastProject.length}
            attemptingSubmit={attemptingSubmit}
          >
            Описание последнего проекта:
          </Textarea>

          <div className={styles.buttonsBlock}>
            <Button type="reset" onClick={onClickResetBtn}>
              Отмена
            </Button>
            <Button type="submit" onClick={onClickSubmitBtn}>
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
