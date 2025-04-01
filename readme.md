# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 01 Apr 2025 06:12:12 GMT with Node.js v22.14.0 (V8 v12.4.254.21-node.22) on fv-az1049-967 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90`ns (180%)         | `90`ns (180%)                  | `11,111,111`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `200`ns (400%)        | `201`ns (402%)                 | `5,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `231`ns (462%)        | `241`ns (482%)                 | `4,329,004`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `401`ns (802%)        | `411`ns (822%)                 | `2,493,766`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `431`ns (862%)        | `441`ns (882%)                 | `2,320,186`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `561`ns (1,122%)      | `581`ns (1,162%)               | `1,782,531`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,102`ns (2,204%)    | `1,122`ns (2,244%)             | `907,441`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,044`ns (4,088%)    | `2,065`ns (4,130%)             | `489,237`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `641`ns (100%)        | `711`ns (111%)                 | `1,560,062`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,091`ns (170%)      | `1,202`ns (188%)               | `916,590`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,951`ns (4,049%)   | `27,903`ns (4,353%)            | `38,534`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (167%)        | `120`ns (200%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `120`ns (200%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (200%)        | `121`ns (202%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `241`ns (402%)        | `250`ns (417%)                 | `4,149,378`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (785%)        | `481`ns (802%)                 | `2,123,142`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,115`ns (3,525%)    | `2,135`ns (3,558%)             | `472,813`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `51`ns (102%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `131`ns (262%)        | `140`ns (280%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `480`ns (960%)        | `490`ns (980%)                 | `2,083,333`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,132`ns (2,264%)    | `1,142`ns (2,284%)             | `883,392`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,937`ns (5,874%)    | `2,957`ns (5,914%)             | `340,483`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `230`ns (100%)        | `231`ns (100%)                 | `4,347,826`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `250`ns (109%)        | `251`ns (109%)                 | `4,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `291`ns (127%)        | `301`ns (131%)                 | `3,436,426`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
