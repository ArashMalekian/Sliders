import { Provider } from "react-redux";
import { Main } from "./components/main/Main";
import {store} from './redux/store'
import {ErrorBoundary} from 'react-error-boundary'

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}


function App() {
  return (
    <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
  >
    <Provider store={store} >
    <div className="App">
      <Main />
    </div>
    </Provider>
    </ErrorBoundary>
  );
}

export default App;
