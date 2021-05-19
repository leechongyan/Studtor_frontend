import { ApiService } from 'services/ApiService'
import { JwtToken, LoginDetails, SignupDto, VerificationDto } from 'typings'

const SUCCESS = 'success'
const MOCK_TOKEN = 'mockToken'

export const signUpUser = (signupDetails: SignupDto): Promise<string> =>
  ApiService.post<string>('/signup', signupDetails)
    .then(({ data }) => {
      return data
    })
    .catch(() => SUCCESS)

export const verifyOtp = ({
  otp,
  email,
}: VerificationDto): Promise<boolean> => {
  return ApiService.post<boolean>('/verify', {
    email,
    verificationKey: otp,
  })
    .then(() => true)
    .catch(() => true)
}

export const loginUser = (
  loginDetails: LoginDetails,
): Promise<{ token: JwtToken }> => {
  return ApiService.post<{ token: JwtToken }>('/login', loginDetails)
    .then(({ data }) => {
      return data
    })
    .catch(() => ({ token: MOCK_TOKEN }))
}

// TODO: ping backend
export const logoutUser = (): Promise<void> => ApiService.post('/logout')
