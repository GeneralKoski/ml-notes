# CLAUDE.md - <nome-repo>

<Una frase: cosa fa questo progetto.>

Progetto **N** del percorso ML. Indice completo e convenzioni condivise: repo `ml-notes`.

## Contesto

- Precedente: `<repo>` (<cosa lascia in eredità a questo>)
- Successivo: `<repo>` (<cosa consuma di questo>)
- Macchina: <fisso, se tocca la GPU, oppure indifferente>
- Hardware: RTX 3060 12 GB, Ryzen 5 8500G, 32 GB RAM. Tutto in locale, nessun servizio a pagamento.

## Obiettivo e metrica

**Domanda a cui il progetto risponde:** <una frase>

**Metrica primaria:** <nome e definizione>

**Baseline da battere o da confrontare:** <quale, e perché è quella giusta>

Se queste tre righe non sono compilate, non si scrive codice.

## Scope

**Dentro:**
- <...>

**Fuori:** (da rileggere quando viene la tentazione di allargare)
- <...>

## Metodo sperimentale

- Cosa resta fisso: <...>
- Cosa varia: <...>
- Ripetizioni: minimo 3 per misura, 5-10 seed dove l'esperimento ha varianza.
- Warmup scartato prima di ogni serie.
- Ordine delle combinazioni randomizzato, per non confondere l'effetto studiato con la deriva dell'hardware.
- Ogni run scrive una riga in `results/runs.jsonl` secondo lo schema condiviso di `ml-notes`.
- Nessuna metrica riportata senza dispersione.

## Struttura

```
src/
experiments/
data/
results/runs.jsonl
notes.md
```

`notes.md` è il diario: cosa ho provato, cosa è fallito, idee venute troppo tardi. È la materia prima del post finale, va aggiornato durante e non alla fine.

Fuori da git: pesi dei modelli, dataset, cache, ambienti virtuali. Niente percorsi locali versionati: i percorsi arrivano da variabili d'ambiente, cosi il progetto si apre su qualunque macchina.

## Comandi

```
# setup
# run
# test
```

## Regole

1. Versione brutta ma funzionante entro due settimane, poi si raffina.
2. Il progetto è chiuso quando il post è pubblicato su `ml-notes`, non quando il codice piace.
3. Repo privata fino al post, poi pubblica senza ulteriore pulizia.
4. Codice che serve anche a un altro progetto va in `mlkit`, ma solo quando il secondo progetto esiste davvero.
5. Mai em dash (`—`) ne en dash (`–`) in nessun file, commento o commit: solo `-`.
6. `README.md` in inglese, perché è pubblico e ci si arriva dal blog. Questo file, i commenti, i commit e `notes.md` restano in italiano. Nomenclature tecniche sempre in inglese.
7. Un progetto chiuso non si riapre. Le idee migliori arrivano dopo e finiscono nella sezione "what I would do differently" del post.

## Alla chiusura

- [ ] Post scritto e pubblicato su `ml-notes`
- [ ] Dati grezzi copiati in `ml-notes/data/<progetto>/`
- [ ] Stato aggiornato in `ml-notes/README.md`, `ml-notes/CLAUDE.md` e `ml-notes/src/data/projects.ts`
- [ ] Repo resa pubblica
- [ ] Tag di rilascio sul commit dei risultati pubblicati
- [ ] Prossimo progetto: `<repo>`