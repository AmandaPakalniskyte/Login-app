import Background from "./components/background";
import LoginContainer from "./components/login-container";
import Form from "./components/login-form";

function App() {
  return (
    <div>
      <Background>
        <LoginContainer>
          <Form></Form>
        </LoginContainer>
      </Background>
    </div>
  );
}

export default App;
