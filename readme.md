# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 08 Aug 2026 21:07:36 GMT with Node.js v24.18.0 (V8 v13.6.233.17-node.50) on runnervmvrwv9 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (278%)        | `120`ns (300%)                 | `9,009,009`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (375%)        | `150`ns (375%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `200`ns (500%)        | `210`ns (525%)                 | `5,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `371`ns (928%)        | `381`ns (953%)                 | `2,695,418`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `521`ns (1,303%)      | `531`ns (1,328%)               | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `641`ns (1,602%)      | `651`ns (1,627%)               | `1,560,062`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,082`ns (2,705%)    | `1,092`ns (2,730%)             | `924,214`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,813`ns (4,533%)    | `1,834`ns (4,585%)             | `551,572`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `561`ns (100%)        | `611`ns (109%)                 | `1,782,531`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,843`ns (329%)      | `2,014`ns (359%)               | `542,594`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,823`ns (4,603%)   | `26,975`ns (4,808%)            | `38,725`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `121`ns (202%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (217%)        | `130`ns (217%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `131`ns (218%)        | `140`ns (233%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (350%)        | `211`ns (352%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `641`ns (1,068%)      | `651`ns (1,085%)               | `1,560,062`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,994`ns (3,323%)    | `2,034`ns (3,390%)             | `501,505`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `111`ns (278%)        | `120`ns (300%)                 | `9,009,009`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (350%)        | `150`ns (375%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (375%)        | `160`ns (400%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `490`ns (1,225%)      | `501`ns (1,253%)               | `2,040,816`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,583`ns (3,958%)    | `1,603`ns (4,008%)             | `631,712`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,685`ns (6,713%)    | `2,765`ns (6,913%)             | `372,439`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `211`ns (100%)        | `221`ns (105%)                 | `4,739,336`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (114%)        | `241`ns (114%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `300`ns (142%)        | `301`ns (143%)                 | `3,333,333`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
