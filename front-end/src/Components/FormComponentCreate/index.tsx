import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import GroupInput from '../GroupInput';
import * as Yup from 'yup'
import PAlerta from '../PAlerta';
import ButtonEnter from '../ButtonEnter';
import { createUser } from '../../api';
import { useNavigate } from 'react-router-dom';

const FormComponentCreate = () => {

  const navigate = useNavigate();
  
  const validationSchema = Yup.object({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas não conferem').required('A confirmação de senha é obrigatória'),
    apartment: Yup.string().required('O apartamento é obrigatório'),
    link: Yup.string()
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      apartment: '',
      link:''
    },
    validationSchema,
    onSubmit: async values => {
      const a = await createUser({
        name: values.name,
        password: values.password,
        email: values.email,
        apartment: parseInt(values.apartment),
      })

      //@ts-ignore
      if (a.status !== 201) {
      //@ts-ignore
        alert(`Erro ao criar usuário: ${a.response.data}`)
      }else{
        alert('Usuário criado com sucesso')
        navigate('/')
      }
      
      
      
    }
  })


  return (
    <Form onSubmit={formik.handleSubmit} >
      <GroupInput type='text' placeholder='nome' id = 'name' value = {formik.values.name}  onChange = {formik.handleChange} isInvalid={formik.touched.name && !!formik.errors.name} isValid={formik.touched.name && !formik.errors.name}/>
      {formik.errors.name && formik.touched.name 
          && ( 
            <PAlerta>
              {formik.errors.name}
            </PAlerta> 
      )}

      <GroupInput type='email' placeholder='email' id = 'email' value = {formik.values.email}  onChange = {formik.handleChange} isInvalid={formik.touched.email && !!formik.errors.email} isValid={formik.touched.email && !formik.errors.email}/>
      {formik.errors.email && formik.touched.email 
          && ( 
            <PAlerta>
              {formik.errors.email}
            </PAlerta> 
      )}

      <GroupInput type='password' placeholder='senha' id = 'password' value = {formik.values.password}  onChange = {formik.handleChange} isInvalid={formik.touched.password && !!formik.errors.password} isValid={formik.touched.password && !formik.errors.password}/>
      {formik.errors.password && formik.touched.password 
          && ( 
            <PAlerta>
              {formik.errors.password}
            </PAlerta> 
      )}

      <GroupInput type='password' placeholder='confirmar senha' id = 'confirmPassword' value = {formik.values.confirmPassword}  onChange = {formik.handleChange} isInvalid={formik.touched.confirmPassword && !!formik.errors.confirmPassword} isValid={formik.touched.confirmPassword && !formik.errors.confirmPassword}/>
      {formik.errors.confirmPassword && formik.touched.confirmPassword 
          && ( 
            <PAlerta>
              {formik.errors.confirmPassword}
            </PAlerta> 
      )}

      <GroupInput type='text' placeholder='unidade/apartamento' id = 'apartment' value = {formik.values.apartment}  onChange = {formik.handleChange} isInvalid={formik.touched.apartment && !!formik.errors.apartment} isValid={formik.touched.apartment && !formik.errors.apartment}/>
      {formik.errors.apartment && formik.touched.apartment 
          && ( 
            <PAlerta>
              {formik.errors.apartment}
            </PAlerta> 
      )}

      <GroupInput type='text' placeholder='link da foto' id = 'link' value = {formik.values.link}  onChange = {formik.handleChange} />

      <ButtonEnter typeButton='submit' text='CADASTRAR'/>
      
    </Form>
  )
}

export default FormComponentCreate; 