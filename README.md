# Graph Orientation Playground

An interactive HTML/SVG visualizer for graph-orientation problems and gadgets. It is inspired by [*Planar Graph Orientation Frameworks, Applied to KPlumber and Polyomino Tiling*](https://arxiv.org/abs/2603.03488).

## Scope

The app treats an orientation problem as a game. Every edge starts unoriented. A player directs edges while the visualizer reports whether each vertex is still locally completable, forced, satisfied, or impossible.

Included:

- endpoint-third clicks to orient or flip an edge;
- swipe/drag gestures along an edge to orient it in the gesture direction;
- middle-third clicks to clear an orientation;
- local contradiction detection for partial orientations;
- local forced-edge deductions, shown as dashed arrows;
- click-to-apply forced moves at a vertex;
- undo/redo history for orientation changes;
- keyboard edge controls and touch-sized SVG hit targets;
- reset and solved-state feedback;
- ordered port relations, symmetric `S`-in-`j` relations, multiedges, self-loop-aware analysis, and dangling gadget edges;
- tutorial examples, complete graph puzzles, and gadgets from the paper;
- the 1-in-3 graph-orientation instance from [Figure 4 of *Complexity of Tiling a Polygon with Trominoes or Bars*](https://dspace.jaist.ac.jp/dspace/bitstream/10119/15100/4/23092.pdf).

The current deduction system is deliberately local. It filters the allowed relation at each vertex against the partial orientation. It does not run a general global satisfiability solver, so a partial assignment can occasionally be globally impossible even when no single vertex is locally impossible. Conflicting forced directions on one edge are detected. Graph editing, automatic layout, importing TikZ, and exhaustive gadget-signature analysis are also outside the current scope.

## Controls

- Click the third of an edge nearest an endpoint to direct the edge toward that endpoint.
- Swipe or drag along an edge to direct it in the gesture direction.
- Click the middle third to make the edge unoriented.
- Click a cyan vertex to apply all orientations forced by that vertex.
- Use **Undo** and **Redo**, or press `Ctrl`/`Command`+`Z` to undo and `Ctrl`+`Y` or `Command`+`Shift`+`Z` to redo.
- Focus an edge with the keyboard and press `Enter` or `Space` to cycle its state. Press `Delete` or `Backspace` to clear it.
- Use **Reset orientations** to clear the current example.

## Development

The project uses Vite, Sass, Solid, Civet, and native SVG. All application and test source is Civet; TypeScript is used only for Vite configuration.

```sh
pnpm install
pnpm dev
```

Validation commands:

```sh
pnpm typecheck
pnpm test
pnpm build
```

Example graphs are hand-authored in `src/examples.civet`. The constraint engine is independent of the SVG UI and lives in `src/model.civet`.
