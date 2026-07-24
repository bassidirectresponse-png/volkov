import {
  Building2,
  CircleAlert,
  FlaskConicalOff,
  Headphones,
  ListChecks,
  MessageSquareText,
  ReceiptText,
  SearchCheck,
} from "lucide-react";

const criteria = [
  { title: "Ingredient transparency", icon: ListChecks },
  { title: "Label clarity", icon: SearchCheck },
  { title: "Manufacturer information", icon: Building2 },
  { title: "Available scientific context", icon: FlaskConicalOff },
  { title: "Usage warnings", icon: CircleAlert },
  { title: "Customer support accessibility", icon: Headphones },
  { title: "Refund and purchasing information", icon: ReceiptText },
  { title: "Advertising transparency", icon: MessageSquareText },
] as const;

export function CapabilitiesSection() {
  return (
    <section className="capabilities-section">
      <div className="capabilities-heading">
        <p className="eyebrow">WHAT WE EVALUATE</p>
        <h2>
          We look beyond bold headlines to help readers{" "}
          <em>understand</em> what a product is, who sells it and what questions
          should be asked before making a <em>decision</em>.
        </h2>
        <p>
          Good research makes uncertainty and commercial{" "}
          <em>transparency</em> easier to see.
        </p>
      </div>
      <ol className="criteria-list">
        {criteria.map((item, index) => (
          <li key={item.title}>
            <span>0{index + 1}</span>
            <item.icon aria-hidden="true" />
            <strong>{item.title}</strong>
          </li>
        ))}
      </ol>
    </section>
  );
}
