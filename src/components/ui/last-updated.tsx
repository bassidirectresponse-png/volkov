export function LastUpdated({ date }: { date: string }) {
  return (
    <p className="last-updated">
      Last updated{" "}
      <time dateTime={date}>
        {new Intl.DateTimeFormat("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC",
        }).format(new Date(`${date}T00:00:00Z`))}
      </time>
    </p>
  );
}
