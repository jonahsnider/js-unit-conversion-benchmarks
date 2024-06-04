# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 04 Jun 2024 07:12:34 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az1272-835 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `140`ns (116%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (274%)        | `381`ns (315%)                 | `3,021,148`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `471`ns (389%)        | `551`ns (455%)                 | `2,123,142`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `651`ns (538%)        | `732`ns (605%)                 | `1,536,098`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,182`ns (977%)      | `1,292`ns (1,068%)             | `846,024`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,363`ns (1,126%)    | `1,673`ns (1,383%)             | `733,676`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,403`ns (1,160%)    | `1,643`ns (1,358%)             | `712,758`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,665`ns (2,202%)    | `2,955`ns (2,442%)             | `375,235`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,559`ns (3,768%)    | `5,251`ns (4,340%)             | `219,346`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,471`ns (60,720%)  | `74,687`ns (61,725%)           | `13,611`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `771`ns (100%)        | `1,062`ns (138%)               | `1,297,017`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `33,375`ns (4,329%)   | `51,583`ns (6,690%)            | `29,963`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,631`ns (11,106%)  | `119,423`ns (15,489%)          | `11,678`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `151`ns (108%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `271`ns (194%)        | `301`ns (215%)                 | `3,690,037`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `541`ns (386%)        | `591`ns (422%)                 | `1,848,429`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `561`ns (401%)        | `612`ns (437%)                 | `1,782,531`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,282`ns (916%)      | `1,372`ns (980%)               | `780,031`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,511`ns (3,222%)    | `4,691`ns (3,351%)             | `221,680`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,375`ns (26,696%)  | `38,047`ns (27,176%)           | `26,756`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `150`ns (125%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (283%)        | `391`ns (326%)                 | `2,941,176`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `410`ns (342%)        | `481`ns (401%)                 | `2,439,024`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,272`ns (1,060%)    | `1,433`ns (1,194%)             | `786,164`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,572`ns (1,310%)    | `1,854`ns (1,545%)             | `636,132`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,343`ns (5,286%)    | `7,063`ns (5,886%)             | `157,654`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,319`ns (66,933%)  | `81,535`ns (67,946%)           | `12,450`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `491`ns (100%)        | `541`ns (110%)                 | `2,036,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `541`ns (110%)        | `591`ns (120%)                 | `1,848,429`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `611`ns (124%)        | `672`ns (137%)                 | `1,636,661`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `230`ns (100%)        | `251`ns (109%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `561`ns (244%)        | `621`ns (270%)                 | `1,782,531`/sec       |

<!-- endblock(results) -->
