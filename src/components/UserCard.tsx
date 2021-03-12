import { VFC } from "react";
import { UserProfile } from "../types/UserProfile";

type Props = {
  user: UserProfile;
};

export const UserCard: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <div>
      <dl>
        <dt>name</dt>
        <dd>{user.name}</dd>
        <dt>mail</dt>
        <dd>{user.email}</dd>
        <dt>address</dt>
        <dd>{user.addres}</dd>
      </dl>
    </div>
  );
};
