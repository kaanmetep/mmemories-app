import Button from "./Button";
function HeaderBottom({ handleSignInClicked, handleSignupClicked }) {
  return (
    <div className="flex gap-4 justify-center mt-4">
      <Button onClick={handleSignupClicked}>Sign up</Button>
      <Button onClick={handleSignInClicked}>Sign in</Button>
    </div>
  );
}

export default HeaderBottom;
