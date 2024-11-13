import { Action, FormState } from '../types/index'
import { ActionType } from './action-types'
import {Reducer} from 'react';


export const formReducer : Reducer<FormState, Action>= (prevState, action) => {
    if(action.type === ActionType.FORM_IS_VALID){
        return {
            ...prevState,
            formIsValid : action.payload.value
        }
    }

    if(action.type === ActionType.FIRST_NAME_UPDATE){
        return {
            ...prevState,
            firstName: {
                ...prevState.firstName,
                value: action.payload.value,
                isValid: action.payload.isValid,
                updated: true
            }
        }
    }
    if(action.type === ActionType.LAST_NAME_UPDATE ){
        return {
            ...prevState,
            lastName: {
                ...prevState.lastName,
                value: action.payload.value,
                isValid: action.payload.isValid,
                updated: true
            }
        }
    }
    if(action.type === ActionType.EMAIL_UPDATE){
        return {
            ...prevState,
            email : {
                ...prevState.email,
                value: action.payload.value,
                isValid: action.payload.isValid,
                updated: true
            }
        }
    }
    if(action.type === ActionType.PHONE_UPDATE){
        return {
            ...prevState,
            phone : {
                ...prevState.phone,
                value: action.payload.value,
                isValid: action.payload.isValid,
                updated: true
            }
        }
    }
    if(action.type === ActionType.MESSAGE_UPDATE){
        return {
            ...prevState,
            message : {
                ...prevState.message,
                value: action.payload.value,
                isValid: action.payload.isValid,
                updated: true
            }
        }
    }
    if(action.type === ActionType.POMSKY_NAME){
        return {
            ...prevState,
            pomskyName : {
                ...prevState.pomskyName,
                value: action.payload.value,
                isValid: action.payload.isValid,
                updated: true
            }
        }
    }
    if(action.type === ActionType.SUBMISSION){
        return {
            ...prevState,
            submission: {
                ...prevState.submission,
                tried: true,
                successful: action.payload.successful
            }
        }
    }
    return prevState;
}