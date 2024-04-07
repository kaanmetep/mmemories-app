import { useEffect } from "react";
function SignInPopup({ onSignInClicked, isSignInClicked }) {
  const handleOutsideClick = (e) => {
    if (isSignInClicked && !e.target.closest(".popup")) {
      onSignInClicked((curr) => !curr);
    }
  };
  useEffect(
    function () {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    },
    [handleOutsideClick]
  );
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center ">
      <div className="bg-red-100 w-[500px] h-[250px] p-8 rounded-md shadow-lg bg-opacity-50 relative popup">
        <button
          className="absolute right-[-6px] top-[-6px] text-xs bg-red-100 w-5 h-5 rounded-full hover:bg-red-200 transition-all delay-50"
          onClick={onSignInClicked}
        >
          X
        </button>
        <h2 className="mb-6 text-3xl">Sign In</h2>
        <form className="flex flex-col gap-3 font-monospace">
          <div className="grid grid-cols-[80px_200px]">
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              className="rounded-md text-sm pl-2 placeholder:text-xs"
            />
          </div>
          <div className="grid grid-cols-[80px_200px]">
            <label htmlFor="email">Password:</label>
            <input
              type="password"
              className="rounded-md text-sm pl-2 placeholder:text-xs"
            />
          </div>
          <button className="bg-red-100 mt-4 p-1 text-center hover:bg-red-200 transition-all delay-50">
            Done
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInPopup;
