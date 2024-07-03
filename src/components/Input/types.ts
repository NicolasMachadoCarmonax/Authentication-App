import { type Icon, type Size } from '../../types/types'

export type InputProps = {
    placeholder: string;
    icon: Icon;
    name: string;
    type: string;
    size?: Size;
    autoFocus?: boolean;
}