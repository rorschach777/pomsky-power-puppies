"use client";

import { useReducer, useRef, useEffect, useContext } from "react";
import { formReducer } from "../reducers/form-reducer";
import { ActionType } from "../reducers/action-types"
import {FormState,  FormGroup} from '../types/index';
import { Spinner } from "@nextui-org/react";
import PomskyContext from "../store/pomsky-context";



const ContactForm = () => {

    const pomskyContext = useContext(PomskyContext);

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
        pomskyName: {
            value: 'Any',
            isValid: true,
            updated: true,
        },
        message: {
            value: 'None',
            isValid: true,
            updated: true
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
    // const messageRef = useRef<HTMLTextAreaElement | null>(null);
    const pomskyNameRef = useRef<HTMLSelectElement | null>(null);

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
        const pattern = /^[A-Za-z]{1,12}$/;    
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
        formDispatch({type: ActionType.PHONE_UPDATE, payload: {value : phoneRef.current!.value, isValid: inputIsValid}})
        
    }

    const pomskyNameValidation = () => {
        formDispatch({type: ActionType.POMSKY_NAME, payload: { value: pomskyNameRef.current!.value, isValid: true}})
        console.log(formState)
    }

    // const messageValidation = () => {
    //     const pattern =  /^[a-zA-Z,. ]{1,140} [a-zA-Z,. ]{1,140}$/
    //     const inputIsValid = pattern.test(messageRef.current!.value);
    //     formDispatch({type: ActionType.MESSAGE_UPDATE, payload: {value : messageRef.current!.value, isValid: inputIsValid}})
        
    // }

    const sendEmail = async (event : React.FormEvent , data : object) => {
        formDispatch({type : ActionType.SUBMISSION_ATTEMPT, payload: {tried : true}});
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
    

    const submitHandler = async (event : React.FormEvent) => {
        event.preventDefault();
        const data={
            firstName : formState.firstName.value,
            lastName : formState.lastName.value,
            phone : formState.phone.value,
            email : formState.email.value,
            pomskyName: formState.pomskyName.value,
            message : formState.message.value,
        }
       
        if(formValid()){
            sendEmail(event, data);
        } else {
            firstNameValidation();
            lastNameValidation();
            emailValidation();
            phoneValidation();
        }
    }


    // const selectOptions = props.dropDownOptions;
    const selectOptions = pomskyContext.availablePuppies;

    return (
        <div className="ppp-form">
            <form id="ppp-conversion-form" >
                {(formState.submission.successful === false) && (
                    <>
                        <div className="form-group">
                            <label>First Name:</label>
                            <input 
                            id="ppp-form-element-first-name" 
                            type="text" 
                            placeholder="John" 
                            ref={firstNameRef} 
                            onChange={firstNameValidation} 
                            className={ !formState.firstName.isValid && formState.firstName.updated  ? 'invalid-field' : ''}
                           
                            
                            />
                            {!formState.firstName.isValid && formState.firstName.updated ? <span className="danger">Your name cannot contain empty spaces and less than 12 characters.</span> : null}
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input id="ppp-form-element-last-name" type="text" placeholder="Doe"  ref={lastNameRef}  onChange={lastNameValidation} className={ !formState.lastName.isValid && formState.lastName.updated ? 'invalid-field' : ''}/>
                            {!formState.lastName.isValid && formState.lastName.updated ?   <span className="danger">Your Last Name is too long or contains spaces.</span>  : null}
                        
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input id="ppp-form-element-email" type="email" ref={emailRef}  onBlur={emailValidation}  placeholder="example.email@gmail.com"  className={ !formState.email.isValid && formState.email.updated ? 'invalid-field' : ''}/>
                            {!formState.email.isValid && formState.email.updated ?   <span className="danger">Your email address is in the incorrect format.</span> : null}
                        
                        </div>
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input  id="ppp-form-element-phone" type="phone" ref={phoneRef}  onBlur={phoneValidation} placeholder="999-999-9999" className={ !formState.phone.isValid && formState.phone.updated ? 'invalid-field' : ''}/>
                            {!formState.phone.isValid && formState.phone.updated ?  <span className="danger">Your phone number is in the incorrect format. Please use the following format: 999-999-9999</span> : null}
                            
                        </div>
                        {/* <div className="form-group u-hide">
                            <label>Message:</label>
                            <textarea  ref={messageRef}  onChange={messageValidation} placeholder="I wanted to inquire to see the status of..."  className={ !formState.message.isValid && formState.message.updated ? 'invalid-field' : ''}/>
                            {!formState.message.isValid && formState.message.updated ? <span className="danger">Your message was in the incorrect format.</span>: null}
                        </div> */}
                        <div className="form-group">
                            <label>Preferred Pomsky: </label>
                            <select id="ppp-form-element-pomsky-name" ref={pomskyNameRef} onChange={pomskyNameValidation}>
                                {selectOptions != undefined && selectOptions.map((c,i)=>{ return (
                                    <option key={`select-option-${i}`} value={c.pomskyName}>{c.pomskyName}</option>
                                )})}
                            </select>
                        </div>
                        <div>
                            <button id="conversion-button"  onClick={(e)=>submitHandler(e)}>
                                { formState.submission.tried && !formState.submission.successful ?  <Spinner  color="default" labelColor="foreground"/> : "Send"}
                            </button>
                        </div>
                    </>
                )}
                
                { formState.submission.tried && (
                    <div className="ppp-form-submission-feedback">
                       {  formState.submission.successful && (
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
