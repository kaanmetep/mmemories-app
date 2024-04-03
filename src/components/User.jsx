function User() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold">Welcome $NAME$!</h2>
      </div>
      <div className="flex flex-col gap-2">
        <p>You have shared $NUMBER$ memories by now!</p>
        <p>You have $NUMBER$ likes in total!</p>
        <button className="bg-red-50 rounded-md py-1 px-6">
          See all memories you have shared.
        </button>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p>Profile</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default User;
