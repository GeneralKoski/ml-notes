export interface Project {
  n: string;
  name: string;
  status: string;
  repo: string;
  post: string;
}

export const projects: Project[] = [
  { n: '0', name: 'Foundations: autograd and a Transformer from scratch', status: 'planned', repo: 'foundations', post: '-' },
  { n: '1', name: 'Format and quantization benchmark on an RTX 3060', status: 'planned', repo: 'gpu-quant-bench', post: '-' },
  { n: '2', name: 'Vector database in Rust: HNSW and Product Quantization', status: 'planned', repo: 'rustann', post: '-' },
  { n: '3', name: 'OCR from scratch: CRNN with CTC loss on synthetic data', status: 'planned', repo: 'crnn-ocr', post: '-' },
  { n: '4', name: 'Semantic code search', status: 'planned', repo: 'codesearch', post: '-' },
  { n: '5', name: 'Hand-written CUDA kernels and profiling', status: 'planned', repo: 'cuda-kernels', post: '-' },
  { n: '6', name: 'LoRA fine-tuning on a domain of my own', status: 'planned', repo: 'lora-lab', post: '-' },
  { n: '7', name: 'Disk failure prediction from SMART data (Backblaze)', status: 'planned', repo: 'smart-failure', post: '-' },
  { n: '8', name: 'DQN, PPO and SAC from scratch, plus a study on seed variance', status: 'planned', repo: 'rl-from-scratch', post: '-' },
  { n: '-', name: 'Shared utilities. Created when needed, not before', status: '-', repo: 'mlkit', post: '-' },
];
