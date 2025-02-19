# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 19 Feb 2025 21:02:54 GMT with Node.js v22.13.1 (V8 v12.4.254.21-node.22) on fv-az1444-322 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (220%)        | `120`ns (240%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (220%)        | `110`ns (220%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `240`ns (480%)        | `241`ns (482%)                 | `4,166,667`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `381`ns (762%)        | `391`ns (782%)                 | `2,624,672`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `451`ns (902%)        | `461`ns (922%)                 | `2,217,295`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `551`ns (1,102%)      | `562`ns (1,124%)               | `1,814,882`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,051`ns (2,102%)    | `1,062`ns (2,124%)             | `951,475`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,003`ns (4,006%)    | `2,024`ns (4,048%)             | `499,251`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `651`ns (100%)        | `721`ns (111%)                 | `1,536,098`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,232`ns (189%)      | `1,313`ns (202%)               | `811,688`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `26,079`ns (4,006%)   | `27,887`ns (4,284%)            | `38,345`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (143%)        | `100`ns (143%)                 | `10,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (173%)        | `130`ns (186%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (186%)        | `140`ns (200%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `231`ns (330%)        | `240`ns (343%)                 | `4,329,004`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (659%)        | `461`ns (659%)                 | `2,169,197`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,145`ns (3,064%)    | `2,165`ns (3,093%)             | `466,200`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (220%)        | `120`ns (240%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (962%)        | `491`ns (982%)                 | `2,079,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,112`ns (2,224%)    | `1,122`ns (2,244%)             | `899,281`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,865`ns (5,730%)    | `2,885`ns (5,770%)             | `349,040`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (116%)        | `240`ns (120%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `270`ns (135%)        | `271`ns (136%)                 | `3,703,704`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
