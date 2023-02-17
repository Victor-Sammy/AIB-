import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
// import { useSelector } from "react-redux";
// import { selectUser } from "../store/userSlice";
import { useAuth } from '../context/AuthContext'

export const RequireAuth = ({ children }) => {
  const location = useLocation()
  const { user } = useAuth()

  if (!user) {
    return <Navigate to='/signin' state={{ path: location.pathname }} />
  }
  return children
}
