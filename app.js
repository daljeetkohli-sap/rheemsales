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

const customers = [
  {
    name: "Tradelink Parramatta",
    meta: "RSS branch | High importance | Fortnightly call cycle",
    risk: "At risk: Medium",
    ytd: "$1.28M",
    ytdTrend: "+8.4% vs YA",
    mtd: "$146K",
    mtdTrend: "-3.1% vs region",
    gaps: "7 SKUs",
    urgent: "3 urgent replenishments",
    order: "$18.7K",
  },
  {
    name: "Reece Blacktown",
    meta: "Merchant | Strategic account | Weekly call cycle",
    risk: "At risk: Low",
    ytd: "$2.04M",
    ytdTrend: "+14.2% vs YA",
    mtd: "$238K",
    mtdTrend: "+6.5% vs region",
    gaps: "4 SKUs",
    urgent: "1 urgent replenishment",
    order: "$11.4K",
  },
  {
    name: "PlumbSmart Penrith",
    meta: "Plumber customer | Growth account | Monthly call cycle",
    risk: "At risk: High",
    ytd: "$482K",
    ytdTrend: "-6.8% vs YA",
    mtd: "$39K",
    mtdTrend: "-9.2% vs region",
    gaps: "9 SKUs",
    urgent: "5 urgent replenishments",
    order: "$24.1K",
  },
];

let selectedCustomerIndex = 0;
let selectedStepIndex = 0;
let visitStarted = false;
let generatedOrder = null;
let quoteReady = false;
let activeTimeframe = "cycle";
const completedSteps = new Set();
const savedRecords = [];

const timeframeViews = {
  today: {
    label: "Today View",
    title: "Today's branch visit execution",
    subtitle: "Focus on the steps due for the selected customer visit right now.",
    taskLimit: 4,
    taskMeta: "Due today",
  },
  week: {
    label: "Week View",
    title: "This week's customer call plan",
    subtitle: "Review the priority work across this week's visits and follow-ups.",
    taskLimit: 6,
    taskMeta: "Due this week",
  },
  cycle: {
    label: "Cycle View",
    title: "Branch visit plan and execution",
    subtitle: "Full sales-cycle plan across all requirement-led visit steps.",
    taskLimit: 8,
    taskMeta: "Sales cycle",
  },
};

const steps = [
  {
    title: "Sales Cycle Planning",
    priority: "Must Have",
    meta: "Cycle actions, priorities, training, launches",
    module: "Planning Hub",
    detail: [
      { label: "Cycle Pack", text: "May focus is heat pump upsell, Bulla 280L launch, and RSS stock health.", status: "Ready" },
      { label: "Priority Actions", text: "Review customer activity calendar, national priorities, trade marketing activities, and training tasks before arriving.", status: "Queued" },
      { label: "NPD Launch", text: "Bulla 280L R290 collateral loaded for branch discussion.", status: "Ready" },
    ],
  },
  {
    title: "Call Planning",
    priority: "Must Have",
    meta: "Visit schedule and branch objective",
    module: "Visit Planner",
    detail: [
      { label: "Visit Objective", text: "Secure replenishment for urgent stock gaps and book a 20-minute staff training session.", status: "Primary" },
      { label: "Call Cadence", text: "Fortnightly visit because the branch is high importance and trading below region this month.", status: "Due now" },
      { label: "Escalation", text: "If order approval stalls, escalate to NSW State GM with quote and gap evidence.", status: "Defined" },
    ],
  },
  {
    title: "Customer Profile",
    priority: "Must Have",
    meta: "Segmentation and rapport",
    module: "Segmentation and Profile",
    detail: [
      { label: "Segment", text: "RSS branch, high value, medium churn risk, plumbing and hot water specialist audience.", status: "High importance" },
      { label: "Call Frequency", text: "Fortnightly. Increase to weekly while branch is below region for two consecutive months.", status: "Recommended" },
      { label: "Greeting Note", text: "Store manager Sam follows NRL and prefers a concise visit with clear order recommendations.", status: "Should Have" },
    ],
  },
  {
    title: "Stock Take",
    priority: "Must Have",
    meta: "SKU gaps and ranged product checks",
    module: "Stock Take and Order Recommendation",
    detail: [
      { label: "Urgent Gaps", text: "Rheem 250L Heat Pump, Stellar 315L, and Longhorn accessory kit are below target holding.", status: "7 SKUs" },
      { label: "Usually Carried, Out of Stock", text: "Stellar 315L has been stocked on 8 of the last 10 visits and is currently at zero.", status: "Action" },
      { label: "Recommended Order", text: "Add 7 units across urgent SKUs for a projected $18.7K replenishment order.", status: "$18.7K" },
    ],
  },
  {
    title: "Sales Review",
    priority: "Must Have",
    meta: "MTD, YTD, region and national comparison",
    module: "Sales Benchmarking",
    detail: [
      { label: "Trading View", text: "YTD is +8.4% versus prior year, but MTD is -3.1% versus region.", status: "Mixed" },
      { label: "Category Signal", text: "Heat pump category is outperforming, while gas storage is lagging the national benchmark.", status: "Insight" },
      { label: "Comparator", text: "Parramatta is below NSW RSS average on gas storage by $21K MTD.", status: "Benchmark" },
    ],
  },
  {
    title: "Promotions and Training",
    priority: "Should Have",
    meta: "Campaigns, rewards, news, enablement",
    module: "Enablement Tasks",
    detail: [
      { label: "Promotion", text: "Share May hot water specialist rebate and June Longhorn launch collateral.", status: "Active" },
      { label: "Training", text: "Book Heat Pumps 101 for counter staff and capture attendance in the visit notes.", status: "Book" },
      { label: "Rewards", text: "Prompt branch to sign up 5 new Rheem Rewards members this month.", status: "Plumber channel" },
    ],
  },
  {
    title: "Competitor Capture",
    priority: "Must Have",
    meta: "Price points and screenshot upload",
    module: "Competitor Price Capture",
    detail: [
      { label: "Capture Target", text: "Capture at least 5 competitor SKUs, invoice price, shelf price, and multi-buy price.", status: "5 required" },
      { label: "Dummy Capture", text: "Thermann 250L HP: shelf $3,099, multi-buy $2,940, screenshot attached.", status: "Saved" },
      { label: "Reporting Path", text: "Price records flow to state and national competitor analysis.", status: "Reportable" },
    ],
  },
  {
    title: "Quote and Follow-up",
    priority: "Must Have",
    meta: "Professional quote and next actions",
    module: "Quote, Notes and Reporting",
    detail: [
      { label: "Quote", text: "Generate customer-ready quote for the recommended replenishment order.", status: "Draft ready" },
      { label: "Follow-up", text: "Send quote, log visit notes, create training task, and schedule the next fortnightly visit.", status: "4 actions" },
      { label: "Custom Reports", text: "Visit completion, stock gaps, competitor prices, training bookings, and value-added order reporting.", status: "Other Haves" },
    ],
  },
];

const stockRows = [
  ["Rheem 250L Heat Pump", "Target 4", "On hand 1", "Recommend 3"],
  ["Stellar 315L", "Target 2", "On hand 0", "Recommend 2"],
  ["Longhorn Accessory Kit", "Target 5", "On hand 3", "Recommend 2"],
];

const salesRows = [
  ["Heat Pumps", "$312K", "+18.2%", "+6.4% vs region"],
  ["Gas Storage", "$221K", "-4.8%", "-$21K vs region"],
  ["Continuous Flow", "$418K", "+7.1%", "+1.2% vs national"],
];

const competitorRows = [
  ["Thermann 250L HP", "$2,940", "$3,099", "Screenshot saved"],
  ["Rinnai 26L", "$1,145", "$1,249", "Needs invoice"],
  ["Emerald Energy 250L", "$2,720", "$2,899", "Verified"],
];

const coverage = [
  ["Sales cycle planning", "Planning Hub", "Must Have"],
  ["Call planning", "Visit Planner", "Must Have"],
  ["Customer segmentation and profiling", "Segmentation and Profile", "Must Have"],
  ["Stock check and stock history", "Stock Take and Order Recommendation", "Must Have"],
  ["Recommended order", "Stock Take and Order Recommendation", "Must Have"],
  ["Sales review and comparators", "Sales Benchmarking", "Must Have"],
  ["Promotions, rewards, training and news", "Enablement Tasks", "Should Have"],
  ["Competitor SKU and price capture", "Competitor Price Capture", "Must Have"],
  ["Quotes and customer-ready output", "Quote, Notes and Reporting", "Must Have"],
  ["Reports, mobile access, pricing, surveys, customer risk", "Traceability and responsive UI", "Other Haves"],
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

function renderSteps(activateSelected = true) {
  const list = document.querySelector("#stepList");
  list.innerHTML = "";

  steps.forEach((step, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === selectedStepIndex ? "active" : "";
    button.innerHTML = `
      <span class="step-number">${index + 1}</span>
      <span>
        <span class="step-title">${step.title}</span>
        <span class="step-meta">${step.meta}</span>
      </span>
      <span class="priority-chip">${completedSteps.has(index) ? "Done" : step.priority}</span>
    `;
    button.addEventListener("click", () => selectStep(index));
    item.appendChild(button);
    list.appendChild(item);
  });

  if (activateSelected) {
    selectStep(selectedStepIndex);
  }
}

function selectStep(index) {
  selectedStepIndex = index;
  switchScreen("visit");
  document.querySelectorAll("#stepList button").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
  });

  const step = steps[index];
  document.querySelector("#selectedStepTitle").textContent = step.title;
  document.querySelector("#selectedStepDetail").innerHTML = `
    <div class="module-summary">
      <span>${step.module}</span>
      <strong>${step.priority}</strong>
    </div>
    <div class="detail-card-grid">
      ${step.detail
        .map(
          (item) => `
            <article class="detail-row">
              <div class="detail-row-heading">
                <strong>${item.label}</strong>
                <span class="tag">${item.status}</span>
              </div>
              <p>${item.text}</p>
            </article>
          `,
        )
        .join("")}
    </div>
    ${renderModuleWorkspace(step.title)}
  `;
  wireModuleActions(step.title);
}

function renderRows(rows) {
  return `
    <div class="data-table">
      ${rows
        .map(
          (row) => `
            <div class="data-row">
              ${row.map((cell) => `<span>${cell}</span>`).join("")}
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderModuleWorkspace(title) {
  if (title === "Stock Take") {
    const totalLabel = generatedOrder ? `Recommended order created: ${generatedOrder}` : "No order created yet";
    return `
      <section class="module-workspace">
        <div class="module-workspace-heading">
          <h3>Live stock take</h3>
          <span class="tag">${totalLabel}</span>
        </div>
        ${renderRows(stockRows)}
        <div class="quantity-editor">
          <label>Rheem 250L HP <input type="number" min="0" value="3" data-order-input /></label>
          <label>Stellar 315L <input type="number" min="0" value="2" data-order-input /></label>
          <label>Longhorn Kit <input type="number" min="0" value="2" data-order-input /></label>
        </div>
        <button type="button" id="createOrderBtn">Create recommended order</button>
      </section>
    `;
  }

  if (title === "Sales Review") {
    return `
      <section class="module-workspace">
        <h3>Sales review by category</h3>
        ${renderRows(salesRows)}
        <textarea id="benchmarkNote" placeholder="Add customer-facing benchmark note"></textarea>
        <button type="button" id="saveBenchmarkBtn">Save benchmark note</button>
      </section>
    `;
  }

  if (title === "Competitor Capture") {
    return `
      <section class="module-workspace">
        <h3>Competitor price capture</h3>
        ${renderRows(competitorRows)}
        <div class="capture-form">
          <input id="competitorSku" type="text" placeholder="Competitor SKU" />
          <input id="competitorPrice" type="text" placeholder="Shelf price" />
          <button type="button" id="saveCompetitorBtn">Save competitor price</button>
        </div>
      </section>
    `;
  }

  if (title === "Quote and Follow-up") {
    return `
      <section class="module-workspace">
        <div class="module-workspace-heading">
          <h3>Follow-up actions</h3>
          <span class="tag">${quoteReady ? "Quote generated" : "Quote not generated"}</span>
        </div>
        <div class="action-checklist">
          <label><input type="checkbox" checked /> Generate replenishment quote</label>
          <label><input type="checkbox" checked /> Email quote to customer</label>
          <label><input type="checkbox" /> Create training task</label>
          <label><input type="checkbox" /> Schedule next visit</label>
        </div>
        <button type="button" id="generateQuoteBtn">Generate quote</button>
      </section>
    `;
  }

  return `
    <section class="module-workspace">
      <h3>Rep actions</h3>
      <div class="action-checklist">
        <label><input type="checkbox" checked /> Review requirement-led data</label>
        <label><input type="checkbox" /> Capture customer note</label>
        <label><input type="checkbox" /> Add follow-up task</label>
      </div>
      <button type="button" id="completeStepBtn">Mark step complete</button>
    </section>
  `;
}

function wireModuleActions(title) {
  const completeStepBtn = document.querySelector("#completeStepBtn");
  if (completeStepBtn) {
    completeStepBtn.addEventListener("click", () => {
      completedSteps.add(selectedStepIndex);
      addRecord("Step completed", title);
      showToast(`${title} marked complete`);
      renderSteps();
      goToNextStep();
    });
  }

  const createOrderBtn = document.querySelector("#createOrderBtn");
  if (createOrderBtn) {
    createOrderBtn.addEventListener("click", () => {
      const units = [...document.querySelectorAll("[data-order-input]")].reduce((total, input) => total + Number(input.value || 0), 0);
      generatedOrder = `${units} units`;
      document.querySelector("#metricOrder").textContent = units >= 8 ? "$27.2K" : "$18.7K";
      addRecord("Recommended order", `${units} units created from stock take`);
      showToast(`Recommended order created for ${units} units`);
      selectStep(selectedStepIndex);
    });
  }

  const saveBenchmarkBtn = document.querySelector("#saveBenchmarkBtn");
  if (saveBenchmarkBtn) {
    saveBenchmarkBtn.addEventListener("click", () => {
      const note = document.querySelector("#benchmarkNote").value.trim();
      if (note) addRecord("Benchmark note", note);
      showToast(note ? "Benchmark note saved to visit notes" : "Add a note before saving");
    });
  }

  const saveCompetitorBtn = document.querySelector("#saveCompetitorBtn");
  if (saveCompetitorBtn) {
    saveCompetitorBtn.addEventListener("click", () => {
      const sku = document.querySelector("#competitorSku").value.trim();
      const price = document.querySelector("#competitorPrice").value.trim();
      if (sku && price) addRecord("Competitor price", `${sku}: ${price}`);
      showToast(sku && price ? `Saved ${sku} at ${price}` : "Enter SKU and price to save");
    });
  }

  const generateQuoteBtn = document.querySelector("#generateQuoteBtn");
  if (generateQuoteBtn) {
    generateQuoteBtn.addEventListener("click", () => {
      quoteReady = true;
      addRecord("Quote generated", `${customers[selectedCustomerIndex].name} replenishment quote`);
      showToast("Customer quote generated and ready to email");
      selectStep(selectedStepIndex);
    });
  }
}

function goToNextStep() {
  const nextIndex = Math.min(selectedStepIndex + 1, steps.length - 1);
  selectStep(nextIndex);
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function addRecord(type, detail) {
  savedRecords.unshift({
    type,
    detail,
    customer: customers[selectedCustomerIndex].name,
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  });
  renderActivityFeed();
  renderTaskBoard();
  renderReports();
}

function switchScreen(screen) {
  document.querySelectorAll("[data-screen-section]").forEach((section) => {
    section.classList.toggle("active", section.dataset.screenSection === screen);
  });
  document.querySelectorAll("[data-screen]").forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === screen);
  });
}

function renderTaskBoard() {
  const taskBoard = document.querySelector("#taskBoard");
  const timeframe = timeframeViews[activeTimeframe];
  taskBoard.innerHTML = steps
    .slice(0, timeframe.taskLimit)
    .map(
      (step, index) => `
        <article class="task-item">
          <div>
            <strong>${step.title}</strong>
            <small>${completedSteps.has(index) ? "Completed" : `${timeframe.taskMeta} | ${step.meta}`}</small>
          </div>
          <button type="button" data-task-step="${index}">${completedSteps.has(index) ? "Review" : "Open"}</button>
        </article>
      `,
    )
    .join("");

  taskBoard.querySelectorAll("[data-task-step]").forEach((button) => {
    button.addEventListener("click", () => selectStep(Number(button.dataset.taskStep)));
  });
}

function setTimeframe(view) {
  activeTimeframe = view;
  const config = timeframeViews[view];
  document.querySelector("#dashboardModeLabel").textContent = config.label;
  document.querySelector("#dashboardTitle").textContent = config.title;
  document.querySelector("#dashboardSubtitle").textContent = config.subtitle;
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.view === view);
  });
  renderTaskBoard();
  showToast(`${config.label} loaded`);
}

function renderActivityFeed() {
  const feed = document.querySelector("#activityFeed");
  if (!savedRecords.length) {
    feed.innerHTML = `
      <article class="feed-item">
        <strong>No saved activity yet</strong>
        <small>Start a visit, complete a step, create an order, capture competitor pricing, or generate a quote.</small>
      </article>
    `;
    return;
  }

  feed.innerHTML = savedRecords
    .slice(0, 8)
    .map(
      (record) => `
        <article class="feed-item">
          <strong>${record.type}</strong>
          <small>${record.customer} | ${record.time}</small>
          <small>${record.detail}</small>
        </article>
      `,
    )
    .join("");
}

function renderReports() {
  document.querySelector("#reportCompleted").textContent = `${completedSteps.size}/${steps.length}`;
  document.querySelector("#reportRecords").textContent = savedRecords.length;
  document.querySelector("#reportQuote").textContent = quoteReady ? "Ready" : "Pending";
  document.querySelector("#reportOrder").textContent = generatedOrder || "Pending";
  document.querySelector("#reportPreview").innerHTML = `
    <article class="feed-item">
      <strong>${customers[selectedCustomerIndex].name}</strong>
      <small>${customers[selectedCustomerIndex].meta}</small>
      <small>${completedSteps.size} visit steps completed, ${savedRecords.length} records saved, order ${generatedOrder || "pending"}, quote ${quoteReady ? "ready" : "pending"}.</small>
    </article>
  `;
}

function renderCustomers() {
  const switcher = document.querySelector("#customerSwitcher");
  switcher.innerHTML = customers
    .map(
      (customer, index) => `
        <button type="button" class="${index === selectedCustomerIndex ? "selected" : ""}" data-customer-index="${index}">
          ${customer.name}
        </button>
      `,
    )
    .join("");

  switcher.querySelectorAll("[data-customer-index]").forEach((button) => {
    button.addEventListener("click", () => selectCustomer(Number(button.dataset.customerIndex)));
  });
}

function selectCustomer(index) {
  selectedCustomerIndex = index;
  const customer = customers[index];
  document.querySelector("#customerName").textContent = customer.name;
  document.querySelector("#customerMeta").textContent = customer.meta;
  document.querySelector("#customerRisk").textContent = customer.risk;
  document.querySelector("#metricYtd").textContent = customer.ytd;
  document.querySelector("#metricYtdTrend").textContent = customer.ytdTrend;
  document.querySelector("#metricMtd").textContent = customer.mtd;
  document.querySelector("#metricMtdTrend").textContent = customer.mtdTrend;
  document.querySelector("#metricGaps").textContent = customer.gaps;
  document.querySelector("#metricUrgent").textContent = customer.urgent;
  document.querySelector("#metricOrder").textContent = customer.order;
  generatedOrder = null;
  quoteReady = false;
  renderCustomers();
  renderTaskBoard();
  renderReports();
  selectedStepIndex = 0;
  renderSteps(false);
  switchScreen("dashboard");
  showToast(`${customer.name} loaded`);
}

function renderCoverage() {
  document.querySelector("#coverageGrid").innerHTML = coverage
    .map(
      ([requirement, capability, priority], index) => `
        <article class="coverage-card" data-coverage-step="${Math.min(index, steps.length - 1)}">
          <span class="tag">${priority}</span>
          <strong>${capability}</strong>
          <p>${requirement}</p>
        </article>
      `,
    )
    .join("");

  document.querySelectorAll("[data-coverage-step]").forEach((card) => {
    card.addEventListener("click", () => selectStep(Number(card.dataset.coverageStep)));
  });
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
    setTimeframe(button.dataset.view);
  });
});

document.querySelectorAll("[data-screen]").forEach((button) => {
  button.addEventListener("click", () => switchScreen(button.dataset.screen));
});

document.querySelectorAll("[data-open-visit]").forEach((button) => {
  button.addEventListener("click", () => selectStep(selectedStepIndex));
});

document.querySelector("#exportReportBtn").addEventListener("click", () => {
  addRecord("Report exported", "Visit summary prepared for manager visibility");
  showToast("Report summary exported");
});

document.querySelector("#startVisitBtn").addEventListener("click", () => {
  if (!visitStarted) {
    visitStarted = true;
    document.querySelector("#startVisitBtn").textContent = "Advance Step";
    addRecord("Visit started", "Requirement-led call workflow opened");
    showToast("Visit started. Work through each requirement module.");
    selectStep(0);
    return;
  }

  completedSteps.add(selectedStepIndex);
  addRecord("Step completed", steps[selectedStepIndex].title);
  goToNextStep();
  renderSteps(false);
  renderTaskBoard();
  showToast(`Advanced to ${steps[selectedStepIndex].title}`);
});

renderCustomers();
renderRequirements();
renderSteps();
renderActivityCalendar();
renderCoverage();
renderTaskBoard();
renderActivityFeed();
renderReports();
switchScreen("dashboard");
setTimeframe("cycle");
