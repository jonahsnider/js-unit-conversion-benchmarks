# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 29 Jul 2026 00:29:08 GMT with Node.js v24.18.0 (V8 v13.6.233.17-node.50) on runnervmvrwv9 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (275%)        | `120`ns (300%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (325%)        | `130`ns (325%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (350%)        | `150`ns (375%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `211`ns (528%)        | `221`ns (553%)                 | `4,739,336`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `351`ns (878%)        | `361`ns (903%)                 | `2,849,003`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `541`ns (1,353%)      | `551`ns (1,378%)               | `1,848,429`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `641`ns (1,602%)      | `651`ns (1,627%)               | `1,560,062`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,062`ns (2,655%)    | `1,082`ns (2,705%)             | `941,620`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,803`ns (4,508%)    | `1,824`ns (4,560%)             | `554,631`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `611`ns (100%)        | `671`ns (110%)                 | `1,636,661`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,714`ns (281%)      | `1,853`ns (303%)               | `583,431`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `26,303`ns (4,305%)   | `27,455`ns (4,493%)            | `38,018`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (233%)        | `150`ns (250%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `141`ns (235%)        | `150`ns (250%)                 | `7,092,199`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (250%)        | `160`ns (267%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `231`ns (385%)        | `241`ns (402%)                 | `4,329,004`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `622`ns (1,037%)      | `642`ns (1,070%)               | `1,607,717`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,983`ns (3,305%)    | `2,024`ns (3,373%)             | `504,286`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `150`ns (375%)        | `160`ns (400%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `471`ns (1,178%)      | `481`ns (1,203%)               | `2,123,142`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,552`ns (3,880%)    | `1,562`ns (3,905%)             | `644,330`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,695`ns (6,738%)    | `2,775`ns (6,938%)             | `371,058`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (116%)        | `241`ns (121%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `300`ns (150%)        | `301`ns (151%)                 | `3,333,333`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
