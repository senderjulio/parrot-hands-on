// import { Container } from 'react-bootstrap';
import FormComponent from '../../Components/FormComponent';
import GroupInput from '../../Components/GroupInput';


// import { Container } from './styles';

const Login = () => {

  return (
    <FormComponent titulo='Login'>

      <FormComponent titulo='LOGIN'>
        <GroupInput key={1} type='email' placeholder='escreva seu email' />
        <GroupInput key={2} type='password' placeholder='escreva sua senha' />
   </FormComponent>

      )
   


      export default Login