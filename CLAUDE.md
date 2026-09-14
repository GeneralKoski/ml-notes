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

**Aggiornare lo stato in questa tabella e in README.md è parte della chiusura di ogni progetto.** La stessa tabella è pubblicata sul sito e i suoi dati vivono in `src/data/projects.ts`: le tre copie vanno tenute allineate.

L'ordine non è rigido dopo il 2. La regola è alternare un progetto GPU-bound e uno CPU-bound, mai due GPU insieme.

Macchine: i progetti che toccano la GPU stanno sul fisso (RTX 3060), il resto gira anche su Mac. Niente percorsi locali o ambienti virtuali versionati, altrimenti cambiare postazione diventa un conflitto.

## Quando si apre un progetto nuovo

1. Verificare che il precedente sia chiuso: codice fermo, post pubblicato, repo resa pubblica, tabella aggiornata.
2. Creare la repo con il nome esatto della tabella, minuscolo e con trattini, privata.
3. Copiare `CLAUDE.template.md` nella nuova repo come `CLAUDE.md` e compilarne le sezioni.
4. Scrivere il README con domanda, metrica e baseline **prima** di scrivere codice. Se non si sa cosa si misura, il progetto non è pronto per partire.

La prima sessione di un progetto nuovo non produce codice, produce la definizione di cosa si misura.

## Convenzioni tecniche condivise

Valgono in tutte le repo del percorso e sono descritte per esteso nel README:

- Vettori in `.npy` float32, con `meta.json` accanto.
- Contratto `search(query_vector, k) -> [(id, score)]`.
- Log esperimenti in `runs.jsonl`, una riga per run.
- Mai metriche da run singolo su esperimenti con varianza.

Se una convenzione cambia, si cambia qui e si annota la data. Non si riscrivono le repo chiuse per adeguarle.

## Come scrivere un post

I post del sito sono **in inglese**. Questo file e le istruzioni interne restano in italiano.

Struttura fissa:

1. **Problem.** Cosa volevo sapere, in due frasi.
2. **Method.** Setup, hardware, cosa è stato tenuto fisso, cosa variato, quante ripetizioni.
3. **Results.** Tabelle e grafici prima del testo. Sempre con varianza, mai medie nude.
4. **What did not work.** Obbligatorio. Un post senza questa sezione è marketing.
5. **What I would do differently.** Dove finiscono le idee venute troppo tardi.

Regole di scrittura:

- Inglese tecnico asciutto. Frasi corte, niente preamboli, niente riempitivi. Se una frase si può togliere senza perdere significato, va tolta.
- Ogni acronimo non ovvio va esteso tra parentesi al primo uso, anche se informatico. Esempio: `PQ (Product Quantization)`, `CTC (Connectionist Temporal Classification)`.
- **Mai em dash (`—`, U+2014) ne en dash (`–`, U+2013). Solo il trattino normale `-` (U+002D).** Vale anche per i file generati da script: dopo la generazione, verificare il testo estratto e non solo il sorgente.
- Numeri sempre accompagnati dall'hardware su cui sono stati ottenuti.
- Ogni post linka la repo e il commit esatto dei risultati.

## Bozze

Un post non finito ha `draft: true` nel frontmatter: resta visibile in `npm run dev` e non viene buildato in produzione. Non serve un branch separato.

Il flag passa a `false` solo quando il post è pronto per uscire. Un post a metà con numeri sbagliati indicizzato dai motori di ricerca è peggio di nessun post, quindi il default è `true` e va tolto esplicitamente.

Il filtro sui draft va riverificato a mano dopo ogni modifica alle pagine indice: è la cosa che si rompe piu facilmente tra dev e build di produzione.

## Struttura

```
src/content/posts/   post in Markdown (Content Collections)
src/data/            tabella dei progetti (projects.ts)
src/pages/           route
src/layouts/         layout di pagine e post
src/components/      componenti
data/<progetto>/     risultati grezzi dei benchmark (jsonl, csv)
scripts/             rigenerazione grafici dai dati grezzi
public/              asset statici
```

Da riallineare alla struttura effettiva della repo se Astro 7 usa percorsi diversi da `src/content/`.

## Comandi

Generatore statico: Astro 7 con TypeScript strict e Content Collections. Package manager: npm.

```
npm install        # dipendenze
npm run dev        # dev server su http://localhost:4321
npm run build      # build statico in dist/
npm run preview    # serve dist/ in locale
npm run check      # typecheck di .astro e .ts
```

Deploy: build statica in `dist/`, poi rsync sul VPS Hetzner, dove nginx serve `/srv/apps/ml-notes/dist`.

```
npm run build
rsync -av --delete dist/ root@188.245.201.81:/srv/apps/ml-notes/dist/
```

Il dominio è `https://ml.martin-trajkovski.it`, gia impostato in `site` dentro `astro.config.mjs`: da li dipendono canonical, sitemap e feed RSS, quindi non si tocca piu ora che il sito è indicizzabile.

## Cosa non si fa qui

Questa repo resta aperta per tutto il percorso, ma dopo il deploy ci si torna solo per pubblicare. Rifare il tema o aggiungere funzionalità al sito mentre un progetto è in corso è procrastinazione travestita da lavoro.