# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 13 Nov 2026 09:15:27 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on runnervmwuk1x (Linux-x64 AMD EPYC 9V45 96-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `30`ns (100%)         | `30`ns (100%)                  | `33,333,333`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `70`ns (233%)         | `90`ns (300%)                  | `14,285,714`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71`ns (237%)         | `80`ns (267%)                  | `14,084,507`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `90`ns (300%)         | `91`ns (303%)                  | `11,111,111`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `150`ns (500%)        | `151`ns (503%)                 | `6,666,667`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `210`ns (700%)        | `211`ns (703%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `260`ns (867%)        | `261`ns (870%)                 | `3,846,154`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `271`ns (903%)        | `281`ns (937%)                 | `3,690,037`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `581`ns (1,937%)      | `591`ns (1,970%)               | `1,721,170`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,041`ns (3,470%)    | `1,052`ns (3,507%)             | `960,615`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `191`ns (100%)        | `210`ns (110%)                 | `5,235,602`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `641`ns (336%)        | `721`ns (377%)                 | `1,560,062`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `10,119`ns (5,298%)   | `10,463`ns (5,478%)            | `98,824`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `70`ns (175%)         | `80`ns (200%)                  | `14,285,714`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `80`ns (200%)         | `90`ns (225%)                  | `12,500,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `91`ns (228%)         | `100`ns (250%)                 | `10,989,011`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `140`ns (350%)        | `150`ns (375%)                 | `7,142,857`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `280`ns (700%)        | `281`ns (703%)                 | `3,571,429`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,112`ns (2,780%)    | `1,141`ns (2,853%)             | `899,281`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `30`ns (100%)         | `30`ns (100%)                  | `33,333,333`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `70`ns (233%)         | `80`ns (267%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (300%)         | `100`ns (333%)                 | `11,111,111`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90`ns (300%)         | `91`ns (303%)                  | `11,111,111`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `290`ns (967%)        | `300`ns (1,000%)               | `3,448,276`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `631`ns (2,103%)      | `641`ns (2,137%)               | `1,584,786`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,552`ns (5,173%)    | `1,573`ns (5,243%)             | `644,330`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `121`ns (100%)        | `131`ns (108%)                 | `8,264,463`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `140`ns (116%)        | `140`ns (116%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `171`ns (141%)        | `181`ns (150%)                 | `5,847,953`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `30`ns (100%)         | `40`ns (133%)                  | `33,333,333`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `60`ns (200%)         | `60`ns (200%)                  | `16,666,667`/sec      |

<!-- endblock(results) -->
