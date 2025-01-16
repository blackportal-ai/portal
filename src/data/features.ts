import type { Feature } from '@/types/features';

export const deltaFeatures: Feature[] = [
  {
    title: 'Fast',
    text: 'Built with Rust, Δ is designed for high performance, making it ideal for compute-intensive machine learning tasks.',
  },
  {
    title: 'Usability',
    text: 'APIs are designed for simplicity, making it easy for beginners to get started while providing advanced customization options for experienced users.',
  },
  {
    title: 'Extensibility',
    text: 'The framework is modular, allowing users to plug in custom layers, optimizers, or preprocessing pipelines tailored to their unique needs.',
  },
  {
    title: 'Efficient and Scalable Tools',
    text: 'It provides highly efficient and scalable tools for building and training neural networks, supporting both small-scale experiments and large-scale production systems.',
  },
  {
    title: 'Distributed and Parallel Training',
    text: 'Native support for distributed and parallel training ensures that Delta scales effortlessly across multi-core systems and cloud environments.',
    isFuture: true,
  },
  {
    title: 'Classical ML',
    text: 'Includes support for classical ML algorithms such as decision trees, random forests, SVMs and more.',
    isFuture: true,
  },
  {
    title: 'Integration to Nebula',
    text: 'Direct access to datasets and models managed by the Nebula registry, public or private.',
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
