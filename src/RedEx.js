// -------------------------------------------------------------------
// ------------------------- INITIAL STATE ---------------------------
// -------------------------------------------------------------------
// This is the initial state of our Redux flow
// It can be defined in the reducer definition too
// Having it separately makes it easier to read
const initialState = {
    text: "Initial state",
    actual: "Initial",
    previous: null,
    number: 0
}

// -------------------------------------------------------------------
// ----------------------------- ACTIONS -----------------------------
// -------------------------------------------------------------------
// This function is used to toggle between the previous state
// and the actual state
export function toggleFunc(){
    return {type: 'TOGGLE'}
}

// This function is used to set the state to a fixed value defined
// in 'input'.
// Here we pass the value through the returned object
export function setFunc(input){
    return {type: 'SET', input: input}
}

// This function is used to go to the Inital state of
// our redux flow
export function resetFunc(){
    return {type: 'RESET'}
}

// This function is used to increment the value of 'number'
// in our redux flow
export function incFunc(){
    return {type: 'INCREMENT'}
}

// This function is used to decrement the value of "number"
// in our redux flow
export function decFunc(){
    return {type: 'DECREMENT'}
}

// -------------------------------------------------------------------
// ----------------------------- REDUCER -----------------------------
// -------------------------------------------------------------------
// This is our reducer, used to change the state of our
// redux store depending on our current state and the
// action used.
// We must return a new state object, not modify the old one,
// that is why here is the spread operator (...state) used
export function exampleReducer(state = initialState, action) {
    switch(action.type) {
        // --- Action used was TOGGLE
        // We change the text displayed and swap both
        // previous and actual state
        // First we check if the previous 'state' is not null
        case 'TOGGLE':
            if(state.previous != null){
                return {
                    ...state,
                    text:
                        'Previous: ' + state.actual + ' - ' +
                        'Current: ' + state.previous,
                    actual: state.previous,
                    previous: state.actual
                }
            } else {
                return {
                    ...state
                }
            }
        // --- Action used was SET
        // We change the text displayed and set the
        // actual state to the value 'input' sent from
        // the action
        case 'SET':
            return {
                ...state,
                text:
                    'Previous: ' + state.actual + ' - ' +
                    'Current: ' + action.input,
                actual: action.input,
                previous: state.actual
            }
        // --- Action used was RESET
        // We change the whole state to the initialState
        case 'RESET':
            return {
                ...initialState
            }
        // --- Action used was INCREMENT
        // We update increase the value 'number' from our state
        case 'INCREMENT':
            return {
                ...state,
                number: ++state.number
            }
        // --- Action used was DECREMENT
        // We update increase the value 'number' from our state
        case 'DECREMENT':
            return {
                ...state,
                number: --state.number
            }
        default:
            return {
                ...state
            }
    }
}

export default exampleReducer;