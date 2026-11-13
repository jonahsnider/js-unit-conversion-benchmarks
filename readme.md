# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 13 Nov 2026 11:13:33 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on runnervmwuk1x (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (275%)        | `111`ns (278%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `111`ns (278%)        | `120`ns (300%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (300%)        | `130`ns (325%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `190`ns (475%)        | `191`ns (478%)                 | `5,263,158`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `320`ns (800%)        | `330`ns (825%)                 | `3,125,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `391`ns (978%)        | `400`ns (1,000%)               | `2,557,545`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `450`ns (1,125%)      | `471`ns (1,178%)               | `2,222,222`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `871`ns (2,178%)      | `932`ns (2,330%)               | `1,148,106`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,433`ns (3,583%)    | `1,472`ns (3,680%)             | `697,837`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (100%)        | `321`ns (107%)                 | `3,322,259`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `941`ns (313%)        | `1,022`ns (340%)               | `1,062,699`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `15,279`ns (5,076%)   | `15,559`ns (5,169%)            | `65,449`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `51`ns (102%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (220%)        | `111`ns (222%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `181`ns (362%)        | `191`ns (382%)                 | `5,524,862`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `400`ns (800%)        | `411`ns (822%)                 | `2,500,000`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,552`ns (3,104%)    | `1,592`ns (3,184%)             | `644,330`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `101`ns (253%)        | `110`ns (275%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (300%)        | `130`ns (325%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (303%)        | `130`ns (325%)                 | `8,264,463`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `431`ns (1,078%)      | `521`ns (1,303%)               | `2,320,186`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `961`ns (2,403%)      | `972`ns (2,430%)               | `1,040,583`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,205`ns (5,513%)    | `2,245`ns (5,613%)             | `453,515`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `170`ns (100%)        | `180`ns (106%)                 | `5,882,353`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `190`ns (112%)        | `191`ns (112%)                 | `5,263,158`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `250`ns (147%)        | `260`ns (153%)                 | `4,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `70`ns (175%)         | `80`ns (200%)                  | `14,285,714`/sec      |

<!-- endblock(results) -->
