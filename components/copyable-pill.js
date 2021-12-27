export default function CopyablePill(props) {
  return (
    <button
      className={
        "transition-all duration-100 py-1 px-2 bg-gray-400 bg-opacity-25 rounded hover:bg-opacity-40 hover:cursor-pointer active:bg-opacity-75"
      }
      title={"Copy to clipboard"}
      onClick={() => {
        navigator.clipboard.writeText(props.text);
      }}
    >
      {props.children}
    </button>
  );
}
