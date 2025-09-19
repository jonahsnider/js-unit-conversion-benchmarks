# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 19 Sep 2025 01:58:02 GMT with Node.js v22.19.0 (V8 v12.4.254.21-node.29) on runnervmf4ws1 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (260%)        | `130`ns (260%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (440%)        | `230`ns (460%)                 | `4,545,455`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `411`ns (822%)        | `421`ns (842%)                 | `2,433,090`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (922%)        | `471`ns (942%)                 | `2,169,197`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `551`ns (1,102%)      | `571`ns (1,142%)               | `1,814,882`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,062`ns (2,124%)    | `1,082`ns (2,164%)             | `941,620`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,034`ns (4,068%)    | `2,065`ns (4,130%)             | `491,642`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `662`ns (100%)        | `762`ns (115%)                 | `1,510,574`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,823`ns (275%)      | `2,065`ns (312%)               | `548,546`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `27,215`ns (4,111%)   | `29,359`ns (4,435%)            | `36,744`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `140`ns (233%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (233%)        | `141`ns (235%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (233%)        | `150`ns (250%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (367%)        | `231`ns (385%)                 | `4,545,455`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `451`ns (752%)        | `460`ns (767%)                 | `2,217,295`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,125`ns (3,542%)    | `2,145`ns (3,575%)             | `470,588`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (222%)        | `120`ns (240%)                 | `9,009,009`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (280%)        | `150`ns (300%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (982%)        | `511`ns (1,022%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,093`ns (2,186%)    | `1,103`ns (2,206%)             | `914,913`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,855`ns (5,710%)    | `2,895`ns (5,790%)             | `350,263`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `210`ns (105%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (116%)        | `241`ns (121%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `291`ns (146%)        | `300`ns (150%)                 | `3,436,426`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
