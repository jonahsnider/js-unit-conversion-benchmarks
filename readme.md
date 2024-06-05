# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 05 Jun 2024 07:58:05 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az1272-835 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `110`ns (100%)        | `130`ns (118%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (309%)        | `381`ns (346%)                 | `2,941,176`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (419%)        | `521`ns (474%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `601`ns (546%)        | `672`ns (611%)                 | `1,663,894`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,071`ns (974%)      | `1,152`ns (1,047%)             | `933,707`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,343`ns (1,221%)    | `1,493`ns (1,357%)             | `744,602`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,352`ns (1,229%)    | `1,473`ns (1,339%)             | `739,645`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,685`ns (2,441%)    | `2,865`ns (2,605%)             | `372,439`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,451`ns (4,046%)    | `4,751`ns (4,319%)             | `224,669`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,535`ns (66,850%)  | `74,815`ns (68,014%)           | `13,599`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `832`ns (100%)        | `1,131`ns (136%)               | `1,201,923`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `37,151`ns (4,465%)   | `52,671`ns (6,331%)            | `26,917`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `86,079`ns (10,346%)  | `158,719`ns (19,077%)          | `11,617`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `150`ns (107%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (251%)        | `381`ns (272%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `411`ns (294%)        | `461`ns (329%)                 | `2,433,090`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `541`ns (386%)        | `581`ns (415%)                 | `1,848,429`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,342`ns (959%)      | `1,442`ns (1,030%)             | `745,156`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,631`ns (3,308%)    | `4,831`ns (3,451%)             | `215,936`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,791`ns (26,994%)  | `38,911`ns (27,794%)           | `26,461`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (247%)        | `391`ns (301%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (370%)        | `552`ns (425%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,393`ns (1,072%)    | `1,683`ns (1,295%)             | `717,875`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,893`ns (1,456%)    | `2,495`ns (1,919%)             | `528,262`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,755`ns (5,196%)    | `8,567`ns (6,590%)             | `148,038`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,639`ns (62,030%)  | `83,135`ns (63,950%)           | `12,401`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `531`ns (110%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `512`ns (106%)        | `571`ns (119%)                 | `1,953,125`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `592`ns (123%)        | `662`ns (138%)                 | `1,689,189`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `230`ns (100%)        | `251`ns (109%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `541`ns (235%)        | `591`ns (257%)                 | `1,848,429`/sec       |

<!-- endblock(results) -->
