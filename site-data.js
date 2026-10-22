/* Edit this file to update the website. No build step required.
   公开信息尚未确认时保持空字符串；不要填写猜测的学校、任职或结果。
   Add appointments as { course, institution, role, period, description }.
   Paper titles below are descriptive working titles, not publication claims. */
window.SITE_DATA = {
  profile: {
    name: "Qiming",
    affiliation: "",
    email: "",
    github: "https://github.com/2016202567zqm-sudo"
  },
  papers: [
    {
      number: "01", driver: "PUBLIC POLICY", status: "Research in progress",
      title: "Bike-Sharing Rollout and Transport Substitution in Taiwan",
      question: "How does the expansion of YouBike change motorcycle use and public transport demand?",
      summary: "This project studies the staggered rollout of YouBike and YouBike 2.0 across Taiwanese cities and counties. The current research direction examines transport substitution, using free-ride subsidies as an additional dimension of policy intensity.",
      tags: ["Taiwan · YouBike", "City–month panel", "Staggered adoption"],
      abstract: "The expansion of bike-sharing systems changes the availability and cost of short urban trips. This project asks how that expansion relates to motorcycle use and bus demand in a motorcycle-intensive transport setting. The empirical design centers on variation in the timing of YouBike and YouBike 2.0 rollout across cities and counties. Free-ride subsidies provide an additional measure of policy intensity. The analysis is being developed around a monthly panel, fixed effects, and staggered-adoption difference-in-differences, with attention to treatment timing, comparison groups, and pre-treatment trends.",
      focus: "Panel construction, rollout coding, and empirical design for transport substitution.",
      pdf: "", slides: ""
    },
    {
      number: "02", driver: "PLATFORM DESIGN", status: "Research in progress",
      title: "Platform Fees and Two-Sided Matching in Shared Mobility",
      question: "When fees change, do more passenger requests translate into more successful matches?",
      summary: "This project examines how platform fee changes relate to passenger participation, driver responses, and final matching outcomes. Observing both sides of the market makes it possible to study the path from requests to confirmations, alongside changes in request composition and available capacity.",
      tags: ["Two-sided markets", "Pricing & participation", "Matching outcomes"],
      abstract: "Passenger demand is only one part of a platform’s response to a fee change. More requests may also change who participates, how drivers select requests, and how limited seat capacity is allocated. This project connects platform pricing to the matching process by examining passenger requests and confirmed matches together with driver-side responses. The research setting includes both decreases and increases in fees, motivating analysis of potentially asymmetric responses. The empirical interpretation depends on the precise fee rules, exposure measures, and available identifiers; completed causal findings are not reported here.",
      focus: "Baseline-result interpretation, matching measures, mechanisms, and the comparison of fee decreases and increases.",
      pdf: "", slides: ""
    },
    {
      number: "03", driver: "CONSUMER CHOICE", status: "Research in progress",
      title: "Willingness to Pay for Shared Mobility: Daytime versus Nighttime Travel",
      question: "How does the value of shared-mobility attributes change between day and night?",
      summary: "This project uses conjoint analysis to study preferences for shared mobility across daytime and nighttime travel contexts. It examines how context changes the trade-offs travelers make and their willingness to pay for service attributes.",
      tags: ["Conjoint analysis", "Willingness to pay", "Day & night travel"],
      abstract: "The same mobility service may be valued differently depending on the context of a trip. This project studies that variation by comparing preferences for shared-mobility attributes in daytime and nighttime travel. Conjoint analysis provides a framework for estimating attribute trade-offs and willingness to pay within each context. The central distinction is the time of travel. The project contributes the consumer-choice perspective to a broader dissertation on pricing incentives in shared mobility markets.",
      focus: "Conjoint-based comparison of daytime and nighttime preferences. Detailed estimation progress will be added with the next project update.",
      pdf: "", slides: ""
    }
  ],
  appointments: [],
  teachingPlaceholder: "Formal appointment details will be added here, including institution, course, role, and academic year.",
  courses: [
    { title: "Econometrics & Causal Inference", context: "Teaching materials in development", description: "Regression discontinuity, difference-in-differences, fixed effects, and the interpretation of empirical evidence." },
    { title: "Innovation, Growth & AI", context: "Teaching materials in development", description: "Economic growth, innovation incentives, and the policy implications of artificial intelligence." }
  ]
};
