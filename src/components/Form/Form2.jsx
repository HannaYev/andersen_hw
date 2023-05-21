import React from "react";
import styles from "./Form.module.css";
import Button2 from "../Button/Button2";
import Input2 from "../Input/Input2";
import Textarea2 from "../Textarea/Textarea2";


function Form2 (props){
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
      const {
        name,
        isNameValid,
        surname,
        isSurnameValid,
        type,
        birthDate,
        isBirthDateValid,
        phone,
        isPhoneValid,
        website,
        isWebsiteValid,
        about,
        isAboutValid,
        technology,
        isTechnologyValid,
        lastProject,
        isLastProjectValid,
        attemptingSubmit,
      } = formData;
      return (
        <div className={styles.wrapper}>
          <h1 className={styles.h1}>Создание анкеты</h1>
          <div className={styles.formContainer}>
            <form className={styles.form}>
              <Input2
                name="name"
                placeholder="Имя"
                onChange={onChangeName}
                value={name.trim()}
                isValid={isNameValid}
                attemptingSubmit={attemptingSubmit}
                errorMessage="Имя должно начинаться с большой буквы"
              >
                Имя:
              </Input2>
  
              <Input2
                name="surname"
                placeholder="Фамилия"
                onChange={onChangeSurname}
                value={surname.trim()}
                isValid={isSurnameValid && surname.length}
                attemptingSubmit={attemptingSubmit}
                errorMessage="Фамилия должна начинаться с большой буквы"
              >
                Фамилия:
              </Input2>
  
              <Input2
                name="birthDate"
                type={type}
                placeholder="Дата рождения"
                onChange={onChangeBirthDate}
                value={birthDate.trim()}
                isValid={isBirthDateValid && birthDate.length}
                attemptingSubmit={attemptingSubmit}
                errorMessage="Введите корректную дату рождения (не младше 2020 года)"
              >
                Дата рождения:
              </Input2>
  
              <Input2
                type="tel"
                name="phoneNumber"
                placeholder="Телефон"
                maxLength="12"
                onChange={onChangePhone}
                value={phone.trim()}
                isValid={isPhoneValid && phone.length}
                attemptingSubmit={attemptingSubmit}
                errorMessage="Введите корректный телефон"
              >
                Телефон:
              </Input2>
  
              <Input2
                name="website"
                placeholder="Сайт"
                value={website}
                onChange={onChangeWebsite}
                isValid={isWebsiteValid && website.length}
                attemptingSubmit={attemptingSubmit}
                errorMessage="Введите корректный вебсайт"
              >
                Сайт:
              </Input2>
  
              <Textarea2
                name="about"
                placeholder="О себе"
                value={about}
                onChange={onChangeAbout}
                isValid={isAboutValid && about.length}
                attemptingSubmit={attemptingSubmit}
              >
                О себе:
              </Textarea2>
  
              <Textarea2
                name="technology"
                placeholder="Стек технологий"
                value={technology}
                onChange={onChangeTechnology}
                isValid={isTechnologyValid && technology.length}
                attemptingSubmit={attemptingSubmit}
              >
                Стек технологий:
              </Textarea2>
  
              <Textarea2
                name="lastProject"
                placeholder="Описание последнего проекта"
                value={lastProject}
                onChange={onChangeLastProject}
                isValid={isLastProjectValid && lastProject.length}
                attemptingSubmit={attemptingSubmit}
              >
                Описание последнего проекта:
              </Textarea2>
  
              <div className={styles.buttonsBlock}>
                <Button2 type="reset" onClick={onClickResetBtn}>
                  Отмена
                </Button2>
                <Button2 type="submit" onClick={onClickSubmitBtn}>
                  Сохранить
                </Button2>
              </div>
            </form>
          </div>
        </div>
      );
}



export default Form2;
