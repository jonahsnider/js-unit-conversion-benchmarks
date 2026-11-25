# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 25 Nov 2026 10:19:23 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on runnervm0hi8g (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `170`ns (283%)        | `210`ns (350%)                 | `5,882,353`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `171`ns (285%)        | `201`ns (335%)                 | `5,847,953`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `200`ns (333%)        | `241`ns (402%)                 | `5,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `291`ns (485%)        | `331`ns (552%)                 | `3,436,426`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `551`ns (918%)        | `622`ns (1,037%)               | `1,814,882`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `671`ns (1,118%)      | `801`ns (1,335%)               | `1,490,313`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `722`ns (1,203%)      | `802`ns (1,337%)               | `1,385,042`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,643`ns (2,738%)    | `1,804`ns (3,007%)             | `608,643`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,735`ns (4,558%)    | `2,965`ns (4,942%)             | `365,631`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `682`ns (100%)        | `791`ns (116%)                 | `1,466,276`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,582`ns (232%)      | `1,794`ns (263%)               | `632,111`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `24,127`ns (3,538%)   | `25,919`ns (3,800%)            | `41,447`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `131`ns (218%)        | `141`ns (235%)                 | `7,633,588`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `131`ns (218%)        | `140`ns (233%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `160`ns (267%)        | `161`ns (268%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (367%)        | `231`ns (385%)                 | `4,545,455`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (802%)        | `491`ns (818%)                 | `2,079,002`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,933`ns (3,222%)    | `1,964`ns (3,273%)             | `517,331`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `49`ns (100%)         | `50`ns (102%)                  | `20,408,163`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (245%)        | `121`ns (247%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `141`ns (288%)        | `151`ns (308%)                 | `7,092,199`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `150`ns (306%)        | `151`ns (308%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (1,022%)      | `541`ns (1,104%)               | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,172`ns (2,392%)    | `1,192`ns (2,433%)             | `853,242`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,727`ns (5,565%)    | `2,775`ns (5,663%)             | `366,703`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `220`ns (100%)        | `230`ns (105%)                 | `4,545,455`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `241`ns (110%)        | `251`ns (114%)                 | `4,149,378`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `310`ns (141%)        | `321`ns (146%)                 | `3,225,806`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `110`ns (220%)        | `191`ns (382%)                 | `9,090,909`/sec       |

<!-- endblock(results) -->
