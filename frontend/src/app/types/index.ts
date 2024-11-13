import { ActionType } from "../reducers/action-types"

export type Action =
  | { type: ActionType.FORM_IS_VALID; payload: { value : boolean} }
  | { type: ActionType.FIRST_NAME_UPDATE; payload: { value : string, isValid : boolean} }
  | { type: ActionType.LAST_NAME_UPDATE; payload: { value : string, isValid : boolean} }
  | { type: ActionType.PHONE_UPDATE; payload: { value : string, isValid : boolean} }
  | { type: ActionType.EMAIL_UPDATE; payload: { value : string, isValid : boolean} }
  | { type: ActionType.MESSAGE_UPDATE; payload: { value : string, isValid : boolean} }
  | { type: ActionType.POMSKY_NAME; payload: { value : string, isValid : boolean} }
  | { type: ActionType.SUBMISSION; payload: { successful : boolean} }


  export type FormGroup = {
    value: string,
    isValid : boolean,
    updated : boolean
  }

  type Submission = {
    tried: boolean,
    successful: boolean
  }

  
  export type  FormState = {
    formIsValid : boolean,
    submission : Submission,
    firstName : FormGroup,
    lastName : FormGroup,
    email : FormGroup,
    phone: FormGroup,
    message : FormGroup,
    pomskyName: FormGroup
}

export type IssueAction = {
    type : Action
    payload: FormGroup | Submission  | undefined
}

export type InputParams = { value: string; label: string; }

export interface ILitter {
    litterName : string
    puppies : []
}

export interface IPuppy {
    description: string,
    pomskyName: string,
    image: {
        asset : {
            url : string
        }
    }
}
