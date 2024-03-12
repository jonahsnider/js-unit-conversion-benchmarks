# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 12 Mar 2024 04:53:12 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az573-324 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `130`ns (108%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (259%)        | `341`ns (284%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (333%)        | `451`ns (376%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `631`ns (526%)        | `681`ns (568%)                 | `1,584,786`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,152`ns (960%)      | `1,213`ns (1,011%)             | `868,056`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,312`ns (1,093%)    | `1,412`ns (1,177%)             | `762,195`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,443`ns (1,203%)    | `1,523`ns (1,269%)             | `693,001`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,815`ns (2,346%)    | `2,927`ns (2,439%)             | `355,240`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,711`ns (3,926%)    | `4,879`ns (4,066%)             | `212,269`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,807`ns (59,839%)  | `72,319`ns (60,266%)           | `13,926`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `782`ns (100%)        | `1,002`ns (128%)               | `1,278,772`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,151`ns (3,984%)   | `40,287`ns (5,152%)            | `32,102`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,095`ns (10,754%)  | `86,271`ns (11,032%)           | `11,891`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `151`ns (108%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (214%)        | `361`ns (258%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `431`ns (308%)        | `571`ns (408%)                 | `2,320,186`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `511`ns (365%)        | `621`ns (444%)                 | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,292`ns (923%)      | `1,643`ns (1,174%)             | `773,994`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,619`ns (3,299%)    | `5,443`ns (3,888%)             | `216,497`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,479`ns (26,056%)  | `37,695`ns (26,925%)           | `27,413`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `141`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `371`ns (285%)        | `411`ns (316%)                 | `2,695,418`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `491`ns (378%)        | `551`ns (424%)                 | `2,036,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,383`ns (1,064%)    | `1,492`ns (1,148%)             | `723,066`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,874`ns (1,442%)    | `2,085`ns (1,604%)             | `533,618`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,735`ns (5,181%)    | `7,347`ns (5,652%)             | `148,478`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,063`ns (61,587%)  | `80,639`ns (62,030%)           | `12,490`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `531`ns (110%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (108%)        | `570`ns (119%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `611`ns (127%)        | `672`ns (140%)                 | `1,636,661`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `231`ns (105%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `521`ns (237%)        | `581`ns (264%)                 | `1,919,386`/sec       |

<!-- endblock(results) -->
