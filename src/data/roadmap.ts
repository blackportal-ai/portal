import type { RoadmapItem } from '@/types/roadmap';

export const deltaRoadmap: RoadmapItem[] = [
  {
    "title": "MVP of Delta",
    "quarter": "2025 Q2",
    "description": "A minimal viable product introducing core classical machine learning algorithms including Linear Regression and Logistic Regression with basic data handling and model training support."
  },
  {
    "title": "Classical ML Expansion + ",
    "quarter": "2025 Q4",
    "description": "Expanding Delta with additional classical machine learning algorithms including Decision Trees, Random Forest, Support Vector Machines (SVM), K-Nearest Neighbors (KNN), Naive Bayes, K-Means Clustering, Principal Component Analysis (PCA), and Gradient Boosting (e.g., XGBoost, LightGBM)."
  },
  {
    "title": "Nebula Integration",
    "quarter": "2026 Q2",
    "description": "Introducing integration with Nebula for seamless model sharing and dataset access."
  },
  {
    "title": "Core GPU Backend Support",
    "quarter": "2026 Q4",
    "description": "Adding GPU acceleration to Delta with Metal for macOS and CUDA for NVIDIA GPUs, enhancing performance for classical ML algorithms across major platforms."
  },
  {
    "title": "Cross-Platform GPU Expansion",
    "quarter": "2027 Q2",
    "description": "Expanding Delta’s backend support with OpenCL for cross-platform GPU acceleration and Vulkan for modern, portable GPU computing, optimizing classical ML workloads."
  },
];

export const nebulaRoadmap: RoadmapItem[] = [
  {
    title: 'Nebula CLI and Registry Prototypes',
    quarter: '2025 Q2',
    description: 'Prototypes for a CLI client to install datasets and models from a Nebula registry and a read-only registry serving assets from the filesystem.',
  },
  {
    title: 'MVP of Nebula',
    quarter: '2025 Q4',
    description: 'Introduction of a standardized data format for datasets and models, a registry API service, and a CLI tool with functionality to search and filter available assets.',
  },
  {
    title: 'Nebula - Creator Expansion',
    quarter: '2026 Q2',
    description: 'Enable the Nebula CLI to create new datasets and models through transfer learning or data augmentation, with functionality to share them back to the registry.'
  },
  {
    title: 'Embedded Support',
    quarter: '2026 Q4',
    description: 'Introduce a lightweight Nebula client for embedded devices to collect training data and deploy updated models seamlessly via wired or wireless connections.'
  }
];
