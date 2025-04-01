import { Button } from "@chakra-ui/react";
import React from "react";
interface Prop {
  hasNextPage?: boolean;
  isLoading?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage: () => void;
}
const LoadMore = ({
  hasNextPage,
  isLoading,
  isFetchingNextPage,
  fetchNextPage,
}: Prop) => {
  return (
    <Button disabled={!!hasNextPage} onClick={fetchNextPage}>
      {isFetchingNextPage ? "loading ..." : "Load More"}
    </Button>
  );
};

export default LoadMore;
