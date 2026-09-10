# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 10 Sep 2026 18:42:04 GMT with Node.js v26.8.2 (V8 v14.6.202.34-node.28) on runnervmlun5p (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (300%)        | `130`ns (325%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `120`ns (300%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `171`ns (428%)        | `180`ns (450%)                 | `5,847,953`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `280`ns (700%)        | `281`ns (703%)                 | `3,571,429`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `390`ns (975%)        | `391`ns (978%)                 | `2,564,103`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `391`ns (978%)        | `411`ns (1,028%)               | `2,557,545`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `822`ns (2,055%)      | `841`ns (2,103%)               | `1,216,545`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,372`ns (3,430%)    | `1,393`ns (3,483%)             | `728,863`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (100%)        | `321`ns (107%)                 | `3,322,259`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `862`ns (286%)        | `931`ns (309%)                 | `1,160,093`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `15,263`ns (5,071%)   | `15,487`ns (5,145%)            | `65,518`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (180%)         | `100`ns (200%)                 | `11,111,111`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (220%)        | `110`ns (220%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `171`ns (342%)        | `181`ns (362%)                 | `5,847,953`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `391`ns (782%)        | `401`ns (802%)                 | `2,557,545`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,512`ns (3,024%)    | `1,533`ns (3,066%)             | `661,376`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (225%)         | `100`ns (250%)                 | `11,111,111`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (250%)        | `110`ns (275%)                 | `10,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `120`ns (300%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `370`ns (925%)        | `381`ns (953%)                 | `2,702,703`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `952`ns (2,380%)      | `962`ns (2,405%)               | `1,050,420`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,153`ns (5,383%)    | `2,185`ns (5,463%)             | `464,468`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `150`ns (100%)        | `151`ns (101%)                 | `6,666,667`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `180`ns (120%)        | `190`ns (127%)                 | `5,555,556`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `211`ns (141%)        | `221`ns (147%)                 | `4,739,336`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `80`ns (200%)         | `81`ns (203%)                  | `12,500,000`/sec      |

<!-- endblock(results) -->
