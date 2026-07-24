export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Insight = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  published: string;
  updated: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  sections: InsightSection[];
  sources: Array<{ title: string; url: string }>;
};

export const insights: Insight[] = [
  {
    slug: "how-to-read-a-supplement-label",
    title: "How to Read a Supplement Label",
    category: "Supplement Education",
    summary:
      "A practical framework for understanding serving sizes, ingredients, warnings and manufacturer information.",
    published: "2026-06-10",
    updated: "2026-07-18",
    readingTime: "9 min read",
    image: "/images/volkov-research-desk.jpg",
    imageAlt:
      "A neutral paper label, magnifying glass and botanical materials arranged on a dark desk",
    sections: [
      {
        heading: "Start with the product identity",
        paragraphs: [
          "A supplement label should tell you what the product is before it tells you why you might want it. Begin with the statement of identity near the product name. Words such as dietary supplement, herbal supplement or vitamin supplement describe the category; they do not prove quality, suitability or effectiveness.",
          "Front-of-package language is designed to attract attention. Treat phrases about vitality, balance, performance or support as marketing context rather than a complete explanation. Turn the package around and compare those phrases with the factual information in the supplement facts panel, ingredient list, warnings and manufacturer details.",
        ],
      },
      {
        heading: "Check serving size before comparing amounts",
        paragraphs: [
          "Serving size is the reference point for every amount in the facts panel. A bottle may describe a serving as one capsule, two capsules, a scoop or several gummies. If you compare two products without noticing that difference, the numbers can appear more similar than they are.",
          "Also compare servings per container with the suggested pattern of use. This helps you understand how long a package may last. It does not mean you should automatically follow the maximum suggested amount. Personal needs, medications and health conditions can change what is appropriate, so individual guidance belongs with a qualified healthcare professional.",
        ],
      },
      {
        heading: "Read active and other ingredients separately",
        paragraphs: [
          "The facts panel generally lists the ingredients intended to provide the product's dietary value, along with the amount per serving. The other ingredients list may include capsule materials, flavors, colors, sweeteners, binders or anti-caking agents. Both sections matter, particularly for people managing allergies, dietary restrictions or ingredient sensitivities.",
          "A blend may group several ingredients under one total weight. When individual amounts are not shown, you may not be able to determine how much of each ingredient is present. That uncertainty should remain visible in your decision; a long ingredient list is not automatically more informative.",
        ],
        bullets: [
          "Confirm whether amounts are listed per unit or per full serving.",
          "Look for recognizable ingredient forms and clearly stated quantities.",
          "Review allergen statements and shared-facility notices.",
          "Avoid assuming that a botanical name alone explains strength or preparation.",
        ],
      },
      {
        heading: "Understand suggested use and warnings",
        paragraphs: [
          "Suggested use describes how the seller intends the product to be taken. It is not a personal prescription. Pay attention to timing, whether the product is intended to be taken with food, and any age limitations. Never combine directions from multiple products without considering overlapping ingredients.",
          "Warnings deserve the same visual attention as promotional claims. Look for references to pregnancy, breastfeeding, surgery, medication use, allergies, adverse reactions and keeping the product away from children. If a warning is unclear or does not address your circumstances, contact the manufacturer and speak with an appropriate healthcare professional before use.",
        ],
      },
      {
        heading: "Identify who is responsible for the product",
        paragraphs: [
          "A label should identify the company that manufactures, packs or distributes the product and provide a way to contact it. These roles are not identical. A distributor may sell a formula manufactured elsewhere, so read the wording carefully instead of assuming the brand owns the production facility.",
          "Keep the lot number, expiration or best-by date, and purchase record. They may be useful if you need customer support, want to report a quality concern or need to confirm whether a notice applies to your package. If the label lacks practical contact information, that is a reasonable question to resolve before purchasing.",
        ],
      },
      {
        heading: "Account for local rules and your own context",
        paragraphs: [
          "Labels are shaped by the rules of the market in which a product is sold. Required panels, wording and permitted claims can differ between countries. A product offered internationally may not use the same labeling format everywhere, and an online description may not perfectly match the package you receive.",
          "Use the physical label as your final reference and check for changes when repurchasing. Reading a label well does not determine whether a supplement is right for you. It gives you better facts and better questions—especially when you discuss supplements with a pharmacist, physician, registered dietitian or another qualified professional familiar with your circumstances.",
        ],
      },
    ],
    sources: [
      {
        title: "U.S. Food and Drug Administration — Dietary Supplement Labeling Guide",
        url: "https://www.fda.gov/food/dietary-supplements-guidance-documents-regulatory-information/dietary-supplement-labeling-guide",
      },
      {
        title: "NIH Office of Dietary Supplements — Dietary Supplements: What You Need to Know",
        url: "https://ods.od.nih.gov/factsheets/WYNTK-Consumer/",
      },
    ],
  },
  {
    slug: "questions-before-choosing-a-supplement",
    title: "Questions to Ask Before Choosing a Supplement",
    category: "Consumer Protection",
    summary:
      "Use questions—not promises—to assess purpose, labeling, support and possible risks.",
    published: "2026-05-21",
    updated: "2026-07-16",
    readingTime: "10 min read",
    image: "/images/volkov-research-desk.jpg",
    imageAlt:
      "Research notes and botanical reference cards arranged in a careful grid",
    sections: [
      {
        heading: "What am I trying to accomplish?",
        paragraphs: [
          "Start by naming the purpose in plain language. A vague desire to feel better can make almost any marketing promise sound relevant. A specific question—such as whether a documented dietary gap exists—creates a more useful starting point and makes it easier to involve a healthcare professional.",
          "A supplement should not become a substitute for investigating persistent symptoms or maintaining basic habits. If the purpose relates to a diagnosed condition, a medication change, pregnancy, recovery from surgery or an adverse reaction, professional guidance is especially important.",
        ],
      },
      {
        heading: "Who makes, distributes and supports it?",
        paragraphs: [
          "Look beyond the brand name. Identify the manufacturer or distributor shown on the label and check whether the company provides a physical location, working customer-support channel and clear policies. A polished website alone does not answer questions about responsibility.",
          "Ask who handles product questions, quality concerns, billing, shipping and refunds. When a purchase happens on a third-party merchant's website, those responsibilities typically remain with that merchant rather than the publisher that introduced the product.",
        ],
      },
      {
        heading: "Can I see a complete label before purchase?",
        paragraphs: [
          "You should be able to review serving size, ingredient amounts, other ingredients, allergen information, suggested use and warnings without relying on a sales video. If the ingredient panel is too small to read or only selected ingredients are highlighted, request a clearer copy.",
          "Check for blends that conceal individual quantities and compare the online label with the delivered product. Formulas can change. If a particular ingredient matters to you, verify it each time rather than relying on an older review or saved screenshot.",
        ],
      },
      {
        heading: "Are the claims proportionate to the evidence?",
        paragraphs: [
          "Be cautious with absolute outcomes, rapid timelines, claims that a product works for everyone, or language suggesting that ordinary medical care is unnecessary. Personal stories and before-and-after images cannot establish what most people should expect.",
          "Ask whether a claim refers to the exact finished product, a single ingredient, laboratory research, animal research or human studies. Those categories answer different questions. The more dramatic the promise, the more important it is to find direct, relevant and independently understandable support.",
        ],
        bullets: [
          "Does the claim use words such as cure, reverse, guaranteed or no side effects?",
          "Is urgency being used to discourage comparison?",
          "Are sources linked and accurately represented?",
          "Are limitations and uncertainties stated near the claim?",
        ],
      },
      {
        heading: "Could it interact with my circumstances?",
        paragraphs: [
          "Supplements can interact with medications, other supplements, laboratory tests and medical procedures. Natural does not mean interaction-free. Consider the total amount of each ingredient across everything you use, including fortified foods and drinks.",
          "Bring the full label—not only the product name—to a qualified healthcare professional. Mention allergies, pregnancy or breastfeeding, planned procedures, existing conditions and adverse reactions. If you develop a concerning symptom, stop relying on online research and seek appropriate care.",
        ],
      },
      {
        heading: "What happens after the purchase?",
        paragraphs: [
          "Read the seller's refund, subscription, cancellation, shipping and customer-support terms before entering payment information. Distinguish a satisfaction guarantee from evidence that the product will deliver a health outcome. They are different kinds of statements.",
          "Save the order confirmation and merchant contact information. A careful choice is not a prediction of results; it is a documented process that makes uncertainty, responsibility and next steps more visible.",
        ],
      },
    ],
    sources: [
      {
        title: "NIH Office of Dietary Supplements — Frequently Asked Questions",
        url: "https://ods.od.nih.gov/HealthInformation/ODS_Frequently_Asked_Questions.aspx",
      },
      {
        title: "U.S. FDA — Information for Consumers on Using Dietary Supplements",
        url: "https://www.fda.gov/food/dietary-supplements/information-consumers-using-dietary-supplements",
      },
    ],
  },
  {
    slug: "understanding-third-party-testing",
    title: "Understanding Third-Party Testing",
    category: "Product Research",
    summary:
      "What independent testing may examine, what it cannot prove and how to read certification claims carefully.",
    published: "2026-05-02",
    updated: "2026-07-11",
    readingTime: "9 min read",
    image: "/images/volkov-research-desk.jpg",
    imageAlt:
      "Abstract glass vessels, paper records and natural materials in soft daylight",
    sections: [
      {
        heading: "What third-party testing means",
        paragraphs: [
          "Third-party testing generally means that an organization separate from the product seller performs an evaluation. The phrase is broad. It may describe a single laboratory analysis, a recurring certification program, a facility audit or testing commissioned by the manufacturer.",
          "Independence can reduce some conflicts, but the details determine how informative a result is. Ask who selected the samples, what was tested, which methods were used, when the work occurred and whether the result applies to one batch or an ongoing program.",
        ],
      },
      {
        heading: "Identity, quantity and purity",
        paragraphs: [
          "Testing may examine whether a product contains the ingredient it claims to contain, whether the measured amount is reasonably consistent with the label, and whether selected contaminants stay within defined limits. Different methods are suited to different ingredients, so a generic claim of lab tested reveals little by itself.",
          "Purity is also not an unlimited promise. A laboratory must decide which contaminants to look for and what threshold to apply. A result for heavy metals does not automatically cover microbes, pesticides, solvents, allergens or undeclared pharmaceutical substances.",
        ],
      },
      {
        heading: "Certification is not proof of effectiveness",
        paragraphs: [
          "A quality test can provide information about identity or composition. It does not by itself establish that the product produces the advertised benefit, is appropriate for a particular person or has no risk. Efficacy requires different evidence, and safety depends partly on dose, duration and individual context.",
          "This distinction is important because certification marks can be presented close to outcome claims. Read them separately. Ask exactly what the program certifies rather than letting the visual authority of a seal answer a broader question than the test was designed to address.",
        ],
      },
      {
        heading: "How to examine a testing claim",
        paragraphs: [
          "A meaningful disclosure should identify the testing organization and make its scope understandable. Look for a searchable certificate, lot or batch reference, date, accredited method where relevant, and a description of what passing means. A cropped image without context may be difficult to verify.",
          "Also check whether the organization is independent of the merchant and whether manufacturers can choose which results to publish. Selective publication can create an incomplete picture even when an individual result is genuine.",
        ],
        bullets: [
          "Is the laboratory or certification program named?",
          "Can the result be matched to the product and batch?",
          "Are the tested characteristics clearly listed?",
          "Does the result have a date and understandable limits?",
          "Is the claim being stretched from quality to guaranteed outcome?",
        ],
      },
      {
        heading: "Use testing as one layer of a decision",
        paragraphs: [
          "Third-party information can be useful, especially when it is current, specific and transparent. It belongs alongside the complete label, manufacturer identity, warnings, customer support, scientific context and your personal health considerations.",
          "No seal should end the inquiry. A responsible interpretation is narrower: the available result may reduce uncertainty about the characteristics it actually measured. It does not remove every unknown or replace advice from a qualified healthcare professional.",
        ],
      },
    ],
    sources: [
      {
        title: "NIH Office of Dietary Supplements — Which Brand(s) Should I Purchase?",
        url: "https://ods.od.nih.gov/HealthInformation/ODS_Frequently_Asked_Questions.aspx",
      },
      {
        title: "U.S. FDA — Questions and Answers on Dietary Supplements",
        url: "https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements",
      },
    ],
  },
  {
    slug: "how-to-evaluate-wellness-claims-online",
    title: "How to Evaluate Wellness Claims Online",
    category: "Consumer Protection",
    summary:
      "Recognize urgency, false authority and missing context before a persuasive claim becomes a decision.",
    published: "2026-04-14",
    updated: "2026-07-08",
    readingTime: "11 min read",
    image: "/images/volkov-research-desk.jpg",
    imageAlt:
      "Layered headlines and evidence notes separated across an editorial work surface",
    sections: [
      {
        heading: "Separate the claim from the presentation",
        paragraphs: [
          "Online wellness marketing can combine a modest factual statement with dramatic music, urgent timers, emotional stories or official-looking graphics. Write the core claim in one neutral sentence. This makes it easier to ask what evidence would actually be needed to support it.",
          "Then note the qualifiers. Words such as may, supports or associated with are not interchangeable with prevents, treats or guarantees. A page can preserve a qualifier in small text while the overall presentation creates a much stronger impression.",
        ],
      },
      {
        heading: "Watch for absolute promises and urgency",
        paragraphs: [
          "Health outcomes vary. Claims that something works for everyone, produces a precise result on a fixed timeline, has no side effects or makes professional care unnecessary deserve substantial skepticism. A disclaimer at the bottom does not repair a misleading central message.",
          "Urgency can also reduce careful review. Countdown clocks, claims that information is being suppressed, or repeated warnings that a page will disappear are persuasion techniques, not scientific support. Pause, save the product name and research outside the sales environment.",
        ],
      },
      {
        heading: "Do not borrow authority from appearances",
        paragraphs: [
          "A person in a white coat, a celebrity story, a news-style layout or a logo resembling a public institution can create authority without demonstrating relevant expertise or evidence. Verify names, credentials and affiliations independently. Confirm that endorsements are real and appropriately disclosed.",
          "Be especially careful with copied interviews, altered video, synthetic presenters and quotes detached from their source. Search for the original publication and check whether it actually discusses the product or claim being sold.",
        ],
      },
      {
        heading: "Read before-and-after stories as anecdotes",
        paragraphs: [
          "Images and testimonials may be emotionally compelling, but they rarely show all relevant variables. Lighting, posture, timing, selection and other changes can affect the story. Even an authentic experience cannot establish a typical outcome or prove that one product caused it.",
          "Look for broader evidence that uses appropriate comparison groups and transparent methods. If only exceptional stories are visible, ask what happened across the full group of users and whether negative or neutral experiences were collected in the same way.",
        ],
      },
      {
        heading: "Follow the sources",
        paragraphs: [
          "A source should support the specific statement attached to it. Check whether a link leads to a complete paper, an official reference, a press release or simply another marketing page. Review the population, dose, duration and outcome that were actually studied.",
          "Correlation does not automatically establish causation. If people with one habit also report a better outcome, other differences may explain some or all of the association. Strong causal claims require methods designed to rule out competing explanations.",
        ],
        bullets: [
          "Can the original source be opened and identified?",
          "Was the exact ingredient or finished product studied?",
          "Were human participants involved?",
          "Is the outcome clinically meaningful or only a laboratory marker?",
          "Are limitations visible in the marketing summary?",
        ],
      },
      {
        heading: "Use a pause-and-verify routine",
        paragraphs: [
          "Before purchasing, leave the promotional page and look for the complete label, seller identity, independent references, warnings and refund terms. Search the claim in neutral language. If the seller discourages outside research, treat that as information about the sales process.",
          "When a claim relates to symptoms, medications, pregnancy, breastfeeding, surgery or a diagnosed condition, take the question to an appropriate healthcare professional. The most responsible online conclusion is sometimes not a verdict, but a clear statement of what remains unknown.",
        ],
      },
    ],
    sources: [
      {
        title: "Federal Trade Commission — Health Products Compliance Guidance",
        url: "https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance",
      },
      {
        title: "National Center for Complementary and Integrative Health — Know the Science",
        url: "https://www.nccih.nih.gov/health/know-science",
      },
    ],
  },
  {
    slug: "building-sustainable-daily-wellness-habits",
    title: "Building Sustainable Daily Wellness Habits",
    category: "Healthy Habits",
    summary:
      "A grounded approach to sleep, food, hydration, movement, stress and consistency.",
    published: "2026-03-28",
    updated: "2026-07-03",
    readingTime: "9 min read",
    image: "/images/volkov-research-desk.jpg",
    imageAlt:
      "A calm morning arrangement with water, fruit, walking shoes and a notebook",
    sections: [
      {
        heading: "Begin with repeatable, not impressive",
        paragraphs: [
          "Sustainable habits usually look ordinary. They fit into real mornings, busy weeks, travel and imperfect motivation. A plan that depends on constant intensity may produce a short burst of action without creating a routine that survives changing circumstances.",
          "Choose a small behavior connected to an existing part of the day. Define what counts as complete and make the first version easy enough to repeat. Progress can expand later; consistency needs a stable place to begin.",
        ],
      },
      {
        heading: "Protect a workable sleep routine",
        paragraphs: [
          "Sleep needs differ, but regular timing and a supportive environment can make rest more predictable. Notice wake time, evening light, caffeine timing, room comfort and the activities that repeatedly delay bedtime. Change one factor at a time so you can observe what helps.",
          "Persistent insomnia, loud snoring, breathing interruptions, severe daytime sleepiness or sudden changes deserve professional attention. A sleep routine is useful, but it should not be used to normalize symptoms that require evaluation.",
        ],
      },
      {
        heading: "Build meals around patterns",
        paragraphs: [
          "Instead of assigning moral value to individual foods, look at the pattern across days. Variety, adequate energy and access matter. Adding a practical source of produce, fiber or protein to a familiar meal can be easier to sustain than rebuilding every meal at once.",
          "Individual needs can change with allergies, cultural preferences, medical conditions, budget, pregnancy, athletic demands and medications. General nutrition content cannot account for all of these factors, so specialized decisions may benefit from a registered dietitian or another qualified professional.",
        ],
      },
      {
        heading: "Make hydration visible",
        paragraphs: [
          "Hydration needs vary with climate, activity, body size, diet and health conditions. Keep water accessible and use ordinary cues—such as meals or breaks—to remember it. More is not automatically better, and some people have medical reasons to follow specific fluid guidance.",
          "Products marketed around hydration can add sugar, stimulants or minerals that are unnecessary in some contexts. Read labels and consider the entire day rather than evaluating a drink in isolation.",
        ],
      },
      {
        heading: "Choose movement you can return to",
        paragraphs: [
          "Movement does not need to be extreme to be meaningful. Walking, strength work, mobility, cycling, sport and active daily tasks can all contribute. Start at a level that matches your current ability and increase gradually.",
          "Pain, dizziness, shortness of breath that feels unusual, injury or recovery from a medical event requires appropriate guidance. Online motivation should not override warning signs from your body.",
        ],
      },
      {
        heading: "Treat stress support as a system",
        paragraphs: [
          "Brief breathing practices, time outdoors, social connection, boundaries and professional mental-health support can serve different roles. No single technique needs to carry the entire burden. Notice which demands can be changed and which require additional support.",
          "Track habits gently. A missed day is information, not failure. Review what made the behavior difficult, reduce friction and restart at the next reasonable opportunity. Sustainable wellness is less about perfect streaks than about building a system you can return to.",
        ],
      },
    ],
    sources: [
      {
        title: "World Health Organization — Healthy Diet",
        url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
      },
      {
        title: "World Health Organization — Physical Activity",
        url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
      },
    ],
  },
  {
    slug: "when-to-speak-with-a-healthcare-professional",
    title: "When to Speak With a Healthcare Professional",
    category: "Responsible Wellness",
    summary:
      "Situations where individual context matters more than generalized wellness information.",
    published: "2026-03-05",
    updated: "2026-06-29",
    readingTime: "10 min read",
    image: "/images/volkov-research-desk.jpg",
    imageAlt:
      "An open question list and calendar prepared for a professional appointment",
    sections: [
      {
        heading: "When medications are involved",
        paragraphs: [
          "Supplements can change how some medicines are absorbed, processed or experienced. The interaction may increase side effects, reduce the intended effect of a medicine or change laboratory results. A product being available without a prescription does not make it automatically compatible with prescription or over-the-counter medication.",
          "Bring a complete list of medicines, supplements, teas and fortified products to a pharmacist, physician or other qualified professional. Include doses and frequency. Do not stop or change prescribed medication based on a marketing page or generalized article.",
        ],
      },
      {
        heading: "During pregnancy or breastfeeding",
        paragraphs: [
          "Pregnancy and breastfeeding change nutritional needs and the way risk is considered. Some ingredients lack adequate research in these populations, while others may be inappropriate at particular amounts. Products marketed as natural or traditional still require careful review.",
          "Discuss the exact label with a qualified prenatal or maternal-care professional. Avoid relying on testimonials from other parents, because health history, timing, dose and concurrent care can differ substantially.",
        ],
      },
      {
        heading: "With preexisting conditions",
        paragraphs: [
          "Kidney, liver, heart, endocrine, gastrointestinal and other conditions may affect how ingredients are handled or which amounts are appropriate. The same is true for allergies and prior adverse reactions. General serving suggestions cannot account for all of these circumstances.",
          "Ask how the product fits with your diagnosis, monitoring plan and current treatment. If you are using a supplement to address a symptom rather than a documented need, discuss the symptom itself so that an important cause is not overlooked.",
        ],
      },
      {
        heading: "Before surgery or a procedure",
        paragraphs: [
          "Some supplements may affect bleeding, blood pressure, sedation, blood sugar or other factors relevant to a procedure. Surgical teams often ask patients to disclose everything they use and may provide specific instructions about when to pause certain products.",
          "Tell the care team early rather than waiting until the day of the procedure. Follow their individualized instructions and provide product labels when ingredient names or blends are unclear.",
        ],
      },
      {
        heading: "After an adverse reaction",
        paragraphs: [
          "Stop using a product and seek appropriate guidance if you develop a concerning reaction. Severe symptoms such as difficulty breathing, swelling, fainting, chest pain or signs of a medical emergency require immediate local emergency care.",
          "Keep the package, lot number, ingredient list, timing and purchase details. These can help a professional assess what happened and may support a report to the relevant regulator or manufacturer.",
        ],
      },
      {
        heading: "When symptoms persist or information conflicts",
        paragraphs: [
          "Persistent, worsening or unexplained symptoms should not be managed indefinitely through online experimentation. A qualified professional can take a history, examine context and decide whether testing or treatment is appropriate.",
          "Consultation is also useful when reliable sources appear to conflict. Ask what is known about the exact ingredient, dose, duration and outcome, and which uncertainties matter most for you. Good professional guidance should help you understand the reasoning, not simply add another unsupported promise.",
        ],
        bullets: [
          "Prepare the exact product label and ingredient amounts.",
          "List all medications and supplements you currently use.",
          "Write down symptoms, timing and questions before the visit.",
          "Seek emergency help immediately for severe or rapidly worsening symptoms.",
        ],
      },
    ],
    sources: [
      {
        title: "NIH Office of Dietary Supplements — Dietary Supplements: What You Need to Know",
        url: "https://ods.od.nih.gov/factsheets/WYNTK-Consumer/",
      },
      {
        title: "U.S. FDA — How to Report a Problem with Dietary Supplements",
        url: "https://www.fda.gov/food/dietary-supplements/how-report-problem-dietary-supplements",
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
