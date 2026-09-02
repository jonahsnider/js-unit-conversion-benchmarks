# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 02 Sep 2026 22:10:39 GMT with Node.js v26.8.1 (V8 v14.6.202.34-node.28) on runnervmgx7h7 (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (275%)        | `110`ns (275%)                 | `9,090,909`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `180`ns (450%)        | `180`ns (450%)                 | `5,555,556`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `290`ns (725%)        | `300`ns (750%)                 | `3,448,276`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `391`ns (978%)        | `400`ns (1,000%)               | `2,557,545`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `401`ns (1,003%)      | `421`ns (1,053%)               | `2,493,766`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `841`ns (2,103%)      | `871`ns (2,178%)               | `1,189,061`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,372`ns (3,430%)    | `1,392`ns (3,480%)             | `728,863`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `260`ns (100%)        | `280`ns (108%)                 | `3,846,154`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `912`ns (351%)        | `981`ns (377%)                 | `1,096,491`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `15,303`ns (5,886%)   | `15,503`ns (5,963%)            | `65,347`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `51`ns (102%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (180%)         | `100`ns (200%)                 | `11,111,111`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (220%)        | `120`ns (240%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `170`ns (340%)        | `180`ns (360%)                 | `5,882,353`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `400`ns (800%)        | `410`ns (820%)                 | `2,500,000`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,492`ns (2,984%)    | `1,523`ns (3,046%)             | `670,241`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (225%)         | `100`ns (250%)                 | `11,111,111`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `101`ns (253%)        | `110`ns (275%)                 | `9,900,990`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `120`ns (300%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `391`ns (978%)        | `431`ns (1,078%)               | `2,557,545`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `961`ns (2,403%)      | `962`ns (2,405%)               | `1,040,583`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,203`ns (5,508%)    | `2,225`ns (5,563%)             | `453,926`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `150`ns (100%)        | `160`ns (107%)                 | `6,666,667`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `181`ns (121%)        | `190`ns (127%)                 | `5,524,862`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `210`ns (140%)        | `220`ns (147%)                 | `4,761,905`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `70`ns (175%)         | `80`ns (200%)                  | `14,285,714`/sec      |

<!-- endblock(results) -->
