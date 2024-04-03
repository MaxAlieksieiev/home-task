import * as yup from 'yup';

export interface ILoginForm {
  username: string;
  email: string;
}

export const initialValues: ILoginForm = {
  email: '',
  username: '',
};

export const validationSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email').required('This field is required'),
  username: yup.string().required('This field is required'),
});
