import './App.css';
import PersonCard from './components/PersonCard.js'

function App() {
	return (
		<PersonCard firstName='Jane' lastName='Doe' age={45} hairColor='Black' /> 
	)
}

export default App;
