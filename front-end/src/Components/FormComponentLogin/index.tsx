import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import GroupInput from '../GroupInput';
import * as Yup from 'yup'
import PAlerta from '../PAlerta';
import ButtonEnter from '../ButtonEnter';
import { postSigin } from '../../api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin, setUsersEdit } from '../store/users';

const FormComponentLogin = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: async values => {     
      const {token, user} = await postSigin(values)
      if (user !== undefined && token !== undefined) {
        dispatch(setLogin({isloged:true}))
        dispatch(setUsersEdit({users:user}))
        navigate(`/feed/?${user.id}`)
      }
      else{
        alert('Usuário e senha incorretos')        
      }      
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
    <GroupInput value={formik.values.email} onChange = {formik.handleChange} id = 'email' type='email' placeholder='escreva seu email'isInvalid={formik.touched.email && !!formik.errors.email} isValid={formik.touched.email && !formik.errors.email}/>

    {formik.errors.email && formik.touched.email 
      && ( 
        <PAlerta>
          {formik.errors.email}
        </PAlerta> 
    )}

    <GroupInput value={formik.values.password} onChange = {formik.handleChange} id = 'password' type='password' placeholder='escreva sua senha' isInvalid={formik.touched.password && !!formik.errors.password} isValid={formik.touched.password && !formik.errors.password}/>

    {formik.errors.password && formik.touched.password 
      && ( 
        <PAlerta>
          {formik.errors.password}
        </PAlerta> 
    )}

    <ButtonEnter text='Entrar' typeButton='submit'/>
  </Form>
      
  )
}

export default FormComponentLogin; 