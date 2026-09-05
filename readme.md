# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 05 Sep 2026 13:09:41 GMT with Node.js v26.8.1 (V8 v14.6.202.34-node.28) on runnervmejwal (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (250%)        | `100`ns (250%)                 | `10,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (250%)        | `110`ns (275%)                 | `10,000,000`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `161`ns (403%)        | `170`ns (425%)                 | `6,211,180`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `281`ns (703%)        | `291`ns (728%)                 | `3,558,719`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `381`ns (953%)        | `391`ns (978%)                 | `2,624,672`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `401`ns (1,003%)      | `420`ns (1,050%)               | `2,493,766`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `831`ns (2,078%)      | `841`ns (2,103%)               | `1,203,369`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,352`ns (3,380%)    | `1,382`ns (3,455%)             | `739,645`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `280`ns (100%)        | `301`ns (108%)                 | `3,571,429`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `871`ns (311%)        | `932`ns (333%)                 | `1,148,106`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `15,207`ns (5,431%)   | `15,415`ns (5,505%)            | `65,759`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `51`ns (102%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (180%)         | `100`ns (200%)                 | `11,111,111`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `111`ns (222%)        | `120`ns (240%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `180`ns (360%)        | `181`ns (362%)                 | `5,555,556`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `400`ns (800%)        | `401`ns (802%)                 | `2,500,000`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,522`ns (3,044%)    | `1,542`ns (3,084%)             | `657,030`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (225%)         | `100`ns (250%)                 | `11,111,111`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (275%)        | `110`ns (275%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (303%)        | `130`ns (325%)                 | `8,264,463`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `371`ns (928%)        | `381`ns (953%)                 | `2,695,418`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `952`ns (2,380%)      | `962`ns (2,405%)               | `1,050,420`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,133`ns (5,333%)    | `2,153`ns (5,383%)             | `468,823`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `150`ns (100%)        | `151`ns (101%)                 | `6,666,667`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `170`ns (113%)        | `180`ns (120%)                 | `5,882,353`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `221`ns (147%)        | `231`ns (154%)                 | `4,524,887`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `70`ns (175%)         | `80`ns (200%)                  | `14,285,714`/sec      |

<!-- endblock(results) -->
