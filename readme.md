# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 08 May 2024 19:19:02 GMT with Node.js v18.20.2 (V8 v10.2.154.26-node.36) on fv-az1251-876 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (259%)        | `351`ns (293%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (384%)        | `521`ns (434%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `551`ns (459%)        | `601`ns (501%)                 | `1,814,882`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,112`ns (927%)      | `1,192`ns (993%)               | `899,281`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,323`ns (1,103%)    | `1,423`ns (1,186%)             | `755,858`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,353`ns (1,128%)    | `1,483`ns (1,236%)             | `739,098`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,675`ns (2,229%)    | `2,847`ns (2,373%)             | `373,832`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,451`ns (3,709%)    | `4,711`ns (3,926%)             | `224,669`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,383`ns (60,319%)  | `73,279`ns (61,066%)           | `13,815`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `932`ns (100%)        | `1,212`ns (130%)               | `1,072,961`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `37,119`ns (3,983%)   | `53,023`ns (5,689%)            | `26,940`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,607`ns (9,078%)   | `157,439`ns (16,893%)          | `11,819`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (259%)        | `371`ns (309%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `420`ns (350%)        | `481`ns (401%)                 | `2,380,952`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `541`ns (451%)        | `642`ns (535%)                 | `1,848,429`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,272`ns (1,060%)    | `1,684`ns (1,403%)             | `786,164`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,459`ns (3,716%)    | `5,191`ns (4,326%)             | `224,266`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,119`ns (30,933%)  | `38,367`ns (31,973%)           | `26,940`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `170`ns (121%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (251%)        | `401`ns (286%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `471`ns (336%)        | `541`ns (386%)                 | `2,123,142`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,343`ns (959%)      | `1,482`ns (1,059%)             | `744,602`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,723`ns (1,231%)    | `2,085`ns (1,489%)             | `580,383`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,543`ns (4,674%)    | `7,343`ns (5,245%)             | `152,835`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,447`ns (57,462%)  | `81,535`ns (58,239%)           | `12,431`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `490`ns (100%)        | `541`ns (110%)                 | `2,040,816`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (106%)        | `581`ns (119%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `601`ns (123%)        | `671`ns (137%)                 | `1,663,894`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `230`ns (100%)        | `251`ns (109%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `521`ns (227%)        | `571`ns (248%)                 | `1,919,386`/sec       |

<!-- endblock(results) -->
