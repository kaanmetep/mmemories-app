function Button({ children, className, onClick }) {
  return (
    <button
      className={`bg-red-50  rounded-md hover:bg-red-100 transition-all delay-50 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
