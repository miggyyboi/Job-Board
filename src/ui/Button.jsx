function Button({ children, onClick }) {
  if (onClick)
    return (
      <button
        onClick={onClick}
        className={`flex items-center rounded-lg bg-slate-200 px-2 py-1 text-xs shadow-sm transition-transform hover:scale-[102%]`}
      >
        {children}
      </button>
    );

  return (
    <button className="flex items-center rounded-lg bg-slate-200 px-2 py-1 text-xs shadow-sm transition-transform hover:scale-[102%]">
      {children}
    </button>
  );
}

export default Button;
