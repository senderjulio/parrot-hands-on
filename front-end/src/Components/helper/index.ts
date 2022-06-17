import React from 'react';

// import { Container } from './styles';

const helper = () => {

    const convertData = (data:Date) =>{
        const date = new Date(data);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

  return {convertData} 
}

export default helper;