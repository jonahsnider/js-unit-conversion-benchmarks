# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 10 Jun 2025 05:49:48 GMT with Node.js v22.16.0 (V8 v12.4.254.21-node.26) on fv-az1338-86 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (300%)        | `160`ns (320%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (460%)        | `231`ns (462%)                 | `4,347,826`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `371`ns (742%)        | `381`ns (762%)                 | `2,695,418`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (922%)        | `471`ns (942%)                 | `2,169,197`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `570`ns (1,140%)      | `582`ns (1,164%)               | `1,754,386`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,082`ns (2,164%)    | `1,113`ns (2,226%)             | `924,214`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,044`ns (4,088%)    | `2,075`ns (4,150%)             | `489,237`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `652`ns (100%)        | `741`ns (114%)                 | `1,533,742`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,102`ns (169%)      | `1,212`ns (186%)               | `907,441`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,759`ns (3,951%)   | `27,807`ns (4,265%)            | `38,821`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (167%)        | `110`ns (183%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (183%)        | `110`ns (183%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (200%)        | `130`ns (217%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `231`ns (385%)        | `241`ns (402%)                 | `4,329,004`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `441`ns (735%)        | `470`ns (783%)                 | `2,267,574`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,055`ns (3,425%)    | `2,175`ns (3,625%)             | `486,618`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `111`ns (222%)        | `120`ns (240%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `471`ns (942%)        | `491`ns (982%)                 | `2,123,142`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,122`ns (2,244%)    | `1,132`ns (2,264%)             | `891,266`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,935`ns (5,870%)    | `2,975`ns (5,950%)             | `340,716`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (115%)        | `231`ns (116%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `261`ns (131%)        | `271`ns (136%)                 | `3,831,418`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `91`ns (182%)         | `100`ns (200%)                 | `10,989,011`/sec      |

<!-- endblock(results) -->
