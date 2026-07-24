import type { LucideIcon } from "lucide-react";
import {
  BadgeInfo,
  Building2,
  CircleAlert,
  ClipboardCheck,
  FileSearch,
  HelpCircle,
  Layers3,
  ScanSearch,
} from "lucide-react";

export type ExplodedViewItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  exploded: { x: number; y: number; rotate: number; scale: number };
  final: { x: number; y: number; rotate: number; scale: number };
  analysisPrompt: string;
  order: number;
};

export const explodedViewItems: ExplodedViewItem[] = [
  {
    id: "ingredients",
    title: "Ingredient Transparency",
    description: "Full ingredient context",
    icon: Layers3,
    exploded: { x: -340, y: -190, rotate: -7, scale: 1.02 },
    final: { x: -115, y: -92, rotate: -2, scale: 0.88 },
    analysisPrompt: "What is actually present, and in what amount?",
    order: 1,
  },
  {
    id: "claims",
    title: "Claims Review",
    description: "Claims examined carefully",
    icon: ScanSearch,
    exploded: { x: 300, y: -205, rotate: 6, scale: 1.05 },
    final: { x: 118, y: -92, rotate: 2, scale: 0.88 },
    analysisPrompt: "What exactly is being claimed?",
    order: 2,
  },
  {
    id: "warnings",
    title: "Warnings",
    description: "Warnings kept visible",
    icon: CircleAlert,
    exploded: { x: 430, y: -12, rotate: 8, scale: 0.96 },
    final: { x: 122, y: 4, rotate: 0, scale: 0.88 },
    analysisPrompt: "Are warnings easy to find?",
    order: 3,
  },
  {
    id: "sources",
    title: "Source Quality",
    description: "Sources over assumptions",
    icon: FileSearch,
    exploded: { x: -400, y: 5, rotate: -4, scale: 0.94 },
    final: { x: -120, y: 4, rotate: 0, scale: 0.88 },
    analysisPrompt: "Which sources support the information?",
    order: 4,
  },
  {
    id: "affiliate",
    title: "Affiliate Transparency",
    description: "Commercial relationships disclosed",
    icon: BadgeInfo,
    exploded: { x: 330, y: 205, rotate: 5, scale: 1.01 },
    final: { x: 118, y: 99, rotate: -1, scale: 0.88 },
    analysisPrompt: "Is a commercial relationship being disclosed?",
    order: 5,
  },
  {
    id: "questions",
    title: "Consumer Questions",
    description: "Questions consumers should ask",
    icon: HelpCircle,
    exploded: { x: -330, y: 220, rotate: -6, scale: 1.06 },
    final: { x: -118, y: 99, rotate: 1, scale: 0.88 },
    analysisPrompt: "What should a consumer ask next?",
    order: 6,
  },
  {
    id: "manufacturer",
    title: "Manufacturer Information",
    description: "Who makes and sells it",
    icon: Building2,
    exploded: { x: 10, y: 270, rotate: 3, scale: 0.93 },
    final: { x: 0, y: 99, rotate: 0, scale: 0.88 },
    analysisPrompt: "Who manufactures and supports the product?",
    order: 7,
  },
  {
    id: "context",
    title: "Final Editorial Context",
    description: "Information brought together clearly",
    icon: ClipboardCheck,
    exploded: { x: 0, y: 0, rotate: 0, scale: 1.08 },
    final: { x: 0, y: 0, rotate: 0, scale: 0.92 },
    analysisPrompt: "How do these layers change the complete picture?",
    order: 8,
  },
];
