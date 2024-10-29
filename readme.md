# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 29 Oct 2024 00:32:59 GMT with Node.js v20.18.0 (V8 v11.3.244.8-node.23) on fv-az841-46 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `150`ns (300%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `251`ns (502%)        | `261`ns (522%)                 | `3,984,064`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `440`ns (880%)        | `460`ns (920%)                 | `2,272,727`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `501`ns (1,002%)      | `511`ns (1,022%)               | `1,996,008`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `612`ns (1,224%)      | `632`ns (1,264%)               | `1,633,987`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,153`ns (2,306%)    | `1,182`ns (2,364%)             | `867,303`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,205`ns (4,410%)    | `2,245`ns (4,490%)             | `453,515`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `34,719`ns (69,438%)  | `34,879`ns (69,758%)           | `28,803`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `711`ns (100%)        | `761`ns (107%)                 | `1,406,470`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `29,967`ns (4,215%)   | `30,847`ns (4,339%)            | `33,370`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `75,903`ns (10,676%)  | `76,351`ns (10,739%)           | `13,175`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `61`ns (102%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `140`ns (233%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (250%)        | `150`ns (250%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (383%)        | `241`ns (402%)                 | `4,347,826`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (802%)        | `491`ns (818%)                 | `2,079,002`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,165`ns (3,608%)    | `2,195`ns (3,658%)             | `461,894`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `17,631`ns (29,385%)  | `17,695`ns (29,492%)           | `56,718`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `150`ns (300%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `160`ns (320%)        | `170`ns (340%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `551`ns (1,102%)      | `571`ns (1,142%)               | `1,814,882`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,222`ns (2,444%)    | `1,242`ns (2,484%)             | `818,331`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,077`ns (6,154%)    | `3,107`ns (6,214%)             | `324,992`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `38,079`ns (76,158%)  | `38,207`ns (76,414%)           | `26,261`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `210`ns (100%)        | `211`ns (100%)                 | `4,761,905`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (110%)        | `231`ns (110%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (133%)        | `281`ns (134%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
