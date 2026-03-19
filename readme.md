# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 19 Mar 2026 21:42:44 GMT with Node.js v24.14.0 (V8 v13.6.233.17-node.41) on runnervm46oaq (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `51`ns (102%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (220%)        | `111`ns (222%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (300%)        | `151`ns (302%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (402%)        | `210`ns (420%)                 | `4,975,124`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `341`ns (682%)        | `350`ns (700%)                 | `2,932,551`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `511`ns (1,022%)      | `521`ns (1,042%)               | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `612`ns (1,224%)      | `621`ns (1,242%)               | `1,633,987`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,062`ns (2,124%)    | `1,082`ns (2,164%)             | `941,620`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,774`ns (3,548%)    | `1,803`ns (3,606%)             | `563,698`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `521`ns (100%)        | `581`ns (112%)                 | `1,919,386`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,613`ns (310%)      | `1,753`ns (336%)               | `619,963`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,679`ns (4,929%)   | `26,671`ns (5,119%)            | `38,942`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `61`ns (102%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `120`ns (200%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `150`ns (250%)        | `150`ns (250%)                 | `6,666,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `161`ns (268%)        | `170`ns (283%)                 | `6,211,180`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (350%)        | `211`ns (352%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `612`ns (1,020%)      | `630`ns (1,050%)               | `1,633,987`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,894`ns (3,157%)    | `1,943`ns (3,238%)             | `527,983`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (350%)        | `150`ns (375%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `471`ns (1,178%)      | `481`ns (1,203%)               | `2,123,142`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,522`ns (3,805%)    | `1,532`ns (3,830%)             | `657,030`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,645`ns (6,613%)    | `2,725`ns (6,813%)             | `378,072`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `210`ns (100%)        | `211`ns (100%)                 | `4,761,905`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (110%)        | `231`ns (110%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (133%)        | `281`ns (134%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (180%)         | `91`ns (182%)                  | `11,111,111`/sec      |

<!-- endblock(results) -->
