# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 25 Apr 2025 03:45:13 GMT with Node.js v22.14.0 (V8 v12.4.254.21-node.22) on fv-az1306-311 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `101`ns (202%)        | `110`ns (220%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `131`ns (262%)        | `150`ns (300%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `250`ns (500%)        | `251`ns (502%)                 | `4,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `351`ns (702%)        | `361`ns (722%)                 | `2,849,003`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (922%)        | `470`ns (940%)                 | `2,169,197`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `561`ns (1,122%)      | `581`ns (1,162%)               | `1,782,531`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,042`ns (2,084%)    | `1,062`ns (2,124%)             | `959,693`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,004`ns (4,008%)    | `2,024`ns (4,048%)             | `499,002`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `511`ns (100%)        | `591`ns (116%)                 | `1,956,947`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,172`ns (229%)      | `1,263`ns (247%)               | `853,242`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,855`ns (5,060%)   | `27,807`ns (5,442%)            | `38,677`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (183%)        | `120`ns (200%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (183%)        | `110`ns (183%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `131`ns (218%)        | `140`ns (233%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `250`ns (417%)        | `260`ns (433%)                 | `4,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `472`ns (787%)        | `481`ns (802%)                 | `2,118,644`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,125`ns (3,542%)    | `2,145`ns (3,575%)             | `470,588`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `101`ns (202%)        | `110`ns (220%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (1,002%)      | `512`ns (1,024%)               | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,092`ns (2,184%)    | `1,102`ns (2,204%)             | `915,751`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,875`ns (5,750%)    | `2,897`ns (5,794%)             | `347,826`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `201`ns (100%)        | `211`ns (105%)                 | `4,975,124`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (115%)        | `240`ns (119%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `271`ns (135%)        | `281`ns (140%)                 | `3,690,037`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `101`ns (202%)        | `110`ns (220%)                 | `9,900,990`/sec       |

<!-- endblock(results) -->
