# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 09 Apr 2024 10:26:43 GMT with Node.js v18.20.1 (V8 v10.2.154.26-node.36) on fv-az1152-839 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (259%)        | `361`ns (301%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `431`ns (359%)        | `511`ns (426%)                 | `2,320,186`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `532`ns (443%)        | `611`ns (509%)                 | `1,879,699`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,062`ns (885%)      | `1,153`ns (961%)               | `941,620`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,293`ns (1,078%)    | `1,472`ns (1,227%)             | `773,395`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,383`ns (1,153%)    | `1,503`ns (1,253%)             | `723,066`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,555`ns (2,129%)    | `2,725`ns (2,271%)             | `391,389`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,479`ns (3,733%)    | `4,759`ns (3,966%)             | `223,264`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,319`ns (60,266%)  | `73,151`ns (60,959%)           | `13,828`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `941`ns (100%)        | `1,232`ns (131%)               | `1,062,699`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `37,407`ns (3,975%)   | `54,015`ns (5,740%)            | `26,733`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,927`ns (9,025%)   | `158,463`ns (16,840%)          | `11,775`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `160`ns (114%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (229%)        | `401`ns (286%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `511`ns (365%)        | `651`ns (465%)                 | `1,956,947`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (408%)        | `692`ns (494%)                 | `1,751,313`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,382`ns (987%)      | `1,834`ns (1,310%)             | `723,589`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,619`ns (3,299%)    | `5,691`ns (4,065%)             | `216,497`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,023`ns (26,445%)  | `38,367`ns (27,405%)           | `27,010`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `320`ns (267%)        | `371`ns (309%)                 | `3,125,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `421`ns (351%)        | `511`ns (426%)                 | `2,375,297`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,333`ns (1,111%)    | `1,472`ns (1,227%)             | `750,188`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,683`ns (1,403%)    | `1,933`ns (1,611%)             | `594,177`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,643`ns (5,536%)    | `7,307`ns (6,089%)             | `150,534`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,383`ns (66,986%)  | `81,215`ns (67,679%)           | `12,440`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `541`ns (112%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `501`ns (104%)        | `561`ns (117%)                 | `1,996,008`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `601`ns (125%)        | `672`ns (140%)                 | `1,663,894`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `231`ns (105%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `521`ns (237%)        | `581`ns (264%)                 | `1,919,386`/sec       |

<!-- endblock(results) -->
