import FormComponent from '../../Components/FormComponent';
import GroupInput from '../../Components/GroupInput';

// import { Container } from './styles';

const Cadastro = () => {

  return (
    <FormComponent titulo='CADASTRO' display = 'none'>
      <GroupInput type='text' placeholder='nome'/>
      <GroupInput type='email' placeholder='email'/>
      <GroupInput type='password' placeholder='senha'/>
      <GroupInput type='password' placeholder='confirmar senha'/>
      <GroupInput type='text' placeholder='unidade/apartamento'/>
      <GroupInput type='text' placeholder='link da foto'/>
    </FormComponent>
  )
}

export default Cadastro;