export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
}

export const jobPostings: JobPosting[] = [
  {
    id: "plant-breeder-001",
    title: "Senior Plant Breeder",
    department: "Research & Development",
    location: "Main Research Facility",
    type: "Full-time",
    description:
      "Join our R&D team to develop next-generation seed varieties with enhanced yield and disease resistance.",
    requirements: [
      "PhD in Plant Breeding, Genetics, or related field",
      "5+ years experience in commercial plant breeding",
      "Strong knowledge of molecular breeding techniques",
      "Experience with field trial management",
      "Excellent analytical and communication skills",
    ],
    responsibilities: [
      "Lead breeding programs for assigned crops",
      "Design and execute field trials",
      "Analyze breeding data and make selection decisions",
      "Collaborate with cross-functional teams",
      "Present findings to stakeholders",
    ],
    postedDate: "2024-01-20",
  },
  {
    id: "quality-control-002",
    title: "Quality Control Specialist",
    department: "Quality Assurance",
    location: "Production Facility",
    type: "Full-time",
    description: "Ensure our seeds meet the highest quality standards through rigorous testing and analysis.",
    requirements: [
      "Bachelor's degree in Agriculture, Biology, or related field",
      "3+ years in seed quality testing",
      "Knowledge of seed testing protocols and standards",
      "Attention to detail and analytical skills",
      "Proficiency in laboratory equipment operation",
    ],
    responsibilities: [
      "Conduct germination and purity tests",
      "Maintain quality control documentation",
      "Ensure compliance with certification standards",
      "Identify and report quality issues",
      "Participate in continuous improvement initiatives",
    ],
    postedDate: "2024-01-18",
  },
  {
    id: "agronomist-003",
    title: "Field Agronomist",
    department: "Technical Services",
    location: "Multiple Locations",
    type: "Full-time",
    description: "Provide technical support to farmers and distributors, ensuring successful crop production.",
    requirements: [
      "Bachelor's degree in Agronomy or related field",
      "2+ years field experience",
      "Strong communication and presentation skills",
      "Valid driver's license",
      "Willingness to travel extensively",
    ],
    responsibilities: [
      "Provide agronomic recommendations to customers",
      "Conduct field demonstrations and training",
      "Monitor crop performance and troubleshoot issues",
      "Collect field data and feedback",
      "Build strong customer relationships",
    ],
    postedDate: "2024-01-15",
  },
];
