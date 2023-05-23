export const isCapitalizedLettersOnly = (name) => {
  const correctName = /^[A-ZА-ЯЁ]+/;
  const resName = correctName.test(name);
  const result =  resName && name[0] === name[0]?.toUpperCase() && name;
  return !!result
};

export const isYearBiggerThan2020 = (year) => {
  return Number(year) <= 2020;
};

export const isCorrectWebsite = (website) => {
  const correctURL = /https/;
  const resWebsite = correctURL.test(website);
  return resWebsite;
};

export const isAreaLengthFixed = (about) => {
  return about.length <= 600;
};

export const isCorrectPhone = (phone)=>{
  const correctPhone = /[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}/;
  const resPhone = correctPhone.test(phone)
  return resPhone
}


