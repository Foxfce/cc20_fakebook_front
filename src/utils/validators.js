import { string, object, ref} from 'yup';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileRegex = /^[0-9]{10,15}$/

export const registerSchema = object({
  firstName: string().required('Please input your first name'),
  lastName: string().required('Please input your last name'),
  identity: string()
    .test('Identity check',
      'Identity must be a valid email or mobile number',
      value => {
        return emailRegex.test(value) || mobileRegex.test(value)
      }),
  password: string().min(4).required("Please insert your password"),
  confirmPassword: string().oneOf([ref("password")], `confirmPassword must match password`),
}).noUnknown();
// for exclude unwanted variable in schema

export const loginSchema = object({
  identity: string()
    .test('Identity check',
      'Please input your E-mail or Password',
      value => {
        return emailRegex.test(value) || mobileRegex.test(value)
      }),
  password: string().required("Please insert your password"),
  email: string().email(),
  mobile: string().matches(mobileRegex, `invalid mobile phone`)
}).noUnknown();