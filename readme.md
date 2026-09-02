# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 02 Sep 2026 05:25:37 GMT with Node.js v26.8.1 (V8 v14.6.202.34-node.28) on runnervmgx7h7 (Linux-x64 AMD EPYC 9V74 80-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (222%)        | `130`ns (260%)                 | `9,009,009`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (260%)        | `130`ns (260%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (440%)        | `230`ns (460%)                 | `4,545,455`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `351`ns (702%)        | `370`ns (740%)                 | `2,849,003`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `491`ns (982%)        | `500`ns (1,000%)               | `2,036,660`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `531`ns (1,062%)      | `561`ns (1,122%)               | `1,883,239`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,072`ns (2,144%)    | `1,162`ns (2,324%)             | `932,836`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,763`ns (3,526%)    | `1,803`ns (3,606%)             | `567,215`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (100%)        | `371`ns (106%)                 | `2,849,003`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,121`ns (319%)      | `1,212`ns (345%)               | `892,061`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `19,599`ns (5,584%)   | `19,903`ns (5,670%)            | `51,023`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `61`ns (102%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `131`ns (218%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (233%)        | `150`ns (250%)                 | `7,142,857`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `150`ns (250%)        | `160`ns (267%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `221`ns (368%)        | `231`ns (385%)                 | `4,524,887`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `541`ns (902%)        | `551`ns (918%)                 | `1,848,429`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,963`ns (3,272%)    | `2,013`ns (3,355%)             | `509,424`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `141`ns (282%)                 | `7,142,857`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `160`ns (320%)        | `170`ns (340%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (982%)        | `591`ns (1,182%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,231`ns (2,462%)    | `1,242`ns (2,484%)             | `812,348`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,825`ns (5,650%)    | `2,885`ns (5,770%)             | `353,982`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `190`ns (100%)        | `191`ns (101%)                 | `5,263,158`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `241`ns (127%)        | `250`ns (132%)                 | `4,149,378`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (147%)        | `290`ns (153%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `91`ns (182%)         | `101`ns (202%)                 | `10,989,011`/sec      |

<!-- endblock(results) -->
