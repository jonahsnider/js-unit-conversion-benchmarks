# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 08 Mar 2025 14:54:44 GMT with Node.js v22.14.0 (V8 v12.4.254.21-node.22) on fv-az1340-985 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (220%)        | `111`ns (222%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `111`ns (222%)        | `120`ns (240%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `131`ns (262%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `271`ns (542%)        | `281`ns (562%)                 | `3,690,037`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `401`ns (802%)        | `411`ns (822%)                 | `2,493,766`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (922%)        | `471`ns (942%)                 | `2,169,197`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `561`ns (1,122%)      | `572`ns (1,144%)               | `1,782,531`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,042`ns (2,084%)    | `1,062`ns (2,124%)             | `959,693`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,034`ns (4,068%)    | `2,055`ns (4,110%)             | `491,642`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `561`ns (100%)        | `641`ns (114%)                 | `1,782,531`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,253`ns (223%)      | `1,353`ns (241%)               | `798,085`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,647`ns (4,572%)   | `27,551`ns (4,911%)            | `38,991`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (233%)        | `150`ns (250%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (233%)        | `140`ns (233%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `160`ns (267%)        | `170`ns (283%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `211`ns (352%)        | `221`ns (368%)                 | `4,739,336`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `451`ns (752%)        | `461`ns (768%)                 | `2,217,295`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,145`ns (3,575%)    | `2,165`ns (3,608%)             | `466,200`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (260%)        | `130`ns (260%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `130`ns (260%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `511`ns (1,022%)      | `521`ns (1,042%)               | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,123`ns (2,246%)    | `1,133`ns (2,266%)             | `890,472`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,937`ns (5,874%)    | `2,957`ns (5,914%)             | `340,483`/sec         |

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
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
