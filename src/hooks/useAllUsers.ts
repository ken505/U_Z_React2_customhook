import axios from "axios";
import { useState } from "react";
import { UserProfile } from "../types/userProfile";
import { User } from "../types/api/user";

// 全ユーザーの一覧を取得する custom hooks
export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
    // tsconfig.json の compilerOptions lib es2015 -> es2018 へ
    // 変更すると、 finally が使えるようになる。
    // 何が起きても最後に実行する内容を指定できる。
    // ここでは最後に必ず setLoading を false に書き換える処理を行う。
  };

  return { getUsers, userProfiles, loading, error };
};
