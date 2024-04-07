import { useState } from "react";
import Header from "./Header";
import SignUpPopup from "./SignUpPopup";
import SignInPopup from "./SignInPopup";
import Content from "./Content";
import HeaderBottom from "./HeaderBottom";
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
      <div>
        <Header />
        <HeaderBottom
          handleSignInClicked={handleSignInClicked}
          handleSignupClicked={handleSignupClicked}
        />
        {isSignupClicked && (
          <SignUpPopup
            onSignupClicked={handleSignupClicked}
            isSignupClicked={isSignupClicked}
          />
        )}
        {isSignInClicked && (
          <SignInPopup
            onSignInClicked={handleSignInClicked}
            isSignInClicked={isSignInClicked}
          />
        )}
      </div>
      <Content />
    </>
  );
}

export default Home;
