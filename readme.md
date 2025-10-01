# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 01 Oct 2025 02:27:37 GMT with Node.js v22.19.0 (V8 v12.4.254.21-node.29) on runnervm3ublj (Linux-x64 Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `63`ns (100%)         | `64`ns (102%)                  | `15,873,016`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `118`ns (187%)        | `120`ns (190%)                 | `8,474,576`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (192%)        | `132`ns (210%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `154`ns (244%)        | `159`ns (252%)                 | `6,493,506`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `232`ns (368%)        | `244`ns (387%)                 | `4,310,345`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `426`ns (676%)        | `475`ns (754%)                 | `2,347,418`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `442`ns (702%)        | `481`ns (763%)                 | `2,262,443`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `542`ns (860%)        | `564`ns (895%)                 | `1,845,018`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,060`ns (1,683%)    | `1,123`ns (1,783%)             | `943,396`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,165`ns (3,437%)    | `2,195`ns (3,484%)             | `461,894`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `457`ns (100%)        | `475`ns (104%)                 | `2,188,184`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,358`ns (297%)      | `1,437`ns (314%)               | `736,377`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `23,935`ns (5,237%)   | `24,527`ns (5,367%)            | `41,780`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `59`ns (100%)         | `60`ns (102%)                  | `16,949,153`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `102`ns (173%)        | `105`ns (178%)                 | `9,803,922`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `148`ns (251%)        | `150`ns (254%)                 | `6,756,757`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `163`ns (276%)        | `168`ns (285%)                 | `6,134,969`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `231`ns (392%)        | `246`ns (417%)                 | `4,329,004`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `482`ns (817%)        | `493`ns (836%)                 | `2,074,689`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,259`ns (3,829%)    | `2,311`ns (3,917%)             | `442,674`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `67`ns (100%)         | `68`ns (101%)                  | `14,925,373`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `118`ns (176%)        | `121`ns (181%)                 | `8,474,576`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `133`ns (199%)        | `137`ns (204%)                 | `7,518,797`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `169`ns (252%)        | `172`ns (257%)                 | `5,917,160`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `553`ns (825%)        | `609`ns (909%)                 | `1,808,318`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,115`ns (1,664%)    | `1,132`ns (1,690%)             | `896,861`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,863`ns (4,273%)    | `2,913`ns (4,348%)             | `349,284`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `209`ns (100%)        | `214`ns (102%)                 | `4,784,689`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `234`ns (112%)        | `236`ns (113%)                 | `4,273,504`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `301`ns (144%)        | `307`ns (147%)                 | `3,322,259`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `45`ns (100%)         | `46`ns (102%)                  | `22,222,222`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `103`ns (229%)        | `105`ns (233%)                 | `9,708,738`/sec       |

<!-- endblock(results) -->
