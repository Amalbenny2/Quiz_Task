//import React, { useState } from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import SignUpForm from './components/SignUpForm';
//import SignInForm from './components/SignInForm';
//import TestPage from './components/TestPage';
//import ResultPage from './components/ResultPage';
//
//const App = () => {
//  const [user, setUser] = useState(null);
//
//  const handleSignUp = (userData) => {
//
//    console.log('SignUp:', userData);
//  };
//
//  const handleSignIn = (userData) => {
//    // Implement the signin logic and set the user state
//    console.log('SignIn:', userData);
//  };
//
//  const handleSubmitAnswers = (answers) => {
//    // Implement the logic to submit answers to the backend
//    console.log('Submitted Answers:', answers);
//  };
//
//  return (
//    <Router>
//      <div>
//        <Switch>
//          <Route path="/signup">
//            <SignUpForm onSignUp={handleSignUp} />
//          </Route>
//          <Route path="/signin">
//            <SignInForm onSignIn={handleSignIn} />
//          </Route>
//          <Route path="/test">
////            <TestPage questions={/* pass your questions here */} onSubmitAnswers={handleSubmitAnswers} />
//          </Route>
//          <Route path="/result">
////            <ResultPage score={/* pass the score here */} />
//          </Route>
//        </Switch>
//      </div>
//    </Router>
//  );
//};
//
//export default App;
