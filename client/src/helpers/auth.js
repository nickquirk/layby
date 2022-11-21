import { Buffer } from 'buffer'

const tokenName = 'sei67-project-three'

// Save token to localStorage
export const setToken = (token) => {
  localStorage.setItem(tokenName, token)
}

// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem(tokenName)
}

// Decode token in local storage,return payload
export const getPayload = () => {
  // Get the token from localStorage
  const token = getToken()
  // Check the token has a value - will return null if no token exists
  // In the case that no token exists, we return false as the function value
  if (!token) return false
  // If there is a token, we want to check it's the correct format
  // If there are 3 sections, separated by a .  we are happy to proceed
  const splitToken = token.split('.')
  if (splitToken.length !== 3) return false
  // Get the payload from the token
  // Decoding the base64 encoded string, and returning the payload object that was the second part of the JWT
  return JSON.parse(Buffer.from(splitToken[1], 'base64'))
}

// Check for a token, and then check that token has not expired
export const isAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false
  // Check the expiry from the token is in the future
  const { exp } = payload
  const now = Math.round(Date.now() / 1000)
  return exp > now
}

export const handleLogout = (navigate) => {
  // Remove token
  localStorage.removeItem(tokenName)
  // Navigate to login page
  navigate('/login')
}

// Check one id against another
export const isOwner = (token1) => {
  const payload = getPayload()
  if (!payload) return false
  return token1 === payload.sub
}
