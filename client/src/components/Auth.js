import React from 'react'


export const ApiUrl = "http://localhost:3001/api/v1/"
export const LoginButton = () => (
  <a href=`${ApiUrl}auth`>Log In</a>
)
