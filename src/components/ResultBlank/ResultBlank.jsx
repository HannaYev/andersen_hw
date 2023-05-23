import React from "react";
import styles from "./ResultBlank.module.css";

function ResultBlank(props){
    const { stateValues } = props;
    const {
      name,
      surname,
      birthDate,
      phone,
      website,
      about,
      technology,
      lastProject,
    } = stateValues;

    return (
        <div className={styles.blankWrapper}>
          <h1 className={styles.blankTitle}>
            {name} {surname}
          </h1>
          <p> <b>Дата рождения:</b> {birthDate}</p>
          <p><b>Телефон:</b> {phone}</p>
          <p><b>Сайт:</b> {website}</p>
          <p><b>О себе:</b> {about}</p>
          <p><b>Стек технологий:</b> {technology}</p>
          <p><b>Описание последнего проекта:</b> {lastProject}</p>
        </div>
      );
}

export default ResultBlank;







