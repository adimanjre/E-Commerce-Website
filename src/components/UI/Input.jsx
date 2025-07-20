const Input = ({ type, classes, placeholder }) => {
  const customClass = `bg-white border border-gray-300 p-2 rounded-md ${classes}`;
  return (
    <input type={type} className={customClass} placeholder={placeholder} />
  );
};

export default Input;
