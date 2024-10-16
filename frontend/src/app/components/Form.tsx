"use client";
import "./Form.css"
import { useReducer, useRef, useEffect } from "react";
import { formReducer } from "../reducers/form-reducer";
import { ActionType } from "../reducers/action-types"
import {FormState,  FormGroup} from '../types/index';

const ContactForm = ( ) => {


    const initialState : FormState= {
        formIsValid: false,
        submission: {
            tried: false,
            successful: false
        },
        firstName: {
            value: '', 
            isValid: false,
            updated: false
        },
        lastName: {
            value: '',
            isValid: false, 
            updated: false
        },
        email: {
            value: '',
            isValid: false,
            updated: false
        },
        phone: {
            value: '',
            isValid: false,
            updated: false
        },
        message: {
            value: '',
            isValid: false,
            updated: false
        }
    }

    const [formState, formDispatch] = useReducer(formReducer, initialState);

    useEffect(()=>{
        const formIsValid = formValid();
        formDispatch({type: ActionType.FORM_IS_VALID, payload: {value: formIsValid}});
        
    },[formState.firstName, formState.lastName, formState.email, formState.phone, formState.message]);

    useEffect(()=>{

        
    },[formState.submission.tried]);

    const firstNameRef = useRef<HTMLInputElement | null>(null);
    const lastNameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const phoneRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<HTMLTextAreaElement | null>(null);

    const formValid = () => {
        let output = true;
        const copyOfState = {...formState};
        let key : keyof typeof copyOfState;
        for (key in copyOfState) {
            if(key !== "formIsValid"){
                const input = copyOfState[key] as FormGroup;
                if(input.isValid === false){
                    output = false;
                }
            } 
        }
        return output;
    }

    const firstNameValidation = () => {
        const pattern = /^[A-Za-z]{1,9}$/;    
        const inputIsValid = pattern.test(firstNameRef.current!.value);
        formDispatch({type: ActionType.FIRST_NAME_UPDATE, payload: {value : firstNameRef.current!.value, isValid: inputIsValid}})
    
    }

    const lastNameValidation = () => {
        const pattern = /^[A-Za-z]{1,12}$/;    
        const inputIsValid = pattern.test(lastNameRef.current!.value);
        formDispatch({type: ActionType.LAST_NAME_UPDATE, payload: {value : lastNameRef.current!.value, isValid: inputIsValid}})
        
    }

    const emailValidation = () => {
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;    
        const inputIsValid = pattern.test(emailRef.current!.value);
        formDispatch({type:  ActionType.EMAIL_UPDATE , payload: {value : emailRef.current!.value, isValid: inputIsValid}})
        
    }

    const phoneValidation = () => {
        const pattern = /^[1-9]\d{2}-\d{3}-\d{4}/;    
        const inputIsValid = pattern.test(phoneRef.current!.value);
        formDispatch({type: ActionType.EMAIL_UPDATE, payload: {value : phoneRef.current!.value, isValid: inputIsValid}})
        
    }

    const messageValidation = () => {
        const pattern =  /^[a-zA-Z ]{5,140} [a-zA-Z ]{5,140}$/
        const inputIsValid = pattern.test(messageRef.current!.value);
        formDispatch({type: ActionType.MESSAGE_UPDATE, payload: {value : messageRef.current!.value, isValid: inputIsValid}})
        
    }

    const sendEmail = async (event : React.FormEvent , data : object) => {
        const submssionResponse = { successful : false}
        try {
            event.preventDefault();
    
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
            const response = await fetch('/api/send', options );

    
            if (response.ok) {
                // Handle successful submission
                submssionResponse.successful = true;
    
            } else {
                console.error('Form submission failed');
            }

        } catch (err){
            console.log(err, err);
        } finally {
            formDispatch({type: ActionType.SUBMISSION, payload: submssionResponse})
        }
    }
    

    const submitHandler = (event : React.FormEvent) => {
        const data={
            firstName : formState.firstName.value,
            lastName : formState.lastName.value,
            phone : formState.phone.value,
            email : formState.email.value,
            message : formState.message.value,
        }
        sendEmail(event, data)
    }



    return (
        <div className="ppp-form">
            <form>
                <div className="form-group">
         
                    <label>First Name:</label>
                    <input type="text" placeholder="John" ref={firstNameRef} onChange={firstNameValidation} className={ !formState.firstName.isValid && formState.firstName.updated  ? 'invalid-field' : ''}/>
                    {!formState.firstName.isValid && formState.firstName.updated ? <span className="danger">Your First Name is too long or contains spaces.</span> : null}
              
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" placeholder="Doe"  ref={lastNameRef}  onChange={lastNameValidation} className={ !formState.lastName.isValid && formState.lastName.updated ? 'invalid-field' : ''}/>
                    {!formState.lastName.isValid && formState.lastName.updated ?   <span className="danger">Your Last Name is too long or contains spaces.</span>  : null}
                 
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" ref={emailRef}  onBlur={emailValidation}  placeholder="example.email@gmail.com"  className={ !formState.email.isValid && formState.email.updated ? 'invalid-field' : ''}/>
                    {!formState.email.isValid && formState.email.updated ?   <span className="danger">Your email address is in the incorrect format.</span> : null}
                  
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input  type="phone" ref={phoneRef}  onBlur={phoneValidation} placeholder="999-999-9999" className={ !formState.phone.isValid && formState.phone.updated ? 'invalid-field' : ''}/>
                    {!formState.phone.isValid && formState.phone.updated ?  <span className="danger">Your phone number is in the incorrect format. Please use the following format: 999-999-9999</span> : null}
                   
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea  ref={messageRef}  onBlur={messageValidation} placeholder="I wanted to inquire to see the status of..."  className={ !formState.message.isValid && formState.message.updated ? 'invalid-field' : ''}/>
                    {!formState.message.isValid && formState.message.updated ? <span className="danger">Your message was in the incorrect format.</span>: null}
                </div>
                <div>
                    <button disabled={!formState.formIsValid} onClick={(e)=>submitHandler(e)}>Send</button>
                </div>
                { formState.submission.tried && (
                    <div className="ppp-form-submission-feedback">
                       { formState.submission.successful && (
                            <div className="success-message">
                                Thank you! Your message was successfully sent. We will get back to you shortly. 
                            </div>
                       )} 
                        { formState.submission.successful === false && (
                            <div className="failure-message">
                                Sorry. There was a problem with your submission. Please try again later. 
                            </div>
                        )}
                   </div>
                )}
        
            </form>
        </div>
    );
}

export default ContactForm;
