# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 05 Sep 2026 05:36:25 GMT with Node.js v26.8.1 (V8 v14.6.202.34-node.28) on runnervmejwal (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `101`ns (246%)        | `110`ns (268%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (268%)        | `111`ns (271%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (317%)        | `131`ns (320%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `211`ns (515%)        | `220`ns (537%)                 | `4,739,336`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `341`ns (832%)        | `350`ns (854%)                 | `2,932,551`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (1,124%)      | `461`ns (1,124%)               | `2,169,197`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `501`ns (1,222%)      | `511`ns (1,246%)               | `1,996,008`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `982`ns (2,395%)      | `1,002`ns (2,444%)             | `1,018,330`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,813`ns (4,422%)    | `1,834`ns (4,473%)             | `551,572`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `581`ns (100%)        | `651`ns (112%)                 | `1,721,170`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,623`ns (279%)      | `1,783`ns (307%)               | `616,143`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `23,935`ns (4,120%)   | `25,023`ns (4,307%)            | `41,780`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (183%)        | `120`ns (200%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `130`ns (217%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `191`ns (318%)        | `210`ns (350%)                 | `5,235,602`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (785%)        | `481`ns (802%)                 | `2,123,142`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,933`ns (3,222%)    | `1,954`ns (3,257%)             | `517,331`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (268%)        | `120`ns (293%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (293%)        | `130`ns (317%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (341%)        | `141`ns (344%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `461`ns (1,124%)      | `471`ns (1,149%)               | `2,169,197`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,202`ns (2,932%)    | `1,203`ns (2,934%)             | `831,947`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,725`ns (6,646%)    | `2,765`ns (6,744%)             | `366,972`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `241`ns (121%)        | `250`ns (125%)                 | `4,149,378`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `270`ns (135%)        | `271`ns (136%)                 | `3,703,704`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
