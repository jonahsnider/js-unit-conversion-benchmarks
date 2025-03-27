# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 27 Mar 2025 10:29:07 GMT with Node.js v22.14.0 (V8 v12.4.254.21-node.22) on fv-az1316-55 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (420%)        | `220`ns (440%)                 | `4,761,905`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `421`ns (842%)        | `431`ns (862%)                 | `2,375,297`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (942%)        | `481`ns (962%)                 | `2,123,142`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `581`ns (1,162%)      | `601`ns (1,202%)               | `1,721,170`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,072`ns (2,144%)    | `1,093`ns (2,186%)             | `932,836`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,004`ns (4,008%)    | `2,024`ns (4,048%)             | `499,002`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `632`ns (100%)        | `721`ns (114%)                 | `1,582,278`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,352`ns (214%)      | `1,482`ns (234%)               | `739,645`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `26,063`ns (4,124%)   | `27,871`ns (4,410%)            | `38,369`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (183%)        | `120`ns (200%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `121`ns (202%)        | `140`ns (233%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (217%)        | `131`ns (218%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `221`ns (368%)        | `231`ns (385%)                 | `4,524,887`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `441`ns (735%)        | `441`ns (735%)                 | `2,267,574`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,095`ns (3,492%)    | `2,125`ns (3,542%)             | `477,327`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `531`ns (1,062%)      | `541`ns (1,082%)               | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,132`ns (2,264%)    | `1,142`ns (2,284%)             | `883,392`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,957`ns (5,914%)    | `2,987`ns (5,974%)             | `338,181`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `210`ns (100%)        | `211`ns (100%)                 | `4,761,905`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (110%)        | `231`ns (110%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `281`ns (134%)        | `291`ns (139%)                 | `3,558,719`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `111`ns (222%)        | `120`ns (240%)                 | `9,009,009`/sec       |

<!-- endblock(results) -->
