# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 31 Oct 2022 22:19:04 GMT with Node.js v18.12.0 (V8 v10.2.154.15-node.12) on fv-az570-480 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `601`ns (299%)        | `800`ns (398%)                 | `1,663,894`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `700`ns (348%)        | `701`ns (349%)                 | `1,428,571`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `901`ns (448%)        | `1,001`ns (498%)               | `1,109,878`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,301`ns (647%)      | `1,501`ns (747%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,500`ns (746%)      | `1,700`ns (846%)               | `666,667`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,501`ns (1,244%)    | `2,801`ns (1,394%)             | `399,840`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,903`ns (2,439%)    | `5,103`ns (2,539%)             | `203,957`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,007`ns (4,481%)    | `9,407`ns (4,680%)             | `111,025`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,401`ns (100%)      | `1,601`ns (114%)               | `713,776`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `53,023`ns (3,785%)   | `59,711`ns (4,262%)            | `18,860`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,855`ns (5,272%)   | `81,727`ns (5,833%)            | `13,540`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (201%)        | `501`ns (251%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (250%)        | `600`ns (300%)                 | `2,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,301`ns (651%)      | `1,500`ns (750%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,400`ns (700%)      | `1,701`ns (851%)               | `714,286`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,203`ns (2,102%)    | `4,403`ns (2,202%)             | `237,925`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `701`ns (351%)        | `800`ns (400%)                 | `1,426,534`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,601`ns (801%)      | `2,000`ns (1,000%)             | `624,610`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `2,101`ns (1,051%)    | `2,301`ns (1,151%)             | `475,964`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,803`ns (2,902%)    | `6,103`ns (3,052%)             | `172,325`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,803`ns (3,402%)    | `7,103`ns (3,552%)             | `146,994`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `300`ns (149%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (200%)        | `401`ns (200%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
