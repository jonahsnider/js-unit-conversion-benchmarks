# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 20 Jul 2024 22:13:34 GMT with Node.js v18.20.4 (V8 v10.2.154.26-node.37) on fv-az1152-46 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `131`ns (100%)        | `160`ns (122%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (276%)        | `431`ns (329%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `541`ns (413%)        | `621`ns (474%)                 | `1,848,429`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `612`ns (467%)        | `771`ns (589%)                 | `1,633,987`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,172`ns (895%)      | `1,353`ns (1,033%)             | `853,242`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,393`ns (1,063%)    | `1,884`ns (1,438%)             | `717,875`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,433`ns (1,094%)    | `1,953`ns (1,491%)             | `697,837`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,695`ns (2,057%)    | `3,117`ns (2,379%)             | `371,058`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,711`ns (3,596%)    | `6,051`ns (4,619%)             | `212,269`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,855`ns (56,378%)  | `75,775`ns (57,844%)           | `13,540`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `782`ns (100%)        | `1,102`ns (141%)               | `1,278,772`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `33,791`ns (4,321%)   | `51,807`ns (6,625%)            | `29,594`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `86,015`ns (10,999%)  | `159,615`ns (20,411%)          | `11,626`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `131`ns (100%)        | `150`ns (115%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (229%)        | `330`ns (252%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (306%)        | `450`ns (344%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `541`ns (413%)        | `581`ns (444%)                 | `1,848,429`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,252`ns (956%)      | `1,333`ns (1,018%)             | `798,722`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,299`ns (3,282%)    | `4,479`ns (3,419%)             | `232,612`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,663`ns (28,750%)  | `38,175`ns (29,141%)           | `26,551`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `150`ns (125%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `281`ns (234%)        | `311`ns (259%)                 | `3,558,719`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `430`ns (358%)        | `491`ns (409%)                 | `2,325,581`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,192`ns (993%)      | `1,323`ns (1,103%)             | `838,926`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,614`ns (1,345%)    | `1,763`ns (1,469%)             | `619,579`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,071`ns (5,059%)    | `6,355`ns (5,296%)             | `164,718`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `81,471`ns (67,893%)  | `82,559`ns (68,799%)           | `12,274`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `461`ns (100%)        | `521`ns (113%)                 | `2,169,197`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `511`ns (111%)        | `561`ns (122%)                 | `1,956,947`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `601`ns (130%)        | `671`ns (146%)                 | `1,663,894`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `230`ns (100%)        | `251`ns (109%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `521`ns (227%)        | `581`ns (253%)                 | `1,919,386`/sec       |

<!-- endblock(results) -->
