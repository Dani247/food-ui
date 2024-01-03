const MobileWrapper = ({ children }: any) => {
  return (
    <div className="max-w-md mx-auto p-4 h-screen overflow-auto border border-gray-300">
      {children}
    </div>
  );
};

export default MobileWrapper;
