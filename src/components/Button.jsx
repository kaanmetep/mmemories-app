function Button({ children, className, onSignupClicked }) {
  return (
    <button
      className={`bg-red-50 px-4 py-1 rounded-sm hover:bg-red-100 transition-all delay-50 text-xs ${className}`}
      onClick={onSignupClicked}
    >
      {children}
    </button>
  );
}

export default Button;
