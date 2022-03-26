# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 26 Mar 2022 04:04:55 GMT with Node.js v16.14.0 (V8 v9.4.146.24-node.20) on fv-az204-53 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `501`ns (249%)        | `600`ns (299%)                 | `1,996,008`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `700`ns (348%)        | `701`ns (349%)                 | `1,428,571`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,000`ns (498%)      | `1,001`ns (498%)               | `1,000,000`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,301`ns (647%)      | `1,401`ns (697%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,500`ns (746%)      | `1,600`ns (796%)               | `666,667`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,201`ns (1,095%)    | `2,401`ns (1,195%)             | `454,339`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,703`ns (2,340%)    | `4,903`ns (2,439%)             | `212,630`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,103`ns (4,031%)    | `8,407`ns (4,183%)             | `123,411`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,400`ns (100%)      | `1,500`ns (107%)               | `714,286`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `48,223`ns (3,445%)   | `52,031`ns (3,717%)            | `20,737`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `65,855`ns (4,704%)   | `71,359`ns (5,097%)            | `15,185`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (149%)        | `301`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (149%)        | `400`ns (199%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (249%)        | `600`ns (299%)                 | `1,996,008`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,001`ns (498%)      | `1,201`ns (598%)               | `999,001`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,200`ns (597%)      | `1,202`ns (598%)               | `833,333`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,001`ns (1,991%)    | `4,203`ns (2,091%)             | `249,938`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `501`ns (251%)        | `502`ns (251%)                 | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,800`ns (900%)      | `1,901`ns (951%)               | `555,556`/sec         |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,800`ns (900%)      | `1,901`ns (951%)               | `555,556`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,103`ns (2,552%)    | `5,403`ns (2,702%)             | `195,963`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,103`ns (3,052%)    | `6,403`ns (3,202%)             | `163,854`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `501`ns (125%)        | `501`ns (125%)                 | `1,996,008`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `300`ns (149%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
