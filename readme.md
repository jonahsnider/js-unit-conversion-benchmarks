# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 03 Sep 2026 18:16:24 GMT with Node.js v26.8.1 (V8 v14.6.202.34-node.28) on runnervmgx7h7 (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (222%)        | `120`ns (240%)                 | `9,009,009`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (260%)        | `130`ns (260%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `140`ns (280%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (460%)        | `231`ns (462%)                 | `4,347,826`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `361`ns (722%)        | `381`ns (762%)                 | `2,770,083`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `491`ns (982%)        | `491`ns (982%)                 | `2,036,660`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `521`ns (1,042%)      | `541`ns (1,082%)               | `1,919,386`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,092`ns (2,184%)    | `1,122`ns (2,244%)             | `915,751`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,783`ns (3,566%)    | `1,813`ns (3,626%)             | `560,852`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (100%)        | `371`ns (106%)                 | `2,849,003`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,111`ns (317%)      | `1,182`ns (337%)               | `900,090`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `19,455`ns (5,543%)   | `19,743`ns (5,625%)            | `51,401`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `121`ns (202%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `141`ns (235%)        | `150`ns (250%)                 | `7,092,199`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `141`ns (235%)        | `150`ns (250%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (367%)        | `231`ns (385%)                 | `4,545,455`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `551`ns (918%)        | `561`ns (935%)                 | `1,814,882`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,063`ns (3,438%)    | `2,093`ns (3,488%)             | `484,731`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `150`ns (300%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `150`ns (300%)                 | `7,142,857`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `150`ns (300%)        | `150`ns (300%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (982%)        | `511`ns (1,022%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,232`ns (2,464%)    | `1,242`ns (2,484%)             | `811,688`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,795`ns (5,590%)    | `2,815`ns (5,630%)             | `357,782`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (116%)        | `241`ns (121%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `271`ns (136%)        | `281`ns (141%)                 | `3,690,037`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
