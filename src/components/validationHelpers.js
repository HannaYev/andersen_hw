export const isCapitalizedLettersOnly = (name) => {
  const correctName = /^[A-ZА-ЯЁ]+/;
  const resName = correctName.test(name);
  return resName && name[0] === name[0]?.toUpperCase() && name;
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


