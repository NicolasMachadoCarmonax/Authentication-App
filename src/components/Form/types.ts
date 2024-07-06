export type FormSubmitFunction = (onSubmit: FormData) => void

export type FormProps = {
    onSubmit: FormSubmitFunction;
    inputs: React.ReactNode[];
    submitButtonText: string;
    buttonSubLink?: React.ReactNode
}
export type useFormProps = {
    onSubmit: FormSubmitFunction
}
