# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 11 Feb 2024 07:38:48 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az654-425 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (292%)        | `371`ns (337%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (401%)        | `521`ns (474%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (529%)        | `681`ns (619%)                 | `1,718,213`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,072`ns (975%)      | `1,172`ns (1,065%)             | `932,836`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,233`ns (1,121%)    | `1,443`ns (1,312%)             | `811,030`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,283`ns (1,166%)    | `1,423`ns (1,294%)             | `779,423`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,465`ns (2,241%)    | `2,685`ns (2,441%)             | `405,680`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,399`ns (3,999%)    | `4,731`ns (4,301%)             | `227,324`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,807`ns (65,279%)  | `72,895`ns (66,268%)           | `13,926`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `781`ns (100%)        | `1,132`ns (145%)               | `1,280,410`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `34,783`ns (4,454%)   | `52,831`ns (6,765%)            | `28,750`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,799`ns (10,858%)  | `155,135`ns (19,864%)          | `11,793`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `131`ns (100%)        | `150`ns (115%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (237%)        | `361`ns (276%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (352%)        | `521`ns (398%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `552`ns (421%)        | `632`ns (482%)                 | `1,811,594`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,223`ns (934%)      | `1,392`ns (1,063%)             | `817,661`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,531`ns (3,459%)    | `4,931`ns (3,764%)             | `220,702`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,703`ns (28,018%)  | `37,407`ns (28,555%)           | `27,246`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `160`ns (114%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `341`ns (244%)        | `411`ns (294%)                 | `2,932,551`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (344%)        | `551`ns (394%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,362`ns (973%)      | `1,523`ns (1,088%)             | `734,214`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,833`ns (1,309%)    | `2,215`ns (1,582%)             | `545,554`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,555`ns (4,682%)    | `7,475`ns (5,339%)             | `152,555`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,871`ns (57,051%)  | `80,831`ns (57,736%)           | `12,520`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `471`ns (100%)        | `521`ns (111%)                 | `2,123,142`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `511`ns (108%)        | `551`ns (117%)                 | `1,956,947`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `570`ns (121%)        | `622`ns (132%)                 | `1,754,386`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `231`ns (100%)        | `261`ns (113%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `441`ns (191%)        | `491`ns (213%)                 | `2,267,574`/sec       |

<!-- endblock(results) -->
