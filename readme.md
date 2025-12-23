# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 23 Dec 2025 04:10:51 GMT with Node.js v24.12.0 (V8 v13.6.233.17-node.37) on runnervmh13bl (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `111`ns (278%)        | `120`ns (300%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (325%)        | `140`ns (350%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (350%)        | `141`ns (353%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `200`ns (500%)        | `201`ns (503%)                 | `5,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `361`ns (903%)        | `371`ns (928%)                 | `2,770,083`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `530`ns (1,325%)      | `541`ns (1,353%)               | `1,886,792`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `602`ns (1,505%)      | `612`ns (1,530%)               | `1,661,130`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,052`ns (2,630%)    | `1,072`ns (2,680%)             | `950,570`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,754`ns (4,385%)    | `1,783`ns (4,458%)             | `570,125`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `541`ns (100%)        | `611`ns (113%)                 | `1,848,429`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,723`ns (318%)      | `1,824`ns (337%)               | `580,383`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `26,303`ns (4,862%)   | `27,743`ns (5,128%)            | `38,018`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (186%)        | `131`ns (187%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (200%)        | `140`ns (200%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (200%)        | `150`ns (214%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (287%)        | `211`ns (301%)                 | `4,975,124`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `621`ns (887%)        | `631`ns (901%)                 | `1,610,306`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,014`ns (2,877%)    | `2,055`ns (2,936%)             | `496,524`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (300%)        | `130`ns (325%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `141`ns (353%)        | `150`ns (375%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (1,228%)      | `501`ns (1,253%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,523`ns (3,808%)    | `1,533`ns (3,833%)             | `656,599`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,625`ns (6,563%)    | `2,677`ns (6,693%)             | `380,952`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `211`ns (100%)        | `220`ns (104%)                 | `4,739,336`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `221`ns (105%)        | `231`ns (109%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `321`ns (152%)        | `331`ns (157%)                 | `3,115,265`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (220%)         | `100`ns (244%)                 | `11,111,111`/sec      |

<!-- endblock(results) -->
