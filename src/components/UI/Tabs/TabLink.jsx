const TabLink = ({ isActive, children, ...props }) => {
  return (
    <button
      className={`${
        isActive
          ? "text-purple-500 border-b border-b-purple-500"
          : "text-blue-950"
      } cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
};

export default TabLink;
