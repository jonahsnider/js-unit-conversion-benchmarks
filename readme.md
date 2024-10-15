# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 15 Oct 2024 21:22:31 GMT with Node.js v20.17.0 (V8 v11.3.244.8-node.23) on fv-az1530-664 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (222%)        | `131`ns (262%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (300%)        | `160`ns (320%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `251`ns (502%)        | `261`ns (522%)                 | `3,984,064`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `441`ns (882%)        | `451`ns (902%)                 | `2,267,574`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `512`ns (1,024%)      | `521`ns (1,042%)               | `1,953,125`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `601`ns (1,202%)      | `621`ns (1,242%)               | `1,663,894`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,122`ns (2,244%)    | `1,163`ns (2,326%)             | `891,266`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,125`ns (4,250%)    | `2,155`ns (4,310%)             | `470,588`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `41,951`ns (83,902%)  | `42,271`ns (84,542%)           | `23,837`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `702`ns (100%)        | `771`ns (110%)                 | `1,424,501`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,575`ns (4,071%)   | `29,647`ns (4,223%)            | `34,996`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90,559`ns (12,900%)  | `91,071`ns (12,973%)           | `11,043`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `69`ns (100%)         | `70`ns (101%)                  | `14,492,754`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (174%)        | `121`ns (175%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `131`ns (190%)        | `140`ns (203%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (333%)        | `250`ns (362%)                 | `4,347,826`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (697%)        | `491`ns (712%)                 | `2,079,002`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,175`ns (3,152%)    | `2,195`ns (3,181%)             | `459,770`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `21,439`ns (31,071%)  | `21,551`ns (31,233%)           | `46,644`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `131`ns (262%)        | `140`ns (280%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `141`ns (282%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `551`ns (1,102%)      | `570`ns (1,140%)               | `1,814,882`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,212`ns (2,424%)    | `1,223`ns (2,446%)             | `825,083`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,047`ns (6,094%)    | `3,077`ns (6,154%)             | `328,192`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `46,047`ns (92,094%)  | `46,367`ns (92,734%)           | `21,717`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `190`ns (100%)        | `200`ns (105%)                 | `5,263,158`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (122%)        | `241`ns (127%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `270`ns (142%)        | `271`ns (143%)                 | `3,703,704`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
