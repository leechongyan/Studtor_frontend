// NOTE: This is defined outside to prevent reinitialization'
// Retrieved from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Checks if a given string is a valid email address
export const isValidEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email.toLowerCase())
}
