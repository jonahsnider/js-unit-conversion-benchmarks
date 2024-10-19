# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 19 Oct 2024 10:50:08 GMT with Node.js v20.18.0 (V8 v11.3.244.8-node.23) on fv-az1272-401 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (300%)        | `171`ns (342%)                 | `6,666,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (300%)        | `161`ns (322%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (420%)        | `221`ns (442%)                 | `4,761,905`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `441`ns (882%)        | `461`ns (922%)                 | `2,267,574`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `491`ns (982%)        | `511`ns (1,022%)               | `2,036,660`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `581`ns (1,162%)      | `601`ns (1,202%)               | `1,721,170`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,072`ns (2,144%)    | `1,102`ns (2,204%)             | `932,836`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,105`ns (4,210%)    | `2,135`ns (4,270%)             | `475,059`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `34,623`ns (69,246%)  | `34,783`ns (69,566%)           | `28,883`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `712`ns (100%)        | `761`ns (107%)                 | `1,404,494`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,943`ns (4,065%)   | `29,887`ns (4,198%)            | `34,551`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `75,391`ns (10,589%)  | `75,839`ns (10,652%)           | `13,264`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (233%)        | `141`ns (235%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (250%)        | `150`ns (250%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (350%)        | `211`ns (352%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (768%)        | `461`ns (768%)                 | `2,169,197`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,165`ns (3,608%)    | `2,185`ns (3,642%)             | `461,894`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `17,647`ns (29,412%)  | `17,711`ns (29,518%)           | `56,667`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (1,122%)      | `581`ns (1,162%)               | `1,782,531`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,182`ns (2,364%)    | `1,202`ns (2,404%)             | `846,024`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,087`ns (6,174%)    | `3,117`ns (6,234%)             | `323,939`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `38,047`ns (76,094%)  | `38,175`ns (76,350%)           | `26,283`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `201`ns (100%)        | `211`ns (105%)                 | `4,975,124`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (115%)        | `240`ns (119%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `291`ns (145%)        | `301`ns (150%)                 | `3,436,426`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
