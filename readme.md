# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 23 Oct 2024 09:57:25 GMT with Node.js v20.18.0 (V8 v11.3.244.8-node.23) on fv-az1198-739 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `121`ns (242%)        | `140`ns (280%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `231`ns (462%)        | `250`ns (500%)                 | `4,329,004`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `421`ns (842%)        | `440`ns (880%)                 | `2,375,297`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `491`ns (982%)        | `501`ns (1,002%)               | `2,036,660`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `611`ns (1,222%)      | `621`ns (1,242%)               | `1,636,661`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,112`ns (2,224%)    | `1,122`ns (2,244%)             | `899,281`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,145`ns (4,290%)    | `2,165`ns (4,330%)             | `466,200`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `34,655`ns (69,310%)  | `34,815`ns (69,630%)           | `28,856`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `771`ns (100%)        | `812`ns (105%)                 | `1,297,017`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `29,759`ns (3,860%)   | `30,559`ns (3,964%)            | `33,603`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `75,967`ns (9,853%)   | `76,415`ns (9,911%)            | `13,164`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `69`ns (100%)         | `70`ns (101%)                  | `14,492,754`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (188%)        | `131`ns (190%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (203%)        | `150`ns (217%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (333%)        | `240`ns (348%)                 | `4,347,826`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (697%)        | `491`ns (712%)                 | `2,079,002`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,185`ns (3,167%)    | `2,205`ns (3,196%)             | `457,666`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `17,583`ns (25,483%)  | `17,663`ns (25,599%)           | `56,873`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `141`ns (282%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `150`ns (300%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `511`ns (1,022%)      | `521`ns (1,042%)               | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,202`ns (2,404%)    | `1,213`ns (2,426%)             | `831,947`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,105`ns (6,210%)    | `3,137`ns (6,274%)             | `322,061`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `38,111`ns (76,222%)  | `38,239`ns (76,478%)           | `26,239`/sec          |

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
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
