const Logo = ({ size = 32, color = "black" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.6552 22.7505L9.81747 32L6.34485 22.7505V0H6.40976L15.9513 19.1805H16.0162L25.5903 0H25.6552V22.7505Z"
        fill={color}
      />
    </svg>
  );
};

export default Logo;
