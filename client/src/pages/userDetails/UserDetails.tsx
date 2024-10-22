import { UpdateUserDetails } from "../../components/updateUserDetails/UpdateUserDetails";
const UserDetails = () => {
  return (
    <div>
      <div>
        <UpdateUserDetails heading="Update email" />
      </div>
      <div>
        <UpdateUserDetails heading="Update password" />
      </div>
    </div>
  );
};
export default UserDetails;
