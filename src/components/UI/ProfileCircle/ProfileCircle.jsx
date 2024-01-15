const ProfileCircle = ({ size, src }) => {
  return (
    <img
      src={src}
      alt="profile"
      className={`h-[${size}px] w-[${size}px] rounded-full object-contain`}
    />
  );
};
export default ProfileCircle;
