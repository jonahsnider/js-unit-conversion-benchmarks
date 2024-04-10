# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 10 Apr 2024 18:49:44 GMT with Node.js v18.20.1 (V8 v10.2.154.26-node.36) on fv-az525-673 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `140`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (270%)        | `411`ns (316%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `510`ns (392%)        | `571`ns (439%)                 | `1,960,784`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `602`ns (463%)        | `721`ns (555%)                 | `1,661,130`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,092`ns (840%)      | `1,222`ns (940%)               | `915,751`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,343`ns (1,033%)    | `1,623`ns (1,248%)             | `744,602`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,423`ns (1,095%)    | `1,653`ns (1,272%)             | `702,741`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,705`ns (2,081%)    | `3,007`ns (2,313%)             | `369,686`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,459`ns (3,430%)    | `5,163`ns (3,972%)             | `224,266`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,959`ns (56,122%)  | `73,855`ns (56,812%)           | `13,706`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `982`ns (100%)        | `1,242`ns (126%)               | `1,018,330`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `35,551`ns (3,620%)   | `50,175`ns (5,109%)            | `28,129`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,247`ns (8,681%)   | `104,895`ns (10,682%)          | `11,731`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (231%)        | `351`ns (270%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `371`ns (285%)        | `451`ns (347%)                 | `2,695,418`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `530`ns (408%)        | `621`ns (478%)                 | `1,886,792`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,262`ns (971%)      | `1,523`ns (1,172%)             | `792,393`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,379`ns (3,368%)    | `5,103`ns (3,925%)             | `228,363`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,183`ns (28,602%)  | `38,111`ns (29,316%)           | `26,894`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `140`ns (116%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (289%)        | `391`ns (323%)                 | `2,857,143`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `411`ns (340%)        | `481`ns (398%)                 | `2,433,090`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,363`ns (1,126%)    | `1,483`ns (1,226%)             | `733,676`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,624`ns (1,342%)    | `1,814`ns (1,499%)             | `615,764`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,663`ns (5,507%)    | `7,127`ns (5,890%)             | `150,083`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `81,023`ns (66,961%)  | `81,791`ns (67,596%)           | `12,342`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `491`ns (100%)        | `551`ns (112%)                 | `2,036,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (106%)        | `571`ns (116%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `602`ns (123%)        | `671`ns (137%)                 | `1,661,130`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `230`ns (100%)        | `251`ns (109%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (231%)        | `591`ns (257%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
