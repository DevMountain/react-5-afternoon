const initialState = {
   loanType: 'Home Purchase',
   propertyType: 'Single Family Home',
   city: '',
   propToBeUsedOn: '',
   found: false,
   realEstateAgent: "false",
   cost: 0,
   downPayment: 0,
   credit: '',
   history: '',
   addressOne: '',
   addressTwo: '',
   addressThree: '',
   firstName: 'aa',
   lastName: '',
   email: ''
}

const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_REALESTATE_AGENT = "UPDATE_REALESTATE_AGENT";
const UPDATE_COST = "UPDATE_COST";
const UPDATE_DOWNPAYMENT = "UPDATE_DOWNPAYMENT";
const UPDATE_CREDIT = "UPDATE_CREDIT";
const UPDATE_HIST = "UPDATE_HIST";
const UPDATE_ADD_ONE = "UPDATE_ADD_ONE";
const UPDATE_ADD_TWO = "UPDATE_ADD_TWO";
const UPDATE_ADD_THREE = "UPDATE_ADD_THREE";
const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
const UPDATE_EMAIL = "UPDATE_EMAIL"; 

function reducer(state=initialState, action){ 

    switch(action.type){
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, {loanType: action.payload})
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, {propertyType: action.payload})
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload})
        case UPDATE_PROP:
            return Object.assign({}, state, {propToBeUsedOn: action.payload})
        case UPDATE_FOUND:
            return Object.assign({}, state, {found: action.payload})
        case UPDATE_REALESTATE_AGENT:
            return Object.assign({}, state, {realEstateAgent: action.payload})
        case UPDATE_COST:
            return Object.assign({}, state, {cost: action.payload})
        case UPDATE_DOWNPAYMENT:
            return Object.assign({}, state, {downPayment: action.payload})
        case UPDATE_CREDIT:
            return Object.assign({}, state, {credit: action.payload})
        case UPDATE_HIST:
            return Object.assign({}, state, {history: action.payload})
        case UPDATE_ADD_ONE:
            return Object.assign({}, state, {addressOne: action.payload})
        case UPDATE_ADD_TWO:
            return Object.assign({}, state, {addressTwo: action.payload})
        case UPDATE_ADD_THREE:
            return Object.assign({}, state, {addressThree: action.payload})
        case UPDATE_FIRST_NAME:
            return Object.assign({}, state, {firstName: action.payload})
        case UPDATE_LAST_NAME:
            return Object.assign({}, state, {lastName: action.payload})
        case UPDATE_EMAIL:
            return Object.assign({}, state, {email: action.payload})



        default:
            return state
    }

} 

export function updateLoanType(loanType){
    return{
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}
export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updatePropToBeUsedOn(prop){
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}
export function updateFound(found){
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}

export function updateRealEstateAgent(bool){
    return {
        type: UPDATE_REALESTATE_AGENT,
        payload: bool
    }    
}

export function updateCost(num){
    return {
        type: UPDATE_COST,
        payload: num
    }    
}

export function updateDownPayment(num){
    return {
        type: UPDATE_DOWNPAYMENT,
        payload: num
    }    
}

export function updateCredit(num){
    return {
        type: UPDATE_CREDIT,
        payload: num
    }    
}

export function updateHist(hist){
    return {
        type: UPDATE_HIST,
        payload: hist
    }    
}

export function updateAddOne(add){
    return {
        type: UPDATE_ADD_ONE,
        payload: add
    }    
}
export function updateAddTwo(add){
    return {
        type: UPDATE_ADD_TWO,
        payload: add
    }    
}
export function updateAddThree(add){
    return {
        type: UPDATE_ADD_THREE,
        payload: add
    }    
}

export function updateFirstName(first){
    return {
        type: UPDATE_FIRST_NAME,
        payload: first
    }    
}

export function updateLastName(last){
    return {
        type: UPDATE_LAST_NAME,
        payload: last
    }    
}

export function updateEmail(email){
    return {
        type: UPDATE_EMAIL,
        payload: email
    }    
}
export default reducer; 