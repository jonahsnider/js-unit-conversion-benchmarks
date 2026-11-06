# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 06 Nov 2026 17:17:23 GMT with Node.js v26.13.0 (V8 v14.6.202.34-node.40) on runnervmwuk1x (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `49`ns (100%)         | `50`ns (102%)                  | `20,408,163`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (247%)        | `130`ns (265%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (265%)        | `131`ns (267%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (306%)        | `151`ns (308%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (449%)        | `231`ns (471%)                 | `4,545,455`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `361`ns (737%)        | `371`ns (757%)                 | `2,770,083`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (961%)        | `471`ns (961%)                 | `2,123,142`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `561`ns (1,145%)      | `571`ns (1,165%)               | `1,782,531`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,022`ns (2,086%)    | `1,041`ns (2,124%)             | `978,474`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,864`ns (3,804%)    | `1,894`ns (3,865%)             | `536,481`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `602`ns (100%)        | `691`ns (115%)                 | `1,661,130`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,533`ns (255%)      | `1,733`ns (288%)               | `652,316`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `24,607`ns (4,088%)   | `26,399`ns (4,385%)            | `40,639`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `111`ns (185%)        | `120`ns (200%)                 | `9,009,009`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `131`ns (218%)        | `140`ns (233%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (233%)        | `141`ns (235%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `200`ns (333%)        | `210`ns (350%)                 | `5,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (802%)        | `491`ns (818%)                 | `2,079,002`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,003`ns (3,338%)    | `2,024`ns (3,373%)             | `499,251`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (341%)        | `150`ns (366%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (341%)        | `150`ns (366%)                 | `7,142,857`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `141`ns (344%)        | `150`ns (366%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (1,173%)      | `492`ns (1,200%)               | `2,079,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,153`ns (2,812%)    | `1,162`ns (2,834%)             | `867,303`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,765`ns (6,744%)    | `2,805`ns (6,841%)             | `361,664`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `230`ns (100%)        | `240`ns (104%)                 | `4,347,826`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `250`ns (109%)        | `251`ns (109%)                 | `4,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `290`ns (126%)        | `301`ns (131%)                 | `3,448,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
