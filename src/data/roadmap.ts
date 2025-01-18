import type { RoadmapItem } from '@/types/roadmap';

export const deltaRoadmap: RoadmapItem[] = [
  {
    title: 'MVP of Delta',
    quarter: '2025 Q2',
    description: 'Introducing basic image classification tools, predefined datasets built in and custom dataset support. Also GPU acceleration on macOS. ',
  },
  {
    title: 'Transfer Learning & Nebula Integration',
    quarter: '2025 Q4',
    description: 'Introducing transfer learning capabilities in Delta and integration with Nebula for retrieving models and datasets easily.',
  },
];

export const nebulaRoadmap: RoadmapItem[] = [
  {
    title: 'MVP of Nebula',
    quarter: '2025 Q2',
    description: 'Introducing a data format specification for datasets and models and a registry API service. It also features a CLI tool for interacting with the registry.',
  },
];
