# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 15 Jul 2026 05:08:21 GMT with Node.js v24.18.0 (V8 v13.6.233.17-node.50) on runnervm5mmn9 (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (225%)         | `110`ns (275%)                 | `11,111,111`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `120`ns (300%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (303%)        | `130`ns (325%)                 | `8,264,463`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `170`ns (425%)        | `171`ns (428%)                 | `5,882,353`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `291`ns (728%)        | `300`ns (750%)                 | `3,436,426`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `421`ns (1,053%)      | `441`ns (1,103%)               | `2,375,297`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `500`ns (1,250%)      | `501`ns (1,253%)               | `2,000,000`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `891`ns (2,228%)      | `941`ns (2,353%)               | `1,122,334`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,402`ns (3,505%)    | `1,432`ns (3,580%)             | `713,267`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (100%)        | `351`ns (103%)                 | `2,941,176`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `982`ns (289%)        | `1,061`ns (312%)               | `1,018,330`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `16,799`ns (4,941%)   | `17,311`ns (5,091%)            | `59,527`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (180%)         | `100`ns (200%)                 | `11,111,111`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (220%)        | `111`ns (222%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `190`ns (380%)        | `200`ns (400%)                 | `5,263,158`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `521`ns (1,042%)      | `521`ns (1,042%)               | `1,919,386`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,502`ns (3,004%)    | `1,543`ns (3,086%)             | `665,779`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `100`ns (250%)        | `100`ns (250%)                 | `10,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (303%)        | `130`ns (325%)                 | `8,264,463`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (325%)        | `130`ns (325%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (1,003%)      | `491`ns (1,228%)               | `2,493,766`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,242`ns (3,105%)    | `1,252`ns (3,130%)             | `805,153`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,103`ns (5,258%)    | `2,143`ns (5,358%)             | `475,511`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `150`ns (100%)        | `160`ns (107%)                 | `6,666,667`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `180`ns (120%)        | `181`ns (121%)                 | `5,555,556`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `220`ns (147%)        | `230`ns (153%)                 | `4,545,455`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `80`ns (200%)         | `80`ns (200%)                  | `12,500,000`/sec      |

<!-- endblock(results) -->
