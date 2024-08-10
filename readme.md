# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 10 Aug 2024 12:15:42 GMT with Node.js v20.16.0 (V8 v11.3.244.8-node.23) on fv-az1016-590 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `61`ns (102%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (233%)        | `150`ns (250%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `181`ns (302%)        | `191`ns (318%)                 | `5,524,862`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `211`ns (352%)        | `220`ns (367%)                 | `4,739,336`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `431`ns (718%)        | `441`ns (735%)                 | `2,320,186`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `511`ns (852%)        | `521`ns (868%)                 | `1,956,947`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `581`ns (968%)        | `601`ns (1,002%)               | `1,721,170`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,092`ns (1,820%)    | `1,112`ns (1,853%)             | `915,751`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,115`ns (3,525%)    | `2,145`ns (3,575%)             | `472,813`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `34,591`ns (57,652%)  | `34,751`ns (57,918%)           | `28,909`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `762`ns (100%)        | `821`ns (108%)                 | `1,312,336`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `29,087`ns (3,817%)   | `30,079`ns (3,947%)            | `34,380`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `76,607`ns (10,053%)  | `77,055`ns (10,112%)           | `13,054`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (233%)        | `140`ns (233%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (335%)        | `211`ns (352%)                 | `4,975,124`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `470`ns (783%)        | `481`ns (802%)                 | `2,127,660`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,155`ns (3,592%)    | `2,175`ns (3,625%)             | `464,037`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `17,647`ns (29,412%)  | `17,727`ns (29,545%)           | `56,667`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `531`ns (1,062%)      | `541`ns (1,082%)               | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,213`ns (2,426%)    | `1,232`ns (2,464%)             | `824,402`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,037`ns (6,074%)    | `3,067`ns (6,134%)             | `329,272`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,983`ns (75,966%)  | `38,143`ns (76,286%)           | `26,328`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `190`ns (100%)        | `191`ns (101%)                 | `5,263,158`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (126%)        | `241`ns (127%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `270`ns (142%)        | `271`ns (143%)                 | `3,703,704`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
