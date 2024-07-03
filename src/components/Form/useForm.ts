import { type useFormProps } from './types'

export const useForm = (props: useFormProps) => {
    const { onSubmit } = props
    const handleSubmit = (event: any) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        onSubmit(formData)
    };

    return { handleSubmit }
}