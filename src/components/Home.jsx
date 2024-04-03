import { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import SignUpPopup from "./SignUpPopup";
import SignInPopup from "./SignInPopup";
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
    <div>
      <Header />
      <div className="flex gap-4 justify-center mt-4">
        <Button onClick={handleSignupClicked}>Sign up</Button>
        <Button onClick={handleSignInClicked}>Sign in</Button>
      </div>
      {isSignupClicked && <SignUpPopup onSignupClicked={handleSignupClicked} />}
      {isSignInClicked && <SignInPopup onSignInClicked={handleSignInClicked} />}
    </div>
  );
}

export default Home;
