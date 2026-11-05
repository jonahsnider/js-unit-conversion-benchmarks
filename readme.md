# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 05 Nov 2026 09:18:10 GMT with Node.js v26.13.0 (V8 v14.6.202.34-node.40) on runnervmwuk1x (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (250%)        | `110`ns (275%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (300%)        | `130`ns (325%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (325%)        | `131`ns (328%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `181`ns (453%)        | `190`ns (475%)                 | `5,524,862`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `300`ns (750%)        | `301`ns (753%)                 | `3,333,333`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `390`ns (975%)        | `391`ns (978%)                 | `2,564,103`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `421`ns (1,053%)      | `441`ns (1,103%)               | `2,375,297`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `832`ns (2,080%)      | `851`ns (2,128%)               | `1,201,923`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,372`ns (3,430%)    | `1,383`ns (3,458%)             | `728,863`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `291`ns (100%)        | `321`ns (110%)                 | `3,436,426`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `891`ns (306%)        | `971`ns (334%)                 | `1,122,334`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `15,199`ns (5,223%)   | `15,447`ns (5,308%)            | `65,794`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `60`ns (120%)                  | `20,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `180`ns (360%)        | `190`ns (380%)                 | `5,555,556`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `401`ns (802%)        | `410`ns (820%)                 | `2,493,766`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,543`ns (3,086%)    | `1,572`ns (3,144%)             | `648,088`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (275%)        | `120`ns (300%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (275%)        | `111`ns (278%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `130`ns (325%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `411`ns (1,028%)      | `421`ns (1,053%)               | `2,433,090`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `952`ns (2,380%)      | `961`ns (2,403%)               | `1,050,420`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,183`ns (5,458%)    | `2,213`ns (5,533%)             | `458,085`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `180`ns (100%)        | `190`ns (106%)                 | `5,555,556`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `190`ns (106%)        | `200`ns (111%)                 | `5,263,158`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `250`ns (139%)        | `270`ns (150%)                 | `4,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `70`ns (175%)         | `80`ns (200%)                  | `14,285,714`/sec      |

<!-- endblock(results) -->
