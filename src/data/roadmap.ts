import type { RoadmapItem } from '@/types/roadmap';

export const deltaRoadmap: RoadmapItem[] = [
  {
    "title": "MVP of Delta",
    "quarter": "2025 Q2",
    "description": "A minimal viable product introducing core classical machine learning algorithms including Linear Regression, Logistic Regression, Decision Trees, Random Forest, Support Vector Machines (SVM), and K-Nearest Neighbors (KNN), with basic data handling and model training support."
  },
  {
    "title": "Classical ML Expansion + Nebula Integration",
    "quarter": "2025 Q4",
    "description": "Expanding Delta with additional classical machine learning algorithms including Naive Bayes, K-Means Clustering, Principal Component Analysis (PCA), and Gradient Boosting (e.g., XGBoost, LightGBM), alongside integration with Nebula for seamless model sharing and dataset access."
  },
  {
    "title": "Core GPU Backend Support",
    "quarter": "2026 Q2",
    "description": "Adding GPU acceleration to Delta with Metal for macOS and CUDA for NVIDIA GPUs, enhancing performance for classical ML algorithms across major platforms."
  },
  {
    "title": "Cross-Platform GPU Expansion",
    "quarter": "2026 Q4",
    "description": "Expanding Delta’s backend support with OpenCL for cross-platform GPU acceleration and Vulkan for modern, portable GPU computing, optimizing classical ML workloads."
  },
  {
    "title": "Windows and Intel Backend Support",
    "quarter": "2027 Q2",
    "description": "Integrating DirectX12 for Windows GPU acceleration and SYCL for Intel’s heterogeneous computing, enhancing Delta’s reach for classical ML on diverse hardware."
  },
  {
    "title": "Specialized and Web Backend Support",
    "quarter": "2027 Q4",
    "description": "Completing Delta’s backend suite with TPUs for Google Cloud acceleration, WebGPU for web-based ML, and specialized OpenCL (CUDA) for NVIDIA compatibility, optimizing classical ML across all platforms."
  }
];

export const nebulaRoadmap: RoadmapItem[] = [
  {
    title: 'MVP of Nebula',
    quarter: '2025 Q2',
    description: 'Introducing a data format specification for datasets and models and a registry API service. It also features a CLI tool for interacting with the registry.',
  },
];
