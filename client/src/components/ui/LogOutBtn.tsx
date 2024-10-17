import { Button } from "@mantine/core";
import { useLogoutHandler } from "../../hooks/useLogoutHandler";

export const LogOutBtn = () => {
  const handleLogout = useLogoutHandler();
  return (
    <div>
      <div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};
