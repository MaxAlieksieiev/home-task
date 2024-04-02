import { ButtonProps } from '@mui/material';

interface Props extends ButtonProps {}

export function Button({ title, ...props }: Props) {
  return <Button {...props}>{title}</Button>;
}
