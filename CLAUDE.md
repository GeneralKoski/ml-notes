# CLAUDE.md - ml-notes

Repo indice e blog del percorso ML. Da qui si decide cosa viene dopo e si scrivono i post.

Questo file è la fonte di verità sul programma complessivo. Se una repo di progetto è in conflitto con quanto scritto qui, vince questo file.

## Cos'è questa repo

Sito statico piu indice dei progetti. Non contiene codice di machine learning: solo post, dati grezzi dei benchmark e script per rigenerare i grafici.

## Programma complessivo

| # | Repo | Progetto | Stato |
|---|---|---|---|
| 0 | (locale, privato) | Fondamenta: autograd e Transformer da zero | da fare |
| 1 | `gpu-quant-bench` | Benchmark formati e quantizzazioni | da fare |
| 2 | `rustann` | Vector DB in Rust: HNSW piu PQ | da fare |
| 3 | `crnn-ocr` | OCR da zero: CRNN piu CTC | da fare |
| 4 | `codesearch` | Ricerca semantica sul codice | da fare |
| 5 | `cuda-kernels` | Kernel CUDA a mano e profiling | da fare |
| 6 | `lora-lab` | Fine-tuning LoRA su dominio proprio | da fare |
| 7 | `smart-failure` | Guasti disco da dati SMART | da fare |
| 8 | `rl-from-scratch` | DQN, PPO, SAC da zero piu seed | da fare |
| - | `mlkit` | Utility condivise, nasce al bisogno | - |

**Aggiornare lo stato in questa tabella e in README.md è parte della chiusura di ogni progetto.**

L'ordine non è rigido dopo il 2. La regola è alternare un progetto GPU-bound e uno CPU-bound, mai due GPU insieme.

## Quando si apre un progetto nuovo

1. Verificare che il precedente sia chiuso: codice fermo, post pubblicato, repo resa pubblica, tabella aggiornata.
2. Creare la repo con il nome esatto della tabella, minuscolo e con trattini.
3. Copiare `CLAUDE.template.md` nella nuova repo come `CLAUDE.md` e compilarne le sezioni.
4. Scrivere il README con obiettivo, metrica e baseline **prima** di scrivere codice. Se non si sa cosa si misura, il progetto non è pronto per partire.

## Convenzioni tecniche condivise

Valgono in tutte le repo del percorso e sono descritte per esteso nel README:

- Vettori in `.npy` float32, con `meta.json` accanto.
- Contratto `search(query_vector, k) -> [(id, score)]`.
- Log esperimenti in `runs.jsonl`, una riga per run.
- Mai metriche da run singolo su esperimenti con varianza.

Se una convenzione cambia, si cambia qui e si annota la data. Non si riscrivono le repo chiuse per adeguarle.

## Come scrivere un post

Struttura fissa:

1. **Problema.** Cosa volevo sapere, in due frasi.
2. **Metodo.** Setup, hardware, cosa è stato tenuto fisso, cosa variato, quante ripetizioni.
3. **Risultati.** Tabelle e grafici prima del testo. Sempre con varianza, mai medie nude.
4. **Cosa non ha funzionato.** Obbligatorio. Un post senza questa sezione è marketing.
5. **Cosa rifarei.** Dove finiscono le idee venute troppo tardi.

Regole di scrittura:

- Italiano. In inglese solo le nomenclature tecniche.
- Ogni acronimo o termine non ovvio va esteso tra parentesi al primo uso, anche se informatico. Esempio: `PQ (Product Quantization)`, `CTC (Connectionist Temporal Classification)`.
- Diretto, niente preamboli e niente riempitivi. Se una frase si può togliere senza perdere significato, va tolta.
- **Mai em dash (`—`, U+2014) ne en dash (`–`, U+2013). Solo il trattino normale `-` (U+002D).** Vale anche per i file generati da script: dopo la generazione, verificare il testo estratto e non solo il sorgente.
- Numeri sempre accompagnati dall'hardware su cui sono stati ottenuti.
- Ogni post linka la repo e il commit esatto dei risultati.

## Bozze

Le bozze non stanno in `main`: questa repo è pubblica. Branch `draft/<slug>` oppure cartella ignorata da git. Un post a metà con numeri sbagliati indicizzato dai motori di ricerca è peggio di nessun post.

## Struttura

Generatore statico: Astro.

```
src/content/posts/   post pubblicati (markdown, collection "posts")
src/pages/           index dei progetti, indice post, pagina post, rss.xml
src/layouts/         BaseLayout (head, header, footer)
src/styles/          global.css
data/<progetto>/     risultati grezzi (jsonl, csv)
scripts/             rigenerazione grafici dai dati grezzi
public/              asset statici
```

## Comandi

```
npm run dev       # dev server
npm run build     # build statica in dist/
npm run preview   # anteprima della build

# deploy: nginx serve /srv/apps/ml-notes/dist sul VPS Hetzner
rsync -av --delete dist/ root@188.245.201.81:/srv/apps/ml-notes/dist/
```
