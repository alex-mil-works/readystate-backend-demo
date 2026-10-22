# Frontend — authoring layout

**Role:** `frontend` · **Stacks:** `react` | `angular` | `vue`

## Structure

```text
frontend/
  discipline.yaml       # role + stack list
  skeleton.yaml         # S01–S08 stage titles (form of the map)
  stacks/
    react/
      course.yaml       # stack meta + stage folder list
      content/
        s01-js-core/    # stage folder (stage.yaml id must match skeleton)
        s02-async-runtime/
          u01-…/        # unit — silent group in UI (2–6 lessons)
          …
```

## Compile

From repo root:

```bash
yarn content:compile
```

Output: `artifacts/frontend/react/course.json`

## Rules

- **Stages** come from `skeleton.yaml`; empty stages render as «Скоро».
- **Units** live only under stack `content/`; **2–6 lessons** per unit (min group rhythm + UI grid cap).
- **Lessons** use ids like `L001-js-values-model`; stable Dexie keys are `contentUid` in compiled JSON.
- Lesson URLs: `/courses/frontend/react/lessons/L001-js-values-model`
- Course map URL: `/courses/frontend/react`
- Compile also writes `artifacts/disciplines.json` from this folder’s `discipline.yaml` (and sibling roles).
- **React S01–S08** required map matches `frontend-react-program.md`: 39 units, 118 lessons. Bodies are in this tree, not in a separate `shared/`. Optional U39 (GraphQL, L116–L118) and U41 (other platforms, L122–L124) are not authored.
- **S04** has six units: U15–U18 and U20 are the five framework slots; **U19** is React render-failure (not Core Web Vitals).
- **S05** stays after S04 on purpose. Permission UX in S08 continues L028; storage shelves in S08 continue L027.
- Unit `activities/` folders feed post-lesson **+2 Recall** (`pickRecall`, scope `unit`).
- **YAML quote-lint:** do not write bare `null` / `~` / `{}` as field values — quote (`"null"`) or omit/fill real content; compile fails early with file:line.
- This tree is the source of truth (committed on the private backend). Compile with `yarn content:compile` → `artifacts/`.

Legacy flat `react-frontend/` layout is removed (Phase 1 migration, 2026-08).
