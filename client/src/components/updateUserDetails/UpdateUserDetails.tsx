interface IUpdateUserDetails {
  heading: string;
}
export const UpdateUserDetails = ({ heading }: IUpdateUserDetails) => {
  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
};
