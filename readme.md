# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 01 Jun 2024 21:48:00 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az1240-545 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (292%)        | `351`ns (319%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `471`ns (428%)        | `521`ns (474%)                 | `2,123,142`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (510%)        | `612`ns (556%)                 | `1,782,531`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,093`ns (994%)      | `1,162`ns (1,056%)             | `914,913`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,302`ns (1,184%)    | `1,422`ns (1,293%)             | `768,049`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,422`ns (1,293%)    | `1,512`ns (1,375%)             | `703,235`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,655`ns (2,414%)    | `2,785`ns (2,532%)             | `376,648`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,631`ns (4,210%)    | `4,811`ns (4,374%)             | `215,936`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,191`ns (65,628%)  | `73,215`ns (66,559%)           | `13,852`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `822`ns (100%)        | `1,122`ns (136%)               | `1,216,545`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `35,039`ns (4,263%)   | `51,167`ns (6,225%)            | `28,540`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,567`ns (10,410%)  | `156,159`ns (18,997%)          | `11,687`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `141`ns (100%)        | `160`ns (113%)                 | `7,092,199`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (213%)        | `370`ns (262%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `431`ns (306%)        | `561`ns (398%)                 | `2,320,186`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `531`ns (377%)        | `691`ns (490%)                 | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,293`ns (917%)      | `1,784`ns (1,265%)             | `773,395`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,479`ns (3,177%)    | `5,823`ns (4,130%)             | `223,264`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,023`ns (26,257%)  | `38,815`ns (27,528%)           | `27,010`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `140`ns (116%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `371`ns (307%)        | `401`ns (331%)                 | `2,695,418`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `501`ns (414%)        | `561`ns (464%)                 | `1,996,008`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,403`ns (1,160%)    | `1,523`ns (1,259%)             | `712,758`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,744`ns (1,441%)    | `1,933`ns (1,598%)             | `573,394`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,835`ns (5,649%)    | `7,347`ns (6,072%)             | `146,306`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,831`ns (66,802%)  | `81,471`ns (67,331%)           | `12,371`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `491`ns (100%)        | `541`ns (110%)                 | `2,036,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (106%)        | `572`ns (116%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `601`ns (122%)        | `662`ns (135%)                 | `1,663,894`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `211`ns (100%)        | `230`ns (109%)                 | `4,739,336`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (252%)        | `581`ns (275%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
