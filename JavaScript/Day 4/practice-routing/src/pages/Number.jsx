import React from 'react'
import { useParams } from 'react-router-dom'

const Number = (props) => {

    const { numId } = useParams();

    return <h3>The number is: { numId }</h3>;
};
export default Number;