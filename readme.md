# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 16 Nov 2026 06:12:51 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on runnervmccnms (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (250%)        | `100`ns (250%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (275%)        | `120`ns (300%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (275%)        | `110`ns (275%)                 | `9,090,909`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `180`ns (450%)        | `181`ns (453%)                 | `5,555,556`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `291`ns (728%)        | `301`ns (753%)                 | `3,436,426`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `390`ns (975%)        | `391`ns (978%)                 | `2,564,103`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `401`ns (1,003%)      | `421`ns (1,053%)               | `2,493,766`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `831`ns (2,078%)      | `841`ns (2,103%)               | `1,203,369`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,362`ns (3,405%)    | `1,382`ns (3,455%)             | `734,214`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (100%)        | `320`ns (107%)                 | `3,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `921`ns (307%)        | `991`ns (330%)                 | `1,085,776`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `15,287`ns (5,096%)   | `15,543`ns (5,181%)            | `65,415`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (200%)        | `121`ns (202%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `130`ns (217%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `181`ns (302%)        | `191`ns (318%)                 | `5,524,862`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `410`ns (683%)        | `420`ns (700%)                 | `2,439,024`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,542`ns (2,570%)    | `1,573`ns (2,622%)             | `648,508`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (250%)        | `110`ns (275%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (275%)        | `120`ns (300%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (325%)        | `130`ns (325%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `391`ns (978%)        | `460`ns (1,150%)               | `2,557,545`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `961`ns (2,403%)      | `962`ns (2,405%)               | `1,040,583`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,233`ns (5,583%)    | `2,265`ns (5,663%)             | `447,828`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `170`ns (100%)        | `171`ns (101%)                 | `5,882,353`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `181`ns (106%)        | `190`ns (112%)                 | `5,524,862`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `240`ns (141%)        | `250`ns (147%)                 | `4,166,667`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `70`ns (175%)         | `80`ns (200%)                  | `14,285,714`/sec      |

<!-- endblock(results) -->
