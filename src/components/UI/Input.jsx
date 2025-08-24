const Input = ({ type, classes, placeholder, ...props }) => {
  const customClass = `bg-white border border-gray-300 p-2 rounded-md ${classes}`;
  return (
    <input
      type={type}
      className={customClass}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
