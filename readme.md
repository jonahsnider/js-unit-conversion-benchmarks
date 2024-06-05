# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 05 Jun 2024 19:17:42 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az2026-953 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `131`ns (108%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (290%)        | `391`ns (323%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (331%)        | `471`ns (389%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `611`ns (505%)        | `661`ns (546%)                 | `1,636,661`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,092`ns (902%)      | `1,163`ns (961%)               | `915,751`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,302`ns (1,076%)    | `1,432`ns (1,183%)             | `768,049`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,373`ns (1,135%)    | `1,482`ns (1,225%)             | `728,332`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,755`ns (2,277%)    | `2,907`ns (2,402%)             | `362,976`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,531`ns (3,745%)    | `4,791`ns (3,960%)             | `220,702`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,407`ns (60,667%)  | `74,239`ns (61,355%)           | `13,623`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `862`ns (100%)        | `1,072`ns (124%)               | `1,160,093`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,623`ns (3,785%)   | `44,767`ns (5,193%)            | `30,653`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,375`ns (9,904%)   | `101,951`ns (11,827%)          | `11,713`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `150`ns (100%)        | `170`ns (113%)                 | `6,666,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `330`ns (220%)        | `361`ns (241%)                 | `3,030,303`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `411`ns (274%)        | `471`ns (314%)                 | `2,433,090`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `531`ns (354%)        | `572`ns (381%)                 | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,242`ns (828%)      | `1,332`ns (888%)               | `805,153`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,519`ns (3,013%)    | `4,739`ns (3,159%)             | `221,288`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,375`ns (24,917%)  | `38,303`ns (25,535%)           | `26,756`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (292%)        | `401`ns (334%)                 | `2,857,143`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `431`ns (359%)        | `492`ns (410%)                 | `2,320,186`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,322`ns (1,102%)    | `1,543`ns (1,286%)             | `756,430`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,743`ns (1,453%)    | `2,215`ns (1,846%)             | `573,723`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,635`ns (5,529%)    | `7,907`ns (6,589%)             | `150,716`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,767`ns (67,306%)  | `81,919`ns (68,266%)           | `12,381`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `541`ns (112%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (108%)        | `571`ns (119%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `621`ns (129%)        | `691`ns (144%)                 | `1,610,306`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `231`ns (100%)        | `251`ns (109%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `551`ns (239%)        | `611`ns (265%)                 | `1,814,882`/sec       |

<!-- endblock(results) -->
