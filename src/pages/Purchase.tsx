import { useNavigate } from 'react-router-dom';

export const Purchase = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <span>Purchase Completed!!</span>

      <button
        className="cursor-pointer rounded-lg bg-purple-700 px-6 py-2 text-white"
        onClick={goBack}
      >
        Go back
      </button>
    </div>
  );
};
