# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 01 Nov 2024 05:45:57 GMT with Node.js v20.18.0 (V8 v11.3.244.8-node.23) on fv-az1109-787 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (242%)        | `131`ns (262%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `151`ns (302%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `240`ns (480%)        | `250`ns (500%)                 | `4,166,667`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `431`ns (862%)        | `451`ns (902%)                 | `2,320,186`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `491`ns (982%)        | `501`ns (1,002%)               | `2,036,660`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `581`ns (1,162%)      | `601`ns (1,202%)               | `1,721,170`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,082`ns (2,164%)    | `1,102`ns (2,204%)             | `924,214`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,105`ns (4,210%)    | `2,135`ns (4,270%)             | `475,059`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `34,687`ns (69,374%)  | `34,847`ns (69,694%)           | `28,829`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `721`ns (100%)        | `761`ns (106%)                 | `1,386,963`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `29,807`ns (4,134%)   | `30,591`ns (4,243%)            | `33,549`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `76,671`ns (10,634%)  | `77,119`ns (10,696%)           | `13,043`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `121`ns (202%)        | `140`ns (233%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (335%)        | `211`ns (352%)                 | `4,975,124`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (768%)        | `471`ns (785%)                 | `2,169,197`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,175`ns (3,625%)    | `2,195`ns (3,658%)             | `459,770`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `17,647`ns (29,412%)  | `17,695`ns (29,492%)           | `56,667`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `150`ns (300%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `170`ns (340%)        | `180`ns (360%)                 | `5,882,353`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (1,002%)      | `511`ns (1,022%)               | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,212`ns (2,424%)    | `1,232`ns (2,464%)             | `825,083`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,135`ns (6,270%)    | `3,167`ns (6,334%)             | `318,979`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,983`ns (75,966%)  | `38,111`ns (76,222%)           | `26,328`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `191`ns (100%)        | `200`ns (105%)                 | `5,235,602`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (121%)        | `240`ns (126%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (147%)        | `281`ns (147%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
