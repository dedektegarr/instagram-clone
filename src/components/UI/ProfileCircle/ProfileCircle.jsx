const ProfileCircle = ({ src, className }) => {
  return (
    <img src={src} alt="profile" className={`${className} rounded-full`} />
  );
};
export default ProfileCircle;
