
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useErrorBoundary } from 'react-error-boundary';
 
 import Home from './Pages/Home/Home';
 import About from './Pages/About/About';
 import Projects from './Pages/Projects/Projects';
 import Contact from './Pages/Contact/Contact';
 import './index.css';



function MainApp() {
  const { ErrorBoundary } = useErrorBoundary();

  return (
    <Router>
      <ErrorBoundary FallbackComponent=
     ''>
        <Switch>
         <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/projects" component={Projects} />
           <Route path="/contact" component={Contact} />
        </Switch>
       </ErrorBoundary>
</Router>
   ); }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp />);
