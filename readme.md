# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 09 Aug 2025 01:01:36 GMT with Node.js v22.18.0 (V8 v12.4.254.21-node.27) on pkrvmsl9tci6h6u (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `141`ns (282%)                 | `7,142,857`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `150`ns (300%)        | `151`ns (302%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `241`ns (482%)        | `251`ns (502%)                 | `4,149,378`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `401`ns (802%)        | `411`ns (822%)                 | `2,493,766`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `431`ns (862%)        | `432`ns (864%)                 | `2,320,186`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `551`ns (1,102%)      | `571`ns (1,142%)               | `1,814,882`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,052`ns (2,104%)    | `1,082`ns (2,164%)             | `950,570`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,984`ns (3,968%)    | `2,014`ns (4,028%)             | `504,032`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `551`ns (100%)        | `661`ns (120%)                 | `1,814,882`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,773`ns (322%)      | `1,974`ns (358%)               | `564,016`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,855`ns (4,692%)   | `28,047`ns (5,090%)            | `38,677`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (233%)        | `140`ns (233%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `170`ns (283%)        | `170`ns (283%)                 | `5,882,353`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `240`ns (400%)        | `251`ns (418%)                 | `4,166,667`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (768%)        | `471`ns (785%)                 | `2,169,197`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,105`ns (3,508%)    | `2,133`ns (3,555%)             | `475,059`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `141`ns (282%)        | `150`ns (300%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (982%)        | `511`ns (1,022%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,152`ns (2,304%)    | `1,162`ns (2,324%)             | `868,056`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,915`ns (5,830%)    | `2,937`ns (5,874%)             | `343,053`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (116%)        | `240`ns (120%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `290`ns (145%)        | `291`ns (146%)                 | `3,448,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
