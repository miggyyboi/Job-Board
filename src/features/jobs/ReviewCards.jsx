function ReviewCards({ reviews }) {
  return (
    <ul className="flex flex-wrap gap-2">
      <li className="rounded-xl bg-slate-200 p-2 text-sm italic">
        &quot;{reviews}&quot;
      </li>
    </ul>
  );
}

export default ReviewCards;
