import Button from "./Button";
import User from "./User";
function HeaderBottom({ handleSignInClicked, handleSignupClicked }) {
  const userLoggedIn = false;
  return (
    <div className="border-solid border-b-4 border-t-4 pb-6 border-red-100 mt-12 lg:mb-48 mb-32">
      {userLoggedIn === false ? (
        <div className="mt-4 flex flex-col gap-3">
          <div className="flex lg:gap-4 gap-2 items-center justify-center">
            <h2 className="font-semibold lg:text-lg text-sm text-center">
              Sign up now to share your amazing memories with everyone else!
            </h2>
            <Button
              onClick={handleSignupClicked}
              className="font-bold  py-2 lg:text-base text-xs px-8 shrink-0 "
            >
              Sign up
            </Button>
          </div>
          <div className="flex gap-3 text-xs items-center justify-center">
            <h2>Dou you already have an account?</h2>
            <Button onClick={handleSignInClicked} className="px-2 py-1 text-xs">
              Sign in
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-4 px-12">
          <User />
        </div>
      )}
    </div>
  );
}

export default HeaderBottom;
