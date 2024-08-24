# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 24 Aug 2024 01:00:16 GMT with Node.js v20.16.0 (V8 v11.3.244.8-node.23) on fv-az1146-841 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (300%)        | `151`ns (302%)                 | `6,666,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `170`ns (340%)        | `171`ns (342%)                 | `5,882,353`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (460%)        | `231`ns (462%)                 | `4,347,826`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `421`ns (842%)        | `441`ns (882%)                 | `2,375,297`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (962%)        | `491`ns (982%)                 | `2,079,002`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `602`ns (1,204%)      | `621`ns (1,242%)               | `1,661,130`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,113`ns (2,226%)    | `1,142`ns (2,284%)             | `898,473`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,125`ns (4,250%)    | `2,155`ns (4,310%)             | `470,588`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `34,911`ns (69,822%)  | `35,039`ns (70,078%)           | `28,644`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `721`ns (100%)        | `762`ns (106%)                 | `1,386,963`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,303`ns (3,926%)   | `29,199`ns (4,050%)            | `35,332`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `75,711`ns (10,501%)  | `76,095`ns (10,554%)           | `13,208`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (200%)        | `150`ns (214%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `160`ns (229%)        | `161`ns (230%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (314%)        | `230`ns (329%)                 | `4,545,455`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `491`ns (701%)        | `501`ns (716%)                 | `2,036,660`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,173`ns (3,104%)    | `2,185`ns (3,121%)             | `460,193`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `17,663`ns (25,233%)  | `17,743`ns (25,347%)           | `56,616`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `141`ns (282%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `150`ns (300%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `511`ns (1,022%)      | `531`ns (1,062%)               | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,193`ns (2,386%)    | `1,212`ns (2,424%)             | `838,223`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,037`ns (6,074%)    | `3,065`ns (6,130%)             | `329,272`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `38,015`ns (76,030%)  | `38,143`ns (76,286%)           | `26,305`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `201`ns (100%)        | `210`ns (104%)                 | `4,975,124`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (119%)        | `241`ns (120%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `320`ns (159%)        | `321`ns (160%)                 | `3,125,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
