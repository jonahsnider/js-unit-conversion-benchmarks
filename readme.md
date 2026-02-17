# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 17 Feb 2026 15:43:51 GMT with Node.js v24.13.0 (V8 v13.6.233.17-node.37) on runnervmjduv7 (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (300%)        | `160`ns (320%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `211`ns (422%)        | `221`ns (442%)                 | `4,739,336`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `371`ns (742%)        | `381`ns (762%)                 | `2,695,418`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `521`ns (1,042%)      | `541`ns (1,082%)               | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `661`ns (1,322%)      | `671`ns (1,342%)               | `1,512,859`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,102`ns (2,204%)    | `1,112`ns (2,224%)             | `907,441`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,742`ns (3,484%)    | `1,763`ns (3,526%)             | `574,053`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (100%)        | `351`ns (109%)                 | `3,115,265`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,222`ns (381%)      | `1,302`ns (406%)               | `818,331`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `21,743`ns (6,774%)   | `22,223`ns (6,923%)            | `45,992`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `80`ns (114%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (157%)        | `111`ns (159%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (200%)        | `141`ns (201%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `141`ns (201%)        | `150`ns (214%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (329%)        | `231`ns (330%)                 | `4,347,826`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `651`ns (930%)        | `661`ns (944%)                 | `1,536,098`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,943`ns (2,776%)    | `1,993`ns (2,847%)             | `514,668`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `160`ns (320%)        | `160`ns (320%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (1,042%)      | `561`ns (1,122%)               | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,632`ns (3,264%)    | `1,643`ns (3,286%)             | `612,745`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,745`ns (5,490%)    | `2,785`ns (5,570%)             | `364,299`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `191`ns (100%)        | `201`ns (105%)                 | `5,235,602`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `221`ns (116%)        | `231`ns (121%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (147%)        | `290`ns (152%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
