# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 31 Oct 2024 10:48:42 GMT with Node.js v20.18.0 (V8 v11.3.244.8-node.23) on fv-az914-570 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (300%)        | `151`ns (302%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `240`ns (480%)        | `251`ns (502%)                 | `4,166,667`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `411`ns (822%)        | `421`ns (842%)                 | `2,433,090`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `491`ns (982%)        | `501`ns (1,002%)               | `2,036,660`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `601`ns (1,202%)      | `622`ns (1,244%)               | `1,663,894`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,102`ns (2,204%)    | `1,142`ns (2,284%)             | `907,441`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,125`ns (4,250%)    | `2,165`ns (4,330%)             | `470,588`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `34,591`ns (69,182%)  | `34,751`ns (69,502%)           | `28,909`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `761`ns (100%)        | `812`ns (107%)                 | `1,314,060`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `29,327`ns (3,854%)   | `30,271`ns (3,978%)            | `34,098`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `75,903`ns (9,974%)   | `76,415`ns (10,041%)           | `13,175`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `130`ns (217%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `131`ns (218%)        | `140`ns (233%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (335%)        | `211`ns (352%)                 | `4,975,124`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (768%)        | `471`ns (785%)                 | `2,169,197`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,195`ns (3,658%)    | `2,215`ns (3,692%)             | `455,581`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `17,743`ns (29,572%)  | `17,807`ns (29,678%)           | `56,360`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `131`ns (262%)        | `140`ns (280%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (300%)        | `160`ns (320%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (1,042%)      | `541`ns (1,082%)               | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,203`ns (2,406%)    | `1,223`ns (2,446%)             | `831,255`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,067`ns (6,134%)    | `3,097`ns (6,194%)             | `326,052`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `38,015`ns (76,030%)  | `38,143`ns (76,286%)           | `26,305`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `190`ns (100%)        | `200`ns (105%)                 | `5,263,158`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (126%)        | `241`ns (127%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `271`ns (143%)        | `281`ns (148%)                 | `3,690,037`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
