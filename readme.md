# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 30 Jul 2026 16:35:42 GMT with Node.js v24.18.0 (V8 v13.6.233.17-node.50) on runnervmvrwv9 (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90`ns (225%)         | `100`ns (250%)                 | `11,111,111`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (275%)        | `110`ns (275%)                 | `9,090,909`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `171`ns (428%)        | `180`ns (450%)                 | `5,847,953`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `291`ns (728%)        | `300`ns (750%)                 | `3,436,426`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `401`ns (1,003%)      | `411`ns (1,028%)               | `2,493,766`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `490`ns (1,225%)      | `491`ns (1,228%)               | `2,040,816`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `852`ns (2,130%)      | `862`ns (2,155%)               | `1,173,709`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,332`ns (3,330%)    | `1,352`ns (3,380%)             | `750,751`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `260`ns (100%)        | `271`ns (104%)                 | `3,846,154`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `961`ns (370%)        | `1,022`ns (393%)               | `1,040,583`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `16,639`ns (6,400%)   | `16,959`ns (6,523%)            | `60,100`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `91`ns (182%)         | `100`ns (200%)                 | `10,989,011`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `170`ns (340%)        | `180`ns (360%)                 | `5,882,353`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `511`ns (1,022%)      | `520`ns (1,040%)               | `1,956,947`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,483`ns (2,966%)    | `1,532`ns (3,064%)             | `674,309`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `100`ns (250%)        | `100`ns (250%)                 | `10,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (250%)        | `100`ns (250%)                 | `10,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (1,003%)      | `411`ns (1,028%)               | `2,493,766`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,242`ns (3,105%)    | `1,242`ns (3,105%)             | `805,153`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,093`ns (5,233%)    | `2,125`ns (5,313%)             | `477,783`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `150`ns (100%)        | `151`ns (101%)                 | `6,666,667`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `170`ns (113%)        | `180`ns (120%)                 | `5,882,353`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `210`ns (140%)        | `211`ns (141%)                 | `4,761,905`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `71`ns (178%)         | `80`ns (200%)                  | `14,084,507`/sec      |

<!-- endblock(results) -->
