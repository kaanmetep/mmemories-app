function SignUpPopup({ onSignupClicked }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center
    "
    >
      <div className="bg-red-100 w-[500px] h-[400px] p-8 rounded-md shadow-lg bg-opacity-20 relative">
        <button
          className="absolute right-[-6px] top-[-6px] text-xs bg-red-100 w-5 h-5 rounded-full hover:bg-red-200 transition-all delay-50"
          onClick={onSignupClicked}
        >
          X
        </button>
        <h2 className="mb-6 text-3xl">Sign Up</h2>
        <form className="flex flex-col gap-3 font-monospace">
          <div className="grid grid-cols-[155px_1fr]">
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              className="rounded-md text-sm pl-3 placeholder:text-xs"
              placeholder="Enter your first name."
            />
          </div>
          <div className="grid grid-cols-[155px_1fr]">
            <label htmlFor="firstname">Last Name:</label>
            <input
              type="text"
              className="rounded-md text-sm pl-3 placeholder:text-xs"
              placeholder="Enter your last name."
            />
          </div>
          <div className="grid grid-cols-[155px_1fr]">
            <label htmlFor="firstname">Email:</label>
            <input
              type="text"
              className="rounded-md text-sm pl-3 placeholder:text-xs"
              placeholder="Enter your email address."
            />
          </div>
          <div className="grid grid-cols-[155px_1fr]">
            <label htmlFor="firstname">Password:</label>
            <input
              type="password"
              className="rounded-md text-sm pl-3 placeholder:text-xs"
              placeholder="Enter your password."
            />
          </div>
          <div className="grid grid-cols-[155px_1fr]">
            <label htmlFor="firstname" className="text-sm">
              Re-enter Password:
            </label>
            <input
              type="password"
              className="rounded-md text-sm pl-3 placeholder:text-xs"
              placeholder="Re-enter your password."
            />
          </div>
          <div className="grid grid-cols-[155px_1fr]">
            <label htmlFor="firstname">Date of Birth:</label>
            <input type="date" className="rounded-md text-sm pl-3 " />
          </div>
          <button className="bg-red-100 mt-4 p-1 text-center hover:bg-red-200 transition-all delay-50">
            Done
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPopup;
