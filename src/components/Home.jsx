import { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import SignUpPopup from "./SignUpPopup";
import SignInPopup from "./SignInPopup";
import Content from "./Content";
function Home() {
  const [isSignupClicked, setIsSignupClicked] = useState(false);
  const [isSignInClicked, setIsSignInClicked] = useState(false);
  const handleSignupClicked = () => {
    setIsSignupClicked((curr) => !curr);
  };
  const handleSignInClicked = () => {
    setIsSignInClicked((curr) => !curr);
  };
  return (
    <>
      <div className="border-solid border-b-2 pb-6 border-red-100 mb-8">
        <Header />
        <div className="flex gap-4 justify-center mt-4">
          <Button onClick={handleSignupClicked}>Sign up</Button>
          <Button onClick={handleSignInClicked}>Sign in</Button>
        </div>
        {isSignupClicked && (
          <SignUpPopup onSignupClicked={handleSignupClicked} />
        )}
        {isSignInClicked && (
          <SignInPopup onSignInClicked={handleSignInClicked} />
        )}
      </div>
      <Content />
    </>
  );
}

export default Home;
