# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 09 Apr 2025 23:36:52 GMT with Node.js v22.14.0 (V8 v12.4.254.21-node.22) on fv-az1959-140 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (220%)        | `120`ns (240%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `241`ns (482%)        | `251`ns (502%)                 | `4,149,378`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `410`ns (820%)        | `411`ns (822%)                 | `2,439,024`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (922%)        | `471`ns (942%)                 | `2,169,197`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `561`ns (1,122%)      | `572`ns (1,144%)               | `1,782,531`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,092`ns (2,184%)    | `1,112`ns (2,224%)             | `915,751`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,994`ns (3,988%)    | `2,014`ns (4,028%)             | `501,505`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `571`ns (100%)        | `641`ns (112%)                 | `1,751,313`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,132`ns (198%)      | `1,252`ns (219%)               | `883,392`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,695`ns (4,500%)   | `27,567`ns (4,828%)            | `38,918`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (157%)        | `111`ns (159%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (157%)        | `111`ns (159%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (171%)        | `140`ns (200%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `260`ns (371%)        | `270`ns (386%)                 | `3,846,154`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (673%)        | `481`ns (687%)                 | `2,123,142`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,105`ns (3,007%)    | `2,125`ns (3,036%)             | `475,059`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (1,002%)      | `510`ns (1,020%)               | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,122`ns (2,244%)    | `1,123`ns (2,246%)             | `891,266`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,885`ns (5,770%)    | `2,907`ns (5,814%)             | `346,620`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (115%)        | `231`ns (116%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (140%)        | `281`ns (141%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
