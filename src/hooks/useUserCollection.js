import { useQuery } from "@tanstack/react-query";

const useUserEvents = () => {
  const {
    isLoading,
    error,
    data: usersData,
    refetch,
  } = useQuery(["usersData"], () =>
    fetch(`http://localhost:5000/users`).then((res) => res.json())
  );

  return { isLoading, error, usersData, refetch };
};

export default useUserEvents;
