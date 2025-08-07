# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 07 Aug 2025 16:57:33 GMT with Node.js v22.17.1 (V8 v12.4.254.21-node.27) on pkrvmjbmru5nbw0 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `131`ns (262%)        | `141`ns (282%)                 | `7,633,588`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `141`ns (282%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `240`ns (480%)        | `250`ns (500%)                 | `4,166,667`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `410`ns (820%)        | `411`ns (822%)                 | `2,439,024`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `451`ns (902%)        | `461`ns (922%)                 | `2,217,295`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `551`ns (1,102%)      | `571`ns (1,142%)               | `1,814,882`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,062`ns (2,124%)    | `1,102`ns (2,204%)             | `941,620`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,034`ns (4,068%)    | `2,065`ns (4,130%)             | `491,642`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `621`ns (100%)        | `691`ns (111%)                 | `1,610,306`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,783`ns (287%)      | `1,974`ns (318%)               | `560,852`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `26,527`ns (4,272%)   | `28,255`ns (4,550%)            | `37,697`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (171%)        | `130`ns (186%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (186%)        | `131`ns (187%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `150`ns (214%)        | `151`ns (216%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (300%)        | `220`ns (314%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `441`ns (630%)        | `451`ns (644%)                 | `2,267,574`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,115`ns (3,021%)    | `2,145`ns (3,064%)             | `472,813`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `141`ns (282%)        | `150`ns (300%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (962%)        | `501`ns (1,002%)               | `2,079,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,113`ns (2,226%)    | `1,122`ns (2,244%)             | `898,473`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,865`ns (5,730%)    | `2,895`ns (5,790%)             | `349,040`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (115%)        | `231`ns (116%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (140%)        | `281`ns (141%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `51`ns (102%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `110`ns (220%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
