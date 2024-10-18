import { Button } from 'shadcn-ui';

const CustomButton = ({ children }) => {
  return (
    <Button className="bg-blue-500 text-white hover:bg-blue-600">
      {children}
    </Button>
  );
};

export default CustomButton;
