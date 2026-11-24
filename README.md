# Algae
It is a small website that I made to visualise algorithms as they take steps, and each step to be evaluated and explained. it is made in a cartoonish and crayon style, to impose teenagers to try and learn new algorithms while having fun.

## Features
- Algorithm Visualization
- Playback controls
- Custom Inputs

## Algorithms
*Includes many algorithms to play around with.*

    ### Sorting Algorithms
    - [x] Bubble Sort
    - [ ] Merge Sort
    - [ ] Quick Sort

    ### Pathfinding Algorithms
    - Coming soon

## Tech Stack
- React
- Typescript
- Css
- Vite

## Structure
```
algae/
│
├── public/
│
├── src/
│   │
│   ├── components/         
│   │
│   ├── pages/
│   │   └── HomePage.tsx    # Main application page
│   │
│   ├── script/
│   │   ├── algorithms.ts  # Algorithm implementations
│   │   └── data.ts        # Data and random array generation
│   │
│   ├── styles/
│   │   └── home-styles.css  # Styling for the main page
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Installation

```bash
git clone https://github.com/thatfunnyred/algae.git
cd algae
npm install
npm run dev
```

## License
This project is licensed under the Apache License 2.0.
You are free to use, modify, and distribute this project under the terms and conditions of the license.