# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 20 Nov 2026 00:25:03 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on runnervmccnms (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (275%)        | `110`ns (275%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `180`ns (450%)        | `181`ns (453%)                 | `5,555,556`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `301`ns (753%)        | `311`ns (778%)                 | `3,322,259`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `381`ns (953%)        | `391`ns (978%)                 | `2,624,672`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `420`ns (1,050%)      | `431`ns (1,078%)               | `2,380,952`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `841`ns (2,103%)      | `852`ns (2,130%)               | `1,189,061`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,412`ns (3,530%)    | `1,433`ns (3,583%)             | `708,215`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (100%)        | `320`ns (106%)                 | `3,322,259`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `891`ns (296%)        | `961`ns (319%)                 | `1,122,334`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `15,247`ns (5,065%)   | `15,479`ns (5,143%)            | `65,587`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `111`ns (185%)        | `120`ns (200%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `121`ns (202%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (202%)        | `130`ns (217%)                 | `8,264,463`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `180`ns (300%)        | `190`ns (317%)                 | `5,555,556`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `391`ns (652%)        | `401`ns (668%)                 | `2,557,545`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,523`ns (2,538%)    | `1,543`ns (2,572%)             | `656,599`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (250%)        | `110`ns (275%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (275%)        | `120`ns (300%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `391`ns (978%)        | `401`ns (1,003%)               | `2,557,545`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `961`ns (2,403%)      | `962`ns (2,405%)               | `1,040,583`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,155`ns (5,388%)    | `2,183`ns (5,458%)             | `464,037`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `170`ns (100%)        | `171`ns (101%)                 | `5,882,353`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `190`ns (112%)        | `191`ns (112%)                 | `5,263,158`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `240`ns (141%)        | `251`ns (148%)                 | `4,166,667`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `80`ns (200%)         | `80`ns (200%)                  | `12,500,000`/sec      |

<!-- endblock(results) -->
