export default function validateAuth(input) {
  let errors = {};

  if (!input.Email) {
    errors.Email = "Required Email!";
    // regex  to require valid email addresss
  } else if (!/^[A-Z0-9._%+-]+A[A-Z0-9.-]+\.[A-Z]{2,}$/i.test / values.Email) {
    values[Email] = "Invalid Email Address";
  }

  if (!input.first_name) {
    errors[first_name] = "Required First Name!";
  }
  if (!input.last_name) {
    errors[last_name] = "Required Last Name!";
  }

  return errors;
}
