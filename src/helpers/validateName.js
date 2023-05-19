const validateName = (name) => {
  // Condition 1: Check if name contains a number
  if (/\d/.test(name)) {
    return false;
  }

  // Condition 2: Check if name contains a special character not usually used for names
  if (/[!@#$%^&*(),.?":{}|<>]/.test(name)) {
    return false;
  }

  // Condition 3: Check if name is less than 2 characters
  if (name.length < 2) {
    return false;
  }

  // Condition 4: Check if name is empty
  if (name.trim() === "") {
    return false;
  }

  // All conditions are met
  return true;
};

export default validateName;
