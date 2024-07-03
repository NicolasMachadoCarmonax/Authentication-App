import { confirmSignIn } from "../../../api/auth"

export const useConfirmSignIn = () => {
    async function onConfirmSignIn(event: FormData){
        const challengeResponse = event.get("code") as string
        await confirmSignIn({challengeResponse})
    }

    return { onConfirmSignIn }
}