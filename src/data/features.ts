import type { Feature } from '@/types/features';

export const deltaFeatures: Feature[] = [
  {
    title: "Fast",
    text: "Built with Rust, Delta delivers high-performance machine learning, optimized for compute-intensive tasks on CPU and future GPU backends.",
  },
  {
    title: "Usability",
    text: "Simple APIs make Delta accessible for beginners, with flexible options for advanced users to customize ML workflows.",
  },
  {
    title: "Extensibility",
    text: "Modular design allows users to extend Delta with custom preprocessing, algorithms, or evaluation metrics tailored to ML needs.",
  },
  {
    title: "Classical ML",
    text: "Supports a growing suite of classical ML algorithms, including Linear Regression, Decision Trees, Random Forest, SVM, KNN, and more, with expansions like Naive Bayes and Gradient Boosting.",
  },
  {
    title: "Multi-Backend Acceleration",
    text: "Currently supports CPU, with planned support for Metal, CUDA, Vulkan, and more, enabling efficient classical ML across diverse hardware.",
    isFuture: true, 
  },
  {
    title: "Nebula Integration",
    text: "Seamless access to datasets pre-trained models via Nebula, enhancing collaboration and reproducibility.",
    isFuture: true, 
  },
  {
    title: "Scalable Training",
    text: "Future parallel and distributed training for classical ML, evolving to support large-scale deep learning models across multi-core and cloud systems.",
    isFuture: true,
  },
];

export const nebulaFeatures: Feature[] = [
  {
    title: 'Command-line tool',
    text: 'Manage datasets and models directly from a powerful CLI, providing full control over your workflow without leaving the terminal.',
    isFuture: true,
  },
  {
    title: 'Virtual environments',
    text: 'Run multiple ML projects on the same machine without conflicts, ensuring that dependencies are isolated for seamless development.',
    isFuture: true,
  },
  {
    title: 'Dataset management',
    text: 'Organize datasets efficiently by metadata, versions, variants, dependencies, and lifecycles, enabling easy tracking and reproducibility.',
    isFuture: true,
  },
  {
    title: 'Pretrained models',
    text: 'Access and manage pretrained models with versioning and adaptations, enabling easy integration into your projects and reducing time spent on training.',
    isFuture: true,
  },
  {
    title: 'Template projects',
    text: 'Use prebuilt templates based on the Delta framework for faster setup, allowing you to quickly begin experiments with minimal configuration.',
    isFuture: true,
  },
  {
    title: 'Public registry',
    text: 'Browse datasets and models shared by the community in the Nebula registry, ensuring access to high-quality resources for your projects.',
    isFuture: true,
  },
  {
    title: 'Private registry',
    text: 'Host your own Nebula registry for secure and confidential work, keeping sensitive data and models private while maintaining efficient access management.',
    isFuture: true,
  },
];
