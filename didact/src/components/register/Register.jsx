import React from "./node_modules/react"
import {Form, Field, withFormik} from "./node_modules/formik";
import * as Yup from './node_modules/yup';
import { registerAction } from '../../store/actions';
import { useDispatch } from './node_modules/react-redux';

import { makeStyles, withStyles } from './node_modules/@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    header: {
        width: '50%',
        margin: '0 auto',
        '& *': {
            textAlign: 'left'
        } //testtest
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        border: 'solid #9B9B9B 1.2px',
        borderRadius: '1%',
        margin: '0 auto',
        padding: '2%'
    },
    namePlate: {
        display: 'flex',
        justifyContent: 'space-between',
        width: "70%",
        height:'2.7em',
        "& *": {
            border: 'solid #9B9B9B 1.2px',
            backgroundColor: '#F7F7F7'
        }
    },
    passPlate: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: "70%",
        height: '15em',
        "& *": {
            border: 'solid #9B9B9B 1.2px',
            backgroundColor: '#F7F7F7',
            height:'18%'
        }
    },
    signUpButton: {
        width: '70%',
        height:'2.7em',
        textAlign: 'center',
        backgroundColor: '#5A5A5A',
        color: 'white',
        border: 'transparent',
        borderRadius: '5%'
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        height: '2.7em',
        margin: '0 auto',
        paddingTop: '2%',
        "& *":{
            height:'100%',
            backgroundColor: '#5A5A5A',
            color: 'white',
            border: 'transparent',
            borderRadius: '5%',
            width: '33%',
            textDecoration: 'none'
        }
    }
  }));
  
const RegisterForm = (props) => {
    const classes = useStyles();
    const {errors, touched} = props;
    if(localStorage.getItem('token'))
    {
        props.history.push('/')
    }
    return (  
        <>
            <div className={classes.header}>
                <h1>Signup</h1>
                <h5>This might a good place for a subtitle</h5>
            </div>
            <div className={classes.formWrapper}>
                <Form>
                    <div className={classes.container}>
                        <div className={classes.namePlate}>
                            <Field label="test" type= "text" name = "first_name" placeholder = "First Name"></Field>
                            {/* {touched.first_name && errors.first_name && <p>{errors.first_name}</p>} */}
                            <Field type= "text" name = "last_name" placeholder = "Last Name"></Field>
                            {/* {touched.last_name && errors.last_name && <p>{errors.last_name}</p>} */}
                        </div>
                        <div className={classes.passPlate}>
                            <Field type= "email" name = "email" placeholder = "Email"></Field>
                            {/* {touched.email && errors.email && <p>{errors.email}</p>} */}
                            <Field type= "password" name = "password" placeholder = "Password"></Field>
                            {/* {touched.password && errors.password && <p>{errors.password}</p>} */}
                            <Field type= "password" name = "confirm-password" placeholder = "Confirm Password"></Field>
                            {/* {touched.password && errors.password && <p>{errors.password}</p>} */}
                        </div>
                        <button className={classes.signUpButton} type="submit">Signup Now</button>
                    </div>
                </Form>
            </div>
        </>
    )
}

const FormikRegisterForm = withFormik({
    mapPropsToValues({email, password, first_name, last_name}){
        return {
            email: email || "",
            password: password || "",
            first_name: first_name || "",
            last_name: last_name || ""
        }
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().required("Email is required").email("Must be an Email"),
        password: Yup.string().required("Password is required" ),
        first_name: Yup.string().required("First Name is required" ),
        last_name: Yup.string().required("Last Name is required" ),
    }),
    handleSubmit(values, props){
        props.props.dispatch(registerAction(props.props.history, values))
    }

})(RegisterForm);

const FormikRegisterWrapper = ({history}) =>
{
    const dispatch = useDispatch();
    const classes = useStyles();
   
    console.log(dispatch)
    return (
        <>
            <FormikRegisterForm dispatch={dispatch} history={history}/>
            <div className={classes.footer}>
            <a href="http://didactlms-staging.herokuapp.com/api/auth/facebook">Sign Up With Facebook</a>
            <a href="http://didactlms-staging.herokuapp.com/api/auth/google">Sign Up With Google</a>
            </div>
        </>
    )
}

export default FormikRegisterWrapper; 