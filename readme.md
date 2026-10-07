# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 07 Oct 2026 17:27:35 GMT with Node.js v26.11.0 (V8 v14.6.202.34-node.37) on runnervm8df0l (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `111`ns (271%)        | `120`ns (293%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (293%)        | `130`ns (317%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (293%)        | `121`ns (295%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `191`ns (466%)        | `201`ns (490%)                 | `5,235,602`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `341`ns (832%)        | `351`ns (856%)                 | `2,932,551`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (1,124%)      | `471`ns (1,149%)               | `2,169,197`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `501`ns (1,222%)      | `511`ns (1,246%)               | `1,996,008`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `992`ns (2,420%)      | `1,002`ns (2,444%)             | `1,008,065`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,814`ns (4,424%)    | `1,843`ns (4,495%)             | `551,268`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `601`ns (100%)        | `681`ns (113%)                 | `1,663,894`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,583`ns (263%)      | `1,754`ns (292%)               | `631,712`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `23,999`ns (3,993%)   | `25,311`ns (4,211%)            | `41,668`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `61`ns (102%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `121`ns (202%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (335%)        | `211`ns (352%)                 | `4,975,124`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (802%)        | `501`ns (835%)                 | `2,079,002`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,953`ns (3,255%)    | `1,974`ns (3,290%)             | `512,033`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (293%)        | `121`ns (295%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (317%)        | `130`ns (317%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `131`ns (320%)        | `140`ns (341%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `472`ns (1,151%)      | `491`ns (1,198%)               | `2,118,644`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,162`ns (2,834%)    | `1,172`ns (2,859%)             | `860,585`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,807`ns (6,846%)    | `2,847`ns (6,944%)             | `356,252`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (115%)        | `231`ns (116%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `281`ns (141%)        | `291`ns (146%)                 | `3,558,719`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
