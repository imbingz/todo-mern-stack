import { useContext, useReducer, createContext } from 'react';

//setup  global context
export const GlobalContext = createContext();

// set  up  global provider and reducer
const initState = {
	todos: []
};

const reducer = (state, action) => {
	console.log('current state in reducer function inside glbalContext: ', state, action);
	switch (action.type) {
		case 'setTodos':
			return {
				...state,
				todos: action.payload
			};
		default:
			return state;
	}
};

const GlobalProvider = props => {
	const [ state, dispatch ] = useReducer(reducer, initState);
	return <GlobalContext.Provider value={[ state, dispatch ]} {...props} />;
};

//or we can explicitly use props.children
// const GlobalProvider = props => {
// 	return <GlobalContext.Provider value={{ a: 'hello', b: 'world' }}>{props.children}</GlobalContext.Provider>;
// };

//export GlobalProvider
export default GlobalProvider;

export const useGlobalContext = () => {
	console.log(useContext(GlobalContext));
	return useContext(GlobalContext);
};
