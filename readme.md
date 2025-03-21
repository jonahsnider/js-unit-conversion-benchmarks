# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 21 Mar 2025 15:23:38 GMT with Node.js v22.14.0 (V8 v12.4.254.21-node.22) on fv-az1921-652 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `51`ns (100%)         | `60`ns (118%)                  | `19,607,843`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (216%)        | `110`ns (216%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (235%)        | `121`ns (237%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `121`ns (237%)        | `130`ns (255%)                 | `8,264,463`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `260`ns (510%)        | `261`ns (512%)                 | `3,846,154`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `411`ns (806%)        | `411`ns (806%)                 | `2,433,090`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `451`ns (884%)        | `461`ns (904%)                 | `2,217,295`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `571`ns (1,120%)      | `591`ns (1,159%)               | `1,751,313`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,072`ns (2,102%)    | `1,091`ns (2,139%)             | `932,836`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,043`ns (4,006%)    | `2,065`ns (4,049%)             | `489,476`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `611`ns (100%)        | `691`ns (113%)                 | `1,636,661`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,192`ns (195%)      | `1,293`ns (212%)               | `838,926`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,439`ns (4,164%)   | `27,183`ns (4,449%)            | `39,310`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (220%)        | `120`ns (240%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (220%)        | `120`ns (240%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `141`ns (282%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `231`ns (462%)        | `241`ns (482%)                 | `4,329,004`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `451`ns (902%)        | `451`ns (902%)                 | `2,217,295`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,145`ns (4,290%)    | `2,165`ns (4,330%)             | `466,200`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (300%)        | `160`ns (320%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (1,002%)      | `521`ns (1,042%)               | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,102`ns (2,204%)    | `1,111`ns (2,222%)             | `907,441`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,845`ns (5,690%)    | `2,865`ns (5,730%)             | `351,494`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (116%)        | `240`ns (120%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (140%)        | `281`ns (141%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `91`ns (182%)         | `100`ns (200%)                 | `10,989,011`/sec      |

<!-- endblock(results) -->
