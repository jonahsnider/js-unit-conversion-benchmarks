# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 05 May 2024 17:38:44 GMT with Node.js v18.20.2 (V8 v10.2.154.26-node.36) on fv-az1251-876 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (274%)        | `421`ns (348%)                 | `3,021,148`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `431`ns (356%)        | `491`ns (406%)                 | `2,320,186`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `612`ns (506%)        | `731`ns (604%)                 | `1,633,987`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,102`ns (911%)      | `1,242`ns (1,026%)             | `907,441`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,303`ns (1,077%)    | `1,704`ns (1,408%)             | `767,460`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,363`ns (1,126%)    | `1,733`ns (1,432%)             | `733,676`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,565`ns (2,120%)    | `3,027`ns (2,502%)             | `389,864`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,451`ns (3,679%)    | `5,403`ns (4,465%)             | `224,669`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,319`ns (59,768%)  | `74,047`ns (61,196%)           | `13,828`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `842`ns (100%)        | `1,152`ns (137%)               | `1,187,648`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,287`ns (4,310%)   | `53,087`ns (6,305%)            | `27,558`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,479`ns (10,033%)  | `157,567`ns (18,713%)          | `11,837`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `150`ns (100%)        | `170`ns (113%)                 | `6,666,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (201%)        | `341`ns (227%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `391`ns (261%)        | `441`ns (294%)                 | `2,557,545`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `510`ns (340%)        | `541`ns (361%)                 | `1,960,784`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,192`ns (795%)      | `1,273`ns (849%)               | `838,926`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,451`ns (2,967%)    | `4,619`ns (3,079%)             | `224,669`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,799`ns (24,533%)  | `37,663`ns (25,109%)           | `27,175`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (278%)        | `411`ns (316%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `421`ns (324%)        | `491`ns (378%)                 | `2,375,297`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,343`ns (1,033%)    | `1,493`ns (1,148%)             | `744,602`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,533`ns (1,179%)    | `1,914`ns (1,472%)             | `652,316`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,243`ns (4,802%)    | `7,075`ns (5,442%)             | `160,179`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,063`ns (61,587%)  | `81,279`ns (62,522%)           | `12,490`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `471`ns (100%)        | `521`ns (111%)                 | `2,123,142`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `492`ns (104%)        | `541`ns (115%)                 | `2,032,520`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `561`ns (119%)        | `621`ns (132%)                 | `1,782,531`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `210`ns (100%)        | `230`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (253%)        | `591`ns (281%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
