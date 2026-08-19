# QUBO Reformulation Framework | IHCONCS 2026 Presentation

This repository contains the interactive, bilingual (English/Turkish) web-based presentation for the research paper:

> **"A QUBO-Based Reformulation and Quantum Solution Framework for Nonlinear Constrained Optimization Problems"**
> by Cumali Yaşar & Yerlan Izbassarov

Presented at the International Conference on Computer Sciences (IHCONCS) 2026.

## Features
- **Bilingual Interface**: Seamlessly switch between English and Turkish (UI + Slides + Speaker Notes).
- **Interactive Simulations**: 
  - Dynamic production planning cost/profit calculator.
  - Interactive binary encoding mechanism.
  - "Break the Model" penalty method demonstration.
- **Scientific Integrity**: Adheres strictly to the paper's constraints, avoiding false claims of quantum advantage while accurately representing the transformation workflow.
- **Presenter Mode**: Built-in speaker notes accessible via keyboard shortcuts.
- **Responsive Layout**: Designed for 16:9 displays, complete with a mobile rotation prompt.

## Technology Stack
- React 18 + TypeScript
- Vite
- Custom CSS (No external CSS frameworks)
- Lucide React (Icons)

## Local Development

```bash
npm install
npm run dev
```

## Deployment
This project is configured for automated deployment to GitHub Pages.

```bash
npm run deploy
```

## Keyboard Shortcuts
- `Right Arrow` / `Space`: Next Slide
- `Left Arrow`: Previous Slide
- `Home`: First Slide
- `End`: Last Slide
- `N`: Toggle Speaker Notes
- `G`: Toggle Grid Overview Mode
- `?`: Show Help Menu

## Authors
- **Cumali Yaşar** (Çanakkale Onsekiz Mart University)
- **Yerlan Izbassarov** (Khalel Dosmukhamedov Atyrau University)
