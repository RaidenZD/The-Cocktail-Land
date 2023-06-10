const Detail = ({ title, text }) => {
  return (
    <div className=" flex gap-2 items-center font-bold text-sm">
      <h4 className=" bg-pink-200 dark:bg-pink-500 rounded px-2 py-[2px] font-semibold">
        {title} :
      </h4>
      <p>{text}</p>
    </div>
  );
};
export default Detail;
