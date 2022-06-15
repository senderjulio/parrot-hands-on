import { useEffect, useState } from 'react';
import { getUsers } from '../../api';
import { User } from '../@types';

// import { Container } from './styles';

const useUser = () => {
    
    const [userGet, setUsergGet] = useState<User[]>([] as User[])

    useEffect(()=>{
        let users = async ()=>{
            let usuarios = await getUsers()            
            setUsergGet(usuarios)
        }
        users()
    },[])

    return {
        userGet,
    }
}

export default useUser;