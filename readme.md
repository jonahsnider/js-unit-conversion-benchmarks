# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 25 Oct 2025 17:23:45 GMT with Node.js v22.20.0 (V8 v12.4.254.21-node.33) on runnervmwhb2z (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (220%)        | `111`ns (222%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `151`ns (302%)        | `160`ns (320%)                 | `6,622,517`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `250`ns (500%)        | `260`ns (520%)                 | `4,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `361`ns (722%)        | `371`ns (742%)                 | `2,770,083`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (942%)        | `481`ns (962%)                 | `2,123,142`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `521`ns (1,042%)      | `541`ns (1,082%)               | `1,919,386`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,052`ns (2,104%)    | `1,072`ns (2,144%)             | `950,570`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,024`ns (4,048%)    | `2,055`ns (4,110%)             | `494,071`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `641`ns (100%)        | `731`ns (114%)                 | `1,560,062`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,944`ns (303%)      | `2,125`ns (332%)               | `514,403`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `26,159`ns (4,081%)   | `27,983`ns (4,366%)            | `38,228`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `61`ns (100%)         | `70`ns (115%)                  | `16,393,443`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (197%)        | `120`ns (197%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `131`ns (215%)        | `140`ns (230%)                 | `7,633,588`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `151`ns (248%)        | `160`ns (262%)                 | `6,622,517`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `231`ns (379%)        | `241`ns (395%)                 | `4,329,004`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `441`ns (723%)        | `441`ns (723%)                 | `2,267,574`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,085`ns (3,418%)    | `2,105`ns (3,451%)             | `479,616`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (260%)        | `130`ns (260%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `140`ns (280%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (1,002%)      | `521`ns (1,042%)               | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,102`ns (2,204%)    | `1,112`ns (2,224%)             | `907,441`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,857`ns (5,714%)    | `2,887`ns (5,774%)             | `350,018`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (116%)        | `240`ns (120%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `281`ns (141%)        | `290`ns (145%)                 | `3,558,719`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `91`ns (182%)         | `100`ns (200%)                 | `10,989,011`/sec      |

<!-- endblock(results) -->
