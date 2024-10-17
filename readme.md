# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 17 Oct 2024 04:01:04 GMT with Node.js v20.17.0 (V8 v11.3.244.8-node.23) on fv-az1118-594 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `160`ns (320%)        | `170`ns (340%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `211`ns (422%)        | `221`ns (442%)                 | `4,739,336`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `461`ns (922%)        | `471`ns (942%)                 | `2,169,197`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `501`ns (1,002%)      | `521`ns (1,042%)               | `1,996,008`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `621`ns (1,242%)      | `632`ns (1,264%)               | `1,610,306`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,132`ns (2,264%)    | `1,172`ns (2,344%)             | `883,392`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,175`ns (4,350%)    | `2,215`ns (4,430%)             | `459,770`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `41,727`ns (83,454%)  | `42,015`ns (84,030%)           | `23,965`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `741`ns (100%)        | `801`ns (108%)                 | `1,349,528`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,687`ns (3,871%)   | `29,615`ns (3,997%)            | `34,859`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90,303`ns (12,187%)  | `90,815`ns (12,256%)           | `11,074`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (171%)        | `121`ns (173%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `170`ns (243%)        | `171`ns (244%)                 | `5,882,353`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (329%)        | `231`ns (330%)                 | `4,347,826`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `490`ns (700%)        | `491`ns (701%)                 | `2,040,816`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,175`ns (3,107%)    | `2,195`ns (3,136%)             | `459,770`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `21,263`ns (30,376%)  | `21,343`ns (30,490%)           | `47,030`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `121`ns (242%)        | `140`ns (280%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `141`ns (282%)        | `150`ns (300%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (1,002%)      | `521`ns (1,042%)               | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,193`ns (2,386%)    | `1,212`ns (2,424%)             | `838,223`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,077`ns (6,154%)    | `3,107`ns (6,214%)             | `324,992`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `45,535`ns (91,070%)  | `45,759`ns (91,518%)           | `21,961`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `190`ns (100%)        | `191`ns (101%)                 | `5,263,158`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (126%)        | `241`ns (127%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `271`ns (143%)        | `281`ns (148%)                 | `3,690,037`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `61`ns (122%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `150`ns (300%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
