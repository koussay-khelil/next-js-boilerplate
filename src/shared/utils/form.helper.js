export const greaterThan = (
  rule,
  value,
  callback,
  compareToValue,
  compareToLabel,
) => {
  //   console.log('value: ', value);
  if (value === undefined || value === null || value === '') callback();
  if (!Number(value)) {
    callback('Ce champ doit être un nombre');
  } else if (Number(value) <= Number(compareToValue)) {
    callback(`La valeur doit être superieure${compareToLabel}`);
  } else {
    callback();
  }
};

export const checkAcquisitionCapacity = (
  minValue,
  maxValue,
  contribution,
  acquisitionWay,
) => {
  console.log('value: ', contribution);
  if (
    (acquisitionWay === undefined ||
      acquisitionWay === null ||
      acquisitionWay === '') &&
    (minValue || maxValue || contribution)
  ) {
    return "Choisissez d'abord comment allez vous acquérir le bien";
  }

  if (Number(minValue) && Number(maxValue) && Number(contribution)) {
    const capacity =
      acquisitionWay === 'pretBancaire'
        ? Number(contribution) * 0.35
        : Number(contribution);
    if (Number(minValue) <= capacity && capacity < Number(maxValue)) {
      return `Votre capacité d’acquisition est inférieure à votre prix souhaité Max`;
    }
    if (Number(minValue) > capacity) {
      return `votre capacité d’acquisition est inférieure à votre prix souhaité Min`;
    }
  }
};

export const checkIsNumber = (rule, value, callback) => {
  console.log('value: ', value, Number(value));
  if (
    value === undefined ||
    value === null ||
    value === '' ||
    value === 0 ||
    value === '0'
  )
    callback();
  if (!Number(value)) {
    callback('Ce champ doit être un entier');
  } else {
    callback();
  }
};

export const getHelpMessage = (valueFromApi, valuefromForm, isArray) => {
  if (isArray) {
    if (!valueFromApi) return undefined;
    if (valueFromApi.length !== 0 && valuefromForm === undefined)
      return undefined;
    if (valuefromForm && valuefromForm.length !== 0) return undefined;
    return messageValidation;
  }
  if (
    (valueFromApi || valueFromApi === false || valueFromApi === 0) &&
    valuefromForm === undefined
  )
    return undefined;
  if (valuefromForm || valuefromForm === false || valuefromForm === 0)
    return undefined;
  return messageValidation;
};

export const messageValidation = 'Champ obligatoire à la validation';
