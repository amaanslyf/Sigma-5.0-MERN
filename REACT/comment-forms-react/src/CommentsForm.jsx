//import { useState } from 'react';
import {useFormik} from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    }
    if (!values.remarks) {
        errors.remarks = 'Required';
    } 
    return errors;
}

export default function CommentsForm({addNewComment})  {
    // let [formData, setFormData] = useState({
    //     username: '',
    //     remarks: '',
    //     rating: 5
    // });


    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: 5
        },
        validate,
        onSubmit: (values) => {
            console.log('Form submitted with data:', values);
            addNewComment(values); // Call the function to add the new comment
            // Reset form data after submission
            formik.resetForm();
        },
    });

       
    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value };
    //     });
    // };

    // let handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('Form submitted with data:', formData);
    //     addNewComment(formData); // Call the function to add the new comment
    //     // Reset form data after submission
    //     setFormData({
    //         username: '',
    //         remarks: '',
    //         rating: 5
    //     });
    // }
    return (
        <div className="CommentsForm">
            <h4>CommentsForm</h4>
            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="username">Username:</label><br />
                <input type="text" placeholder="username" onChange={formik.handleChange} value={formik.values.username} name='username' id='username' />
                {formik.errors.username ? <div style={{color: 'red'}}>{formik.errors.username}</div> : null}<br />

                <label htmlFor="remarks">Remarks:</label><br />
                <textarea placeholder="remarks" onChange={formik.handleChange} value={formik.values.remarks} name='remarks' id='remarks' /><br />
                {formik.errors.remarks ? <div style={{color: 'red'}}>{formik.errors.remarks}</div> : null}<br />

                <label htmlFor="rating">Rating:</label><br />
                <input type="number" placeholder="rating" onChange={formik.handleChange} min={1} max={5} value={formik.values.rating} name='rating' id='rating' /><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}