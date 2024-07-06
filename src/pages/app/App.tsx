import React from "react";

import { SessionValidation } from "../../hocs/sessionValidation/SessionValidation";
import { Button } from "../../components/Button/Button";
import { useApp } from "./useApp";
export function App(){
    const { signOutUser } = useApp()
    return <SessionValidation>
        <h1>App</h1>
        <Button onClick={signOutUser}>Logout</Button>
    </SessionValidation>
}