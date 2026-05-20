# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 20 May 2026 04:48:48 GMT with Node.js v24.15.0 (V8 v13.6.233.17-node.48) on runnervmrw5os (Linux-x64 AMD EPYC 9V74 80-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (225%)         | `91`ns (228%)                  | `11,111,111`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (250%)        | `101`ns (253%)                 | `10,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (350%)        | `140`ns (350%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `170`ns (425%)        | `180`ns (450%)                 | `5,882,353`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `291`ns (728%)        | `300`ns (750%)                 | `3,436,426`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `401`ns (1,003%)      | `411`ns (1,028%)               | `2,493,766`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `491`ns (1,228%)      | `500`ns (1,250%)               | `2,036,660`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `871`ns (2,178%)      | `882`ns (2,205%)               | `1,148,106`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,291`ns (3,228%)    | `1,302`ns (3,255%)             | `774,593`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `310`ns (100%)        | `321`ns (104%)                 | `3,225,806`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `982`ns (317%)        | `1,092`ns (352%)               | `1,018,330`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `16,975`ns (5,476%)   | `17,471`ns (5,636%)            | `58,910`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (180%)         | `100`ns (200%)                 | `11,111,111`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `111`ns (222%)        | `120`ns (240%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `131`ns (262%)        | `140`ns (280%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `170`ns (340%)        | `180`ns (360%)                 | `5,882,353`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `501`ns (1,002%)      | `511`ns (1,022%)               | `1,996,008`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,453`ns (2,906%)    | `1,502`ns (3,004%)             | `688,231`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (225%)         | `100`ns (250%)                 | `11,111,111`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (275%)        | `110`ns (275%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `391`ns (978%)        | `460`ns (1,150%)               | `2,557,545`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,241`ns (3,103%)    | `1,252`ns (3,130%)             | `805,802`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,135`ns (5,338%)    | `2,183`ns (5,458%)             | `468,384`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `140`ns (100%)        | `150`ns (107%)                 | `7,142,857`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `181`ns (129%)        | `191`ns (136%)                 | `5,524,862`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `220`ns (157%)        | `230`ns (164%)                 | `4,545,455`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `70`ns (175%)         | `80`ns (200%)                  | `14,285,714`/sec      |

<!-- endblock(results) -->
