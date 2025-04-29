import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button";

export const HomePage = () => {
  const navigate = useNavigate();

  const goToPurchasePage = () => {
    navigate("purchase");
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      Home Page
      <Button label="Buy" onClick={goToPurchasePage} />
    </div>
  );
};
