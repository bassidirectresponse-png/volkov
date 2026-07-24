import { FileClock } from "lucide-react";

export function EmptyProductsState() {
  return (
    <div className="empty-products">
      <FileClock aria-hidden="true" />
      <div>
        <h2>Research in progress.</h2>
        <p>
          Our product research library is being prepared. Product coverage will
          be added only after editorial and compliance review.
        </p>
      </div>
    </div>
  );
}
