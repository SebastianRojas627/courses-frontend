import { Carousel } from "../components/Carousel";
import { AppLayout } from "../layouts/AppLayout";

export const Dashboard = () => {
  return (
    <>
      <AppLayout>
        <Carousel />
        <h1>Dashboard</h1>
      </AppLayout>
    </>
  );
};
