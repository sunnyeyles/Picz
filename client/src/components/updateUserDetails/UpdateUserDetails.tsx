import { Logo } from "../../assets/Logo";
interface IUpdateUserDetails {
  heading: string;
}
export const UpdateUserDetails = ({ heading }: IUpdateUserDetails) => {
  return (
    <div>
      <Logo width="35" height="35" />
      <h2>{heading}</h2>
    </div>
  );
};
