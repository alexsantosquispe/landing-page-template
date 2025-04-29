import { useParams } from 'react-router-dom';

export const UserDetail = () => {
  const { userId } = useParams();

  return (
    <div className="flex h-screen w-full items-center justify-center">
      {`UserDetail ${userId} page`}
    </div>
  );
};
