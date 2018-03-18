import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'

import cst from '../../constants/mySpotify/cst'
import { renderInputField } from '../../common/reduxForm/renderField'

// const validate = values => {
//     return errors
// }

let SignInOrUpComponent = ({ handleSubmit, invalid, submitting, reset, onClickLogin }) =>
    <div>
        <br /><br />
        <h1 align="center">Please Sign In or Sign Up</h1>
        <br /><br />
        <form onSubmit={handleSubmit(onClickLogin)}>
            <div>
                <h3 align="center"><font color="blue"><b>Sign In</b></font></h3>
                <Field name="nameSignIn" component={renderInputField} placeholder="Name" /><br />
                <Field name="emailSignIn" component={renderInputField} placeholder="Email" /><br />
                <hr />
            </div>
            <div>
                <h3 align="center"><font color="blue"><b>Sign Up</b></font></h3>
                <Field name="nameSignUp" component={renderInputField} placeholder="Name" /><br />
                <Field name="emailSignUp" component={renderInputField} placeholder="Email" /><br />
                <hr />
            </div>
            <br /><br />
            <p align="center"><button type="submit" className="btnSubmit" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btnSubmit" disabled={submitting} onClick={reset}>Clear Values</button>
            </p>
        </form>
    </div>


SignInOrUpComponent.propTypes = {
    onClickLogin: PropTypes.func.isRequired
};

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('mySpotifyForm'));

    SignInOrUpComponent = reduxForm({
    form: 'mySpotifyForm',
    // validate,
    onSubmitSuccess: afterSubmit
})(SignInOrUpComponent)

export default SignInOrUpComponent