# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 30 Oct 2026 11:12:35 GMT with Node.js v26.13.0 (V8 v14.6.202.34-node.40) on runnervmnwato (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (268%)        | `120`ns (293%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (293%)        | `121`ns (295%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `141`ns (344%)        | `150`ns (366%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (490%)        | `211`ns (515%)                 | `4,975,124`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `351`ns (856%)        | `361`ns (880%)                 | `2,849,003`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (1,124%)      | `471`ns (1,149%)               | `2,169,197`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `521`ns (1,271%)      | `541`ns (1,320%)               | `1,919,386`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,062`ns (2,590%)    | `1,072`ns (2,615%)             | `941,620`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,933`ns (4,715%)    | `1,964`ns (4,790%)             | `517,331`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `681`ns (100%)        | `752`ns (110%)                 | `1,468,429`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,644`ns (241%)      | `1,814`ns (266%)               | `608,273`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `24,431`ns (3,588%)   | `25,679`ns (3,771%)            | `40,932`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `141`ns (235%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (233%)        | `141`ns (235%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (233%)        | `141`ns (235%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (335%)        | `211`ns (352%)                 | `4,975,124`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `490`ns (817%)        | `491`ns (818%)                 | `2,040,816`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,003`ns (3,338%)    | `2,024`ns (3,373%)             | `499,251`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `49`ns (100%)         | `50`ns (102%)                  | `20,408,163`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `131`ns (267%)        | `140`ns (286%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (306%)        | `160`ns (327%)                 | `6,666,667`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `150`ns (306%)        | `151`ns (308%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (982%)        | `501`ns (1,022%)               | `2,079,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,163`ns (2,373%)    | `1,173`ns (2,394%)             | `859,845`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,765`ns (5,643%)    | `2,805`ns (5,724%)             | `361,664`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `230`ns (100%)        | `240`ns (104%)                 | `4,347,826`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `251`ns (109%)        | `260`ns (113%)                 | `3,984,064`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `301`ns (131%)        | `311`ns (135%)                 | `3,322,259`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `110`ns (220%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
