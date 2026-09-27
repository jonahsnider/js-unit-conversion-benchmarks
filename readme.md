# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 27 Sep 2026 00:03:58 GMT with Node.js v26.10.0 (V8 v14.6.202.34-node.34) on runnervmtr4k5 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (224%)        | `120`ns (245%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (224%)        | `120`ns (245%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (286%)        | `141`ns (288%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (429%)        | `211`ns (431%)                 | `4,761,905`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `341`ns (696%)        | `351`ns (716%)                 | `2,932,551`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (941%)        | `461`ns (941%)                 | `2,169,197`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `521`ns (1,063%)      | `531`ns (1,084%)               | `1,919,386`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,013`ns (2,067%)    | `1,032`ns (2,106%)             | `987,167`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,833`ns (3,741%)    | `1,854`ns (3,784%)             | `545,554`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `561`ns (100%)        | `641`ns (114%)                 | `1,782,531`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,614`ns (288%)      | `1,753`ns (312%)               | `619,579`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `24,015`ns (4,281%)   | `25,551`ns (4,555%)            | `41,641`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (183%)        | `111`ns (185%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (233%)        | `150`ns (250%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (335%)        | `211`ns (352%)                 | `4,975,124`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (802%)        | `501`ns (835%)                 | `2,079,002`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,963`ns (3,272%)    | `1,984`ns (3,307%)             | `509,424`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (293%)        | `120`ns (293%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `121`ns (295%)        | `130`ns (317%)                 | `8,264,463`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (341%)        | `150`ns (366%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `461`ns (1,124%)      | `481`ns (1,173%)               | `2,169,197`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,152`ns (2,810%)    | `1,162`ns (2,834%)             | `868,056`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,777`ns (6,773%)    | `2,825`ns (6,890%)             | `360,101`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `251`ns (125%)        | `260`ns (130%)                 | `3,984,064`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `290`ns (145%)        | `291`ns (146%)                 | `3,448,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
