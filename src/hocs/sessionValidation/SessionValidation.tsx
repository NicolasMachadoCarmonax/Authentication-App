import React from "react";
import { useSessionValidation } from './useSessionValidation.ts'
import { routeAuthenticationSignIn } from "../../constants/constants.ts";
import { useNavigate } from "react-router-dom";
export function SessionValidation({children}: React.PropsWithChildren){
    const navigate = useNavigate()
    const { user } = useSessionValidation()
    if (user){
        return children
    } else {
        navigate(routeAuthenticationSignIn)
    }
}