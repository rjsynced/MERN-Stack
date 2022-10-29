import React from 'react'
import { useParams } from 'react-router-dom'


const HelloDetails = (props) => {
    const { anyWord, anyColor, anyBackgroundColor } = useParams();
    const styling = {
        color: anyColor,
        backgroundColor: anyBackgroundColor
    }

    return (
    <h3 style = {styling}>The word is: { anyWord }</h3>
    );
};
export default HelloDetails;