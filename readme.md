# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 17 Apr 2026 14:37:21 GMT with Node.js v24.14.1 (V8 v13.6.233.17-node.44) on runnervmeorf1 (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `160`ns (320%)        | `160`ns (320%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (440%)        | `230`ns (460%)                 | `4,545,455`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `381`ns (762%)        | `390`ns (780%)                 | `2,624,672`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `511`ns (1,022%)      | `531`ns (1,062%)               | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `650`ns (1,300%)      | `661`ns (1,322%)               | `1,538,462`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,152`ns (2,304%)    | `1,202`ns (2,404%)             | `868,056`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,723`ns (3,446%)    | `1,762`ns (3,524%)             | `580,383`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `341`ns (100%)        | `361`ns (106%)                 | `2,932,551`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,232`ns (361%)      | `1,312`ns (385%)               | `811,688`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `21,647`ns (6,348%)   | `22,191`ns (6,508%)            | `46,196`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `130`ns (217%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (233%)        | `140`ns (233%)                 | `7,142,857`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `160`ns (267%)        | `160`ns (267%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (367%)        | `221`ns (368%)                 | `4,545,455`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `661`ns (1,102%)      | `661`ns (1,102%)               | `1,512,859`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,943`ns (3,238%)    | `1,983`ns (3,305%)             | `514,668`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `131`ns (262%)        | `140`ns (280%)                 | `7,633,588`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `170`ns (340%)        | `171`ns (342%)                 | `5,882,353`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (1,000%)      | `591`ns (1,182%)               | `2,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,563`ns (3,126%)    | `1,583`ns (3,166%)             | `639,795`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,705`ns (5,410%)    | `2,745`ns (5,490%)             | `369,686`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `181`ns (100%)        | `190`ns (105%)                 | `5,524,862`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (127%)        | `240`ns (133%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (155%)        | `290`ns (160%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (180%)         | `100`ns (200%)                 | `11,111,111`/sec      |

<!-- endblock(results) -->
