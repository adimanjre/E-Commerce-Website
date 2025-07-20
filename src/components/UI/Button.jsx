const Button = ({ text, classes, ...props }) => {
  const customClass = `p-2 bg-pink-500 text-white rounded-md px-5 cursor-pointer ${classes}`;
  return (
    <button className={customClass} {...props}>
      {text}
    </button>
  );
};

export default Button;
