import {
  BookOpenText,
  CircleCheckBig,
  FileSearch,
  Leaf,
  Scale,
  ShieldCheck,
} from "lucide-react";

export const wellnessTopics = [
  {
    title: "Supplement Education",
    description:
      "Understand labels, serving information, warnings and responsible questions.",
    icon: BookOpenText,
  },
  {
    title: "Ingredient Transparency",
    description:
      "Look beyond highlighted ingredients to quantities, forms and full context.",
    icon: Leaf,
  },
  {
    title: "Healthy Habits",
    description:
      "Build realistic routines around sleep, food, hydration, movement and stress.",
    icon: CircleCheckBig,
  },
  {
    title: "Consumer Protection",
    description:
      "Recognize unclear claims, pressure tactics and missing commercial disclosures.",
    icon: ShieldCheck,
  },
  {
    title: "Product Research",
    description:
      "Evaluate manufacturer information, testing context and purchasing terms.",
    icon: FileSearch,
  },
  {
    title: "Responsible Wellness",
    description:
      "Know the limits of general information and when individual guidance matters.",
    icon: Scale,
  },
] as const;
