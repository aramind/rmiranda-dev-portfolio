const validateEmail = (email) => {
  // Check if email is not a valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  // All conditions are met
  return true;
};

export default validateEmail;
