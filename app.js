const requirements = [
  {
    category: "Sales Cycle Planning",
    requirement:
      "Pull together all required information ahead of each sales cycle, including key actions, priorities, training, NPD launches, and customer marketing activities.",
    priority: "Must Have",
    feedback: "KPI aligned",
    kpi: true,
  },
  {
    category: "Call Planning",
    requirement:
      "Plan monthly or quarterly call cycles and provide clear actions for the rep before each customer visit.",
    priority: "Must Have",
    feedback: "KPI aligned",
    kpi: true,
  },
  {
    category: "Customer Segmentation & Profiling",
    requirement:
      "Segment customers by type, importance, and recommended call frequency, such as weekly, fortnightly, or monthly.",
    priority: "Must Have",
    feedback:
      "Call frequency by customer size and type helps stop the team migrating only to the easiest relationships.",
    kpi: false,
  },
  {
    category: "Customer Rapport",
    requirement:
      "Show personal greeting notes captured for staff members, such as interests, children, or preferred conversation starters.",
    priority: "Should Have",
    feedback: "Accelerates rapport building, especially for new staff onboarding.",
    kpi: false,
  },
  {
    category: "Stock Take",
    requirement:
      "Check stock against the SKU list, review stock-take history, flag usual items that are out of stock, and identify recommended ranged products.",
    priority: "Must Have",
    feedback:
      "Mandatory for SKU distribution tracking, reporting, national and state insights, promotions, and inventory actions.",
    kpi: false,
  },
  {
    category: "Stock Take",
    requirement:
      "Recommend an order and capture the value added compared with the cost of sending a rep.",
    priority: "Must Have",
    feedback: "Supports measurable value added during the visit.",
    kpi: false,
  },
  {
    category: "Sales Review",
    requirement:
      "Show purchase data, MTD, YTD, prior-year comparison, and relevant comparators such as store versus region and national.",
    priority: "Must Have",
    feedback:
      "Enables reps to benchmark the branch and hold better trading conversations.",
    kpi: false,
  },
  {
    category: "Promotion and Campaigns",
    requirement:
      "Provide optional product knowledge training for store staff, triggered centrally or by the State GM.",
    priority: "Should Have",
    feedback: "Basic hygiene factor for branch enablement.",
    kpi: false,
  },
  {
    category: "Promotion and Campaigns",
    requirement:
      "Share forthcoming promotions and promotional materials relevant to the customer and state.",
    priority: "Should Have",
    feedback: "Helps drive the right outputs by customer or state.",
    kpi: false,
  },
  {
    category: "Promotion and Campaigns",
    requirement:
      "Surface Rheem Rewards details, promotions, offers, and member push actions for plumbers and hot water specialists.",
    priority: "Should Have",
    feedback: "Supports program selling to as many plumbers as possible.",
    kpi: false,
  },
  {
    category: "Promotion and Campaigns",
    requirement:
      "Show relevant news updates, such as a Rheem Rapid app relaunch or customer-facing program change.",
    priority: "Should Have",
    feedback: "Supports program awareness and customer enablement.",
    kpi: false,
  },
  {
    category: "Promotion and Campaigns",
    requirement:
      "Include visit training tasks inside the call template when training is part of the sales cycle.",
    priority: "Must Have",
    feedback: "Training can be promoted from optional to required for priority campaigns.",
    kpi: false,
  },
  {
    category: "Competitor Analysis",
    requirement:
      "Capture competitor SKUs and 3 to 5 price points on every visit, including invoice price, selling price, single-buy price, multi-buy price, and uploaded screenshots.",
    priority: "Must Have",
    feedback: "Designed to support reporting and pricing analysis.",
    kpi: false,
  },
  {
    category: "Quotation and Standards",
    requirement:
      "Produce professional quotes that can be left with or emailed to the customer.",
    priority: "Must Have",
    feedback: "Keeps quote generation inside the CRM workflow.",
    kpi: false,
  },
  {
    category: "LTI Tracking",
    requirement:
      "Track incentives at branch or region level where applicable.",
    priority: "Should Have",
    feedback: "Relevant for customers such as Tradelink where incentives may sit at store or region level.",
    kpi: false,
  },
  {
    category: "Customer Setup",
    requirement: "Make customer setup quick and simple for field users.",
    priority: "Other Haves",
    feedback: "Unclassified in the source workbook.",
    kpi: false,
  },
  {
    category: "Pricing Information",
    requirement: "Provide customer-specific pricing information inside the visit workspace.",
    priority: "Other Haves",
    feedback: "Unclassified in the source workbook.",
    kpi: false,
  },
  {
    category: "Surveys",
    requirement: "Capture quick survey answers during or after the customer visit.",
    priority: "Other Haves",
    feedback: "Unclassified in the source workbook.",
    kpi: false,
  },
  {
    category: "Risk Indicator",
    requirement: "Show an indicator for customers at risk.",
    priority: "Other Haves",
    feedback: "Unclassified in the source workbook.",
    kpi: false,
  },
  {
    category: "Visit Template",
    requirement: "Use a template-driven visit call structure.",
    priority: "Other Haves",
    feedback: "Unclassified in the source workbook.",
    kpi: false,
  },
  {
    category: "Mobile Access",
    requirement:
      "Allow access without VPN friction and make the experience usable on a mobile phone or tablet.",
    priority: "Other Haves",
    feedback:
      "Instant access reduces login friction and keeps the customer engaged during the visit.",
    kpi: false,
  },
  {
    category: "CRM Hub",
    requirement:
      "Make all rep applications available through CRM, including LMS, SharePoint, SAC, and step-of-the-call tiles.",
    priority: "Must Have",
    feedback:
      "The rep and customer experience should feel like one place, even when CRM integrates with other tools.",
    kpi: false,
  },
  {
    category: "Reports",
    requirement: "Provide custom reports to track metrics and analyze performance.",
    priority: "Other Haves",
    feedback: "Unclassified in the source workbook.",
    kpi: false,
  },
];

const steps = [
  {
    title: "Sales Cycle Planning",
    priority: "Must Have",
    meta: "Cycle actions, priorities, training, launches",
    detail: [
      ["Cycle Pack", "May focus is heat pump upsell, Bulla 280L launch, and RSS stock health."],
      ["Rep Prompt", "Review customer activity calendar, national priorities, and local campaign tasks before arriving."],
    ],
  },
  {
    title: "Call Planning",
    priority: "Must Have",
    meta: "Visit schedule and branch objective",
    detail: [
      ["Objective", "Secure replenishment for urgent stock gaps and book a 20-minute staff training session."],
      ["Call Cadence", "Fortnightly visit because the branch is high importance and trading below region this month."],
    ],
  },
  {
    title: "Customer Profile",
    priority: "Must Have",
    meta: "Segmentation and rapport",
    detail: [
      ["Segment", "RSS branch, high value, medium churn risk, plumbing and hot water specialist audience."],
      ["Greeting Note", "Store manager Sam follows NRL and prefers a concise visit with clear order recommendations."],
    ],
  },
  {
    title: "Stock Take",
    priority: "Must Have",
    meta: "SKU gaps and ranged product checks",
    detail: [
      ["Urgent Gaps", "Rheem 250L Heat Pump, Stellar 315L, and Longhorn accessory kit are below target holding."],
      ["Recommendation", "Add 7 units across urgent SKUs for a projected $18.7K replenishment order."],
    ],
  },
  {
    title: "Sales Review",
    priority: "Must Have",
    meta: "MTD, YTD, region and national comparison",
    detail: [
      ["Trading View", "YTD is +8.4% versus prior year, but MTD is -3.1% versus region."],
      ["Conversation Starter", "Heat pump category is outperforming, while gas storage is lagging the national benchmark."],
    ],
  },
  {
    title: "Promotions and Training",
    priority: "Should Have",
    meta: "Campaigns, rewards, news, enablement",
    detail: [
      ["Promotion", "Share May hot water specialist rebate and June Longhorn launch collateral."],
      ["Training", "Book Heat Pumps 101 for counter staff and capture attendance in the visit notes."],
    ],
  },
  {
    title: "Competitor Capture",
    priority: "Must Have",
    meta: "Price points and screenshot upload",
    detail: [
      ["Target", "Capture at least 5 competitor SKUs, invoice price, shelf price, and multi-buy price."],
      ["Dummy Capture", "Thermann 250L HP: shelf $3,099, multi-buy $2,940, screenshot attached."],
    ],
  },
  {
    title: "Quote and Follow-up",
    priority: "Must Have",
    meta: "Professional quote and next actions",
    detail: [
      ["Quote", "Generate customer-ready PDF quote for the recommended replenishment order."],
      ["Follow-up", "Send quote, log visit notes, create training task, and schedule the next fortnightly visit."],
    ],
  },
];

const activities = [
  ["Stock Check", "", "", "", "", "Priority branch audit", "", "", "", "", "", "", ""],
  ["Recommended Order", "", "Heat pump top-up", "", "", "", "Longhorn launch order", "", "", "", "", "", ""],
  ["YTD Sales Review", "Q1 review", "", "", "Q2 review", "", "", "Q3 review", "", "", "Q4 review", "", ""],
  ["NPD Launches", "Bulla 280L R290", "New CFGHW platform", "Matador launch", "", "", "Longhorn launch", "", "", "", "", "", ""],
  ["Competitor Pricing", "Rinnai 26L check", "Emerald Energy 250L HP", "", "", "", "", "Thermann multi-buy", "", "", "", "", ""],
  ["Training", "How to sell heat pumps", "", "", "How to install heat pumps", "", "", "Upsell and save time", "", "", "Merchant refresh", "", ""],
  ["Rheem Rewards", "5 new members", "", "", "", "", "", "", "", "", "Expiring points re-engagement", "", ""],
  ["Rheem Rapid", "", "10 new signups", "", "10 new signups", "", "10 new signups", "", "10 new signups", "", "10 new signups", "", ""],
];

const byPriority = {
  "Must Have": document.querySelector("#mustList"),
  "Should Have": document.querySelector("#shouldList"),
  "Other Haves": document.querySelector("#otherList"),
};

function createRequirementCard(item) {
  const card = document.createElement("article");
  card.className = "requirement-card";
  card.innerHTML = `
    <h3>${item.category}</h3>
    <p>${item.requirement}</p>
    <div class="card-tags">
      <span class="tag">${item.priority}</span>
      ${item.kpi ? '<span class="tag">KPI aligned</span>' : ""}
      ${item.feedback ? `<span class="tag">${item.feedback}</span>` : ""}
    </div>
  `;
  return card;
}

function renderRequirements(term = "") {
  Object.values(byPriority).forEach((column) => {
    column.innerHTML = "";
  });

  const normalized = term.trim().toLowerCase();
  const filtered = requirements.filter((item) => {
    const haystack = `${item.category} ${item.requirement} ${item.feedback}`.toLowerCase();
    return haystack.includes(normalized);
  });

  const counts = { "Must Have": 0, "Should Have": 0, "Other Haves": 0 };
  filtered.forEach((item) => {
    const priority = item.priority === "Must Have" || item.priority === "Should Have" ? item.priority : "Other Haves";
    counts[priority] += 1;
    byPriority[priority].appendChild(createRequirementCard({ ...item, priority }));
  });

  document.querySelector("#mustCount").textContent = counts["Must Have"];
  document.querySelector("#shouldCount").textContent = counts["Should Have"];
  document.querySelector("#otherCount").textContent = counts["Other Haves"];
}

function renderSteps() {
  const list = document.querySelector("#stepList");
  list.innerHTML = "";

  steps.forEach((step, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === 0 ? "active" : "";
    button.innerHTML = `
      <span class="step-number">${index + 1}</span>
      <span>
        <span class="step-title">${step.title}</span>
        <span class="step-meta">${step.meta}</span>
      </span>
      <span class="priority-chip">${step.priority}</span>
    `;
    button.addEventListener("click", () => selectStep(index));
    item.appendChild(button);
    list.appendChild(item);
  });

  selectStep(0);
}

function selectStep(index) {
  document.querySelectorAll("#stepList button").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
  });

  const step = steps[index];
  document.querySelector("#selectedStepTitle").textContent = step.title;
  document.querySelector("#selectedStepDetail").innerHTML = step.detail
    .map(
      ([label, text]) => `
        <article class="detail-row">
          <strong>${label}</strong>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");
}

function renderActivityCalendar() {
  const months = ["Activity", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const html = `
    <table>
      <thead>
        <tr>${months.map((month) => `<th>${month}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${activities
          .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
          .join("")}
      </tbody>
    </table>
  `;
  document.querySelector("#activityCalendar").innerHTML = html;
}

document.querySelector("#requirementSearch").addEventListener("input", (event) => {
  renderRequirements(event.target.value);
});

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-view]").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
  });
});

renderRequirements();
renderSteps();
renderActivityCalendar();
