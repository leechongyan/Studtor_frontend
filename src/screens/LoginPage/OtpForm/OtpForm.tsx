import React, { useState } from 'react'

import { SignUpForm } from './components/SignUpForm'
import { VerifyOtpForm } from './components/VerifyOtpForm'

interface OtpProps {
  onVerify: () => void
}
export const OtpForm = ({ onVerify }: OtpProps): JSX.Element => {
  const [isVerifying, setIsVerifying] = useState(false)

  return isVerifying ? (
    <VerifyOtpForm onVerify={onVerify} />
  ) : (
    <SignUpForm onClick={() => setIsVerifying(true)} />
  )
}
