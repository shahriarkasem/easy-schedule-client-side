import { useQuery } from "@tanstack/react-query";

const useUserEvents = () => {
  const {
    isLoading,
    error,
    data: usersData,
    refetch,
  } = useQuery(["usersData"], () =>
    fetch(`https://easyscheduler24.herokuapp.com/users`).then((res) =>
      res.json()
    )
  );

  return { isLoading, error, usersData, refetch };
};

export default useUserEvents;
