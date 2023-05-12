import React from "react";
import styles from "./Form.module.css";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";

class Form extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>Создание анкеты</h1>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <Input name="name" placeholder="Имя">
              Имя:
            </Input>

            <Input name="surname" placeholder="Фамилия">
              Фамилия:
            </Input>

            <Input name="birthDate" placeholder="Дата рождения">
              Дата рождения:
            </Input>

            <Input
              type="tel"
              name="phoneNumber"
              placeholder="Телефон"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required              
            >
              Телефон:
            </Input>

            <Input name="website" placeholder="Сайт">
              Сайт:
            </Input>

            <Textarea name="about" placeholder="О себе" >
              О себе:
            </Textarea>

            <Textarea
              name="technology"
              placeholder="Стек технологий"             
            >
              Стек технологий:
            </Textarea>

            <Textarea
              name="lastProject"
              placeholder="Описание последнего проекта"              
            >
              Описание последнего проекта:
            </Textarea>
            <div className={styles.buttonsBlock}>
              <Button type="reset">Отмена</Button>
              <Button type="submit">Сохранить</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
