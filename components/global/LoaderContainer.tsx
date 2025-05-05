import { Card, CardContent } from "../ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const LoaderContainer = () => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
};

export const LoadingHero = () => {
  return (
    <div>
      <LoadingProduct />
    </div>
  );
};



const LoadingProduct = () => {
  return (
    <Card>
      <CardContent>
        <Skeleton className="w-full h-48" />
        <Skeleton className="w-3/4 h-4 mt-4" />
        <Skeleton className="w-3/4 h-4 mt-4" />
      </CardContent>
    </Card>
  );
};
