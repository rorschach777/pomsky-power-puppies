


export const formReducer = (state : any, action : any) => {
    if(action.type === "FORM_IS_VALID"){
        return {
            ...state,
            formIsValid : action.payload.value
        }
    }

    if(action.type === "FIRST_NAME_UPDATE"){
        return {
            ...state,
            firstName: {
                ...state.firstName,
                value: action.payload.value,
                isValid: action.payload.isValid,
                updated: true
            }
        }
    }
    if(action.type === "LAST_NAME_UPDATE"){
        return {
            ...state,
            lastName: {
                ...state.lastName,
                value: action.payload.value,
                isValid: action.payload.isValid,
                updated: true
            }
        }
    }
    if(action.type === "EMAIL_UPDATE"){
        return {
            ...state,
            email : {
                ...state.email,
                value: action.payload.value,
                isValid: action.payload.isValid,
                updated: true
            }
        }
    }
    if(action.type === "PHONE_UPDATE"){
        return {
            ...state,
            phone : {
                ...state.phone,
                value: action.payload.value,
                isValid: action.payload.isValid,
                updated: true
            }
        }
    }
    if(action.type === "MESSAGE_UPDATE"){
        return {
            ...state,
            formIsValid: action.payload.formIsValid,
            message : {
                ...state.message,
                value: action.payload.value,
                isValid: action.payload.isValid,
                updated: true
            }
        }
    }
    if(action.type === "SUBMISSION"){
        return {
            ...state,
            submission: {
                ...state.submission,
                tried: true,
                successful: action.payload.successful
            }
        }
    }

}