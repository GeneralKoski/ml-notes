# ml-notes

Technical blog and index of a self-directed learning path on machine learning, inference systems and information retrieval.

Every project lives in its own repository and ends with a post here. Raw benchmark data is kept in `data/`, so every chart can be regenerated from source.

## The path

| # | Repo | Project | Status | Post |
|---|---|---|---|---|
| 0 | (local, private) | Foundations: autograd and a Transformer from scratch | planned | - |
| 1 | `gpu-quant-bench` | Format and quantization benchmark on an RTX 3060 | planned | - |
| 2 | `rustann` | Vector database in Rust: HNSW and Product Quantization | planned | - |
| 3 | `crnn-ocr` | OCR from scratch: CRNN with CTC loss on synthetic data | planned | - |
| 4 | `codesearch` | Semantic code search | planned | - |
| 5 | `cuda-kernels` | Hand-written CUDA kernels and profiling | planned | - |
| 6 | `lora-lab` | LoRA fine-tuning on a domain of my own | planned | - |
| 7 | `smart-failure` | Disk failure prediction from SMART data (Backblaze) | planned | - |
| 8 | `rl-from-scratch` | DQN, PPO and SAC from scratch, plus a study on seed variance | planned | - |
| - | `mlkit` | Shared utilities. Created when needed, not before | - | - |

Statuses: `planned`, `in progress`, `done`, `abandoned`. Abandoned projects stay in the table with the reason. One honest failure is worth more than a hidden one.

## Dependencies between projects

```
1 gpu-quant-bench ──> 5 cuda-kernels        (reference baseline)
2 rustann ──> 4 codesearch                  (the index)
2 rustann <── 5 cuda-kernels                (distances on GPU)
3 crnn-ocr ──> 4 codesearch                 (a source of text to index)
6 lora-lab ──> 4 codesearch                 (domain-specific embeddings)
7, 8                                        (standalone)
```

## Conventions shared across every repository

**Embeddings and vectors.** Stored as `.npy`, `float32`, an `(n, dim)` matrix with a separate ID array. Every vector set ships with a `meta.json`: model used, dimensionality, whether vectors are normalized, date, and the commit that produced them.

**Retrieval contract.** Every search system exposes `search(query_vector, k) -> [(id, score)]`, where a higher score means more relevant. This is what makes BM25, `rustann`, pgvector and Qdrant interchangeable inside the same benchmark.

**Experiment log.** A single `runs.jsonl` file, one line per run:

```json
{
  "run_id": "2026-09-14T21-03-11-a1b2c3",
  "project": "gpu-quant-bench",
  "git_commit": "a1b2c3d",
  "config": {},
  "seed": 0,
  "hardware": {"gpu": "RTX 3060 12GB", "cpu": "Ryzen 5 8500G", "ram_gb": 32},
  "metrics": {},
  "duration_s": 0.0,
  "notes": ""
}
```

No metric is ever reported from a single run when the experiment has variance: at least 3 repetitions, 5 to 10 seeds where it makes sense.

## Process rules

1. **At most two active projects**, and never two that are both GPU-bound. One runs, the other gets written.
2. **A project ends with a post.** No post, no closure.
3. **Repository stays private until the post ships, then goes public**, with no extra cleanup. The trigger is publication, not how pretty the code looks.
4. **An ugly but working version within two weeks.** If nothing runs after two weeks, the scope was wrong: cut it.
5. **Closed projects are not reopened.** The best ideas always arrive late: they go in the "what I would do differently" section of the post, not into a new branch.
6. **`mlkit` only accepts code used by at least two projects**, never speculative abstractions.

## Reference hardware

RTX 3060 12 GB GDDR6, Ryzen 5 8500G, 32 GB RAM. Everything runs locally, with no cloud spend. Published numbers hold for this machine and are always reported as such.

## How posts are written

Fixed structure: the problem, how I measured it, what came out, what did not work, what I would do differently. Numbers before opinions. Every post links the repository and the exact commit the results were produced on.
