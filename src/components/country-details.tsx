type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CountryDetails = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;
  return <div className="shadow-md h-[600px] w-[600px]">Yo</div>;
};
