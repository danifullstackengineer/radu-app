const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/,
  password: /^[a-z\d\.@-\\\!\?]{8,30}$/i,
};

const checkUsername = (username: string): boolean => {
  return patterns.username.test(username);
};
const checkEmail = (email: string): boolean => {
  return patterns.email.test(email);
};
const checkPassword = (password: string): boolean => {
  return patterns.password.test(password);
};
const samePassword = (pw1: string | undefined, pw2: string): boolean => {
  return pw1 === pw2;
};

export { checkUsername, checkEmail, checkPassword, samePassword };
