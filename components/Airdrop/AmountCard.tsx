const AmountCard = () => {
  return (
    <div className="w-72 bg-[#404040] p-8 flex flex-col gap-2 rounded-3xl text-sm">
      <div className="flex justify-between">
        <p>Amount</p>
        <p>0.11 MATIC</p>
      </div>
      <div className="flex justify-between">
        <p>Estimated Gas fee</p>
        <p>0.0155 MATIC</p>
      </div>
      <hr />
      <div className="flex justify-between">
        <p>Total Amount</p>
        <p>0.1255 MATIC</p>
      </div>
    </div>
  );
};

export default AmountCard;
