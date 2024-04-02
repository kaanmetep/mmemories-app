import { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import SignUpPopup from "./SignUpPopup";
function Home() {
  const [isSignupClicked, setIsSignupClicked] = useState(false);
  const handleSignupClicked = () => {
    setIsSignupClicked((curr) => !curr);
  };
  return (
    <div>
      <Header />
      <div className="flex gap-4 justify-center mt-4">
        <Button onSignupClicked={handleSignupClicked}>Sign up</Button>
        <Button>Sign in</Button>
      </div>
      {isSignupClicked && <SignUpPopup onSignupClicked={handleSignupClicked} />}
    </div>
  );
}

export default Home;
