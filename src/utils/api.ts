import { AxiosError } from 'axios'
import { Toast } from 'typings/toast'

// Returns
export const createToastFromAxiosError = <T extends AxiosError>(
  error: T,
): Toast => {
  const {
    // TODO: figure out how to type AxiosError
    response: { status, statusText },
  } = error
  return { title: status, description: statusText, isClosable: true }
}
